"use client";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const yup_password = yup.string().min(8).max(15).required();

function ResetPasswordForm() {
  const [inputs, setInputs] = useState({
    first: "",
    second: "",
  });

  const schema = yup.object().shape({
    first: yup_password,
    second: yup.string().oneOf([yup.ref("first")]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema), defaultValues: { first: "", second: "" } });

  const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (!isValid) {
      alert("양식을 확인해");
      return;
    } else if (checkWhitespace(inputs.first) || checkWhitespace(inputs.second)) {
      alert("공백있음");
      return;
    }
  };

  errors.first?.type === "required" ? (errors.first = undefined) : "";
  errors.first?.type === "min" ? (errors.first.ref?.value === "" ? (errors.first = undefined) : "") : "";
  errors.second?.type === "required" ? (errors.second = undefined) : "";
  errors.second?.type === "min" ? (errors.second.ref?.value === "" ? (errors.second = undefined) : "") : "";
  errors.second?.type === "oneOf" ? (errors.second.ref?.value === "" ? (errors.second = undefined) : "") : "";

  return (
    <div className="mt-[24px] px-[16px]">
      <form onSubmit={() => handleSubmit(onSubmit)} onChange={handleChange}>
        <div className="mb-[10px]">
          <h2 className="mb-[16px] text-[12px] leading-[18px]">기존과 다른 비밀번호를 입력해 주세요.</h2>
          <input
            type="password"
            className={`formInput ${errors.first || checkWhitespace(inputs.first) ? "formInput_warn" : ""} ${
              dirtyFields.first ? "formInput_entering" : ""
            }`}
            {...register("first")}
            value={inputs.first}
          />
          <div className="mt-[2px] h-[18px] pl-[8px]">
            <p className={`text-[12px] leading-[18px] ${errors.first ? "text-[#eb5147]" : "text-[#0090ff]"}`}>
              {dirtyFields.first ? "*영문(대소문자), 숫자 포함하여 8자 이상으로 작성해 주세요." : ""}
            </p>
            <p
              className={`text-[12px] leading-[18px] ${
                checkWhitespace(inputs.first) ? "text-[#eb5147]" : "text-[#0090ff]"
              }`}
            >
              {dirtyFields.first ? "*공백없이 작성해 주세요." : ""}
            </p>
          </div>
        </div>
        <div className="mb-[10px]">
          <h2 className="mb-[16px] mt-[24px] text-[12px] leading-[18px]">다시 한 번 입력해 주세요</h2>
          <input
            type="password"
            className={`formInput ${errors.second ? "formInput_warn" : ""} ${
              dirtyFields.second ? "formInput_entering" : ""
            }`}
            {...register("second")}
            value={inputs.second}
          />
          <div className="h-[18px] pl-[8px]">
            <span className={`text-[12px] leading-[18px] ${errors.second ? "text-[#eb5147]" : "text-[#0090ff]"}`}>
              {dirtyFields.second ? "동일한 비밀번호를 입력해 주세요" : ""}
            </span>
          </div>
        </div>
        {/* <button type="submit" className={`mt-[16px] h-[56px] w-full rounded-[8px] ${isValid ? "bg-[#153445]" : "bg-[#ececec]"}`}> */}
        <button
          type="button"
          className={`mt-[16px] h-[56px] w-full rounded-[8px] ${isValid ? "bg-[#153445]" : "bg-[#ececec]"} ${
            isValid ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={onSubmit}
          disabled={!isValid}
        >
          <span className={`text-[20px] font-bold leading-[28px] ${isValid ? "text-white" : "text-[#565656]"}`}>
            확인
          </span>
        </button>
      </form>
    </div>
  );
}

export default ResetPasswordForm;

const checkWhitespace = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
};
