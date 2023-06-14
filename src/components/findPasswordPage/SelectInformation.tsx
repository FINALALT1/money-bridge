import React from "react";
import InformationCheck from "../findEmailPage/InformationCheck";
import { usePathname, useRouter } from "next/navigation";

function SelectInformation() {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <p className="mb-[40px] mt-[56px] text-[20px] font-bold leading-[28px]">해당하는 정보를 선택해주세요.</p>
      <InformationCheck />
      <button
        className="mb-[96px] mt-[266px] h-[56px] w-full rounded-[8px] bg-[#153445] text-[20px] font-bold leading-[28px] text-white"
        onClick={() => router.push(`/findPassword/${pathName.split("/")[2]}/resetPassword`)}
      >
        비밀번호 재설정
      </button>
    </>
  );
}

export default SelectInformation;
