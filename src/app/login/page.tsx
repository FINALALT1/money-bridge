"use client";
import TopNav from "@/components/common/TopNav";
import { useJoinStore } from "@/store/joinStore";
import Link from "next/link";
import React, { useEffect } from "react";

function SelectLoginType() {
  const { resetInformations } = useJoinStore();
  useEffect(() => {
    resetInformations();
  }, []);

  return (
    <>
      <TopNav title="로그인" hasBack backGroundWhite />
      <div className="mr-19 mt-[86px] text-black">
        <p className="font-bold ">처음뵙겠습니다,</p>
        <p className="font-bold">
          <span className="text-3xl text-primary-normal">MONEY BRIDGE </span>입니다.
        </p>
        <p>내가 찾던 PB와 투자자를 지금 만나보세요 :&#41;</p>
        <p></p>
      </div>
      <div className="mb-24 mt-[200px] flex flex-col gap-4">
        <Link
          href={"/login/user"}
          className="flex h-14 w-full items-center  justify-center rounded-[8px] bg-secondary-heavy text-xl  font-bold leading-7 text-white"
        >
          일반회원
        </Link>
        <Link
          href={"/login/pb"}
          className="flex h-14 w-full items-center  justify-center rounded-[8px] bg-primary-normal text-xl font-bold leading-7 text-white"
        >
          PB
        </Link>
      </div>
    </>
  );
}

export default SelectLoginType;
