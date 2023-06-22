"use client";
import React from "react";
import PbCardItem from "../common/Card/CardItem/PbCardItem";
import ContentCardItem from "../common/Card/CardItem/ContentCardItem";
import { useUserStore } from "@/store/userStore";
import { getContents } from "@/app/apis/services/common";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getUserContents } from "@/app/apis/services/user";
const data = [
  {
    id: 1,
    title: "제목입니다1",
    pbName: "김피비",
    companyLogo: "logo.png",
    career: 10,
    tag1: "시장정보",
    tag2: "쉽게읽혀요",
    msg: "2천억을 움직인 부자 전문가 이재관입니다.", // 자기 소개 문구(한줄 소개)
  },
  {
    id: 2,
    title: "제목입니다2",
    pbName: "김피비",
    companyLogo: "logo.png",
    career: 10,
    tag1: "시장정보",
    tag2: "쉽게읽혀요",
    msg: "자신있는 투자 전문가 이미자입니다.",
  },
];

interface BoardListProps {
  career: number;
  companyLogo: string;
  id: number;
  isBookmark: boolean;
  msg: string;
  pbName: string;
  tag1: string;
  tag2: string;
  title: string;
}
function CustomListSection() {
  const {
    user: { role },
  } = useUserStore();

  const queryOptions = role === "USER" ? ["userBoard"] : ["noBoard"];

  const {
    data: boardList,
    error,
    isLoading,
  } = useQuery<BoardListProps[], AxiosError>(queryOptions, role === "USER" ? getUserContents : getContents);

  return (
    <section className="relative w-full mt-3 ">
      <h3 className="text-xl font-bold">
        ㅇㅇㅇ님의 성향을 딱! 맞춘
        <br /> 실제 PB의 투자 정보
      </h3>
      <ul className="flex flex-wrap items-center justify-between py-4">
        {boardList &&
          boardList.map(item => (
            <>
              <ContentCardItem item={item} />
            </>
          ))}
      </ul>
    </section>
  );
}

export default CustomListSection;