"use client";

import TopNav from "@/components/common/TopNav";
import { useState } from "react";
import ManagementCalendar from "../../components/schedulePage/Calendar";
import "@/styles/calendar.css";
import question from "/public/assets/images/question_mark.svg";
import Image from "next/image";
import InfoModal from "@/components/schedulePage/InfoModal";
import DayScheduleList from "@/components/schedulePage/DayScheduleList";
import ConsultationTimeCard from "@/components/schedulePage/ConsultationTimeCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getConsultTime, getScheduleInfo } from "../apis/services/pb";
import { AxiosError } from "axios";
import { ConsultationTimeCardProps, DayScheduleListProps } from "@/types/schedule";
import dayjs from "dayjs";

function SchedulePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickDay, setClickDay] = useState("");
  const [clickDate, setClickDate] = useState({
    year: dayjs().year(),
    month: dayjs().month() + 1,
  });

  const {
    data: schedule,
    isError: scheduleError,
    isLoading: scheduleLoading,
  } = useQuery<DayScheduleListProps[], AxiosError>(
    ["pbSchedlue", clickDay],
    () =>
      getScheduleInfo({
        year: clickDate.year,
        month: clickDate.month,
      }),
    {
      cacheTime: 0,
    },
  );

  const {
    data: consultTime,
    isError,
    isLoading,
  } = useQuery<ConsultationTimeCardProps, AxiosError>(["consultTime"], getConsultTime, { staleTime: Infinity });

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const clickDayList = schedule?.filter(item => item.day === clickDay);

  console.log(scheduleError);

  return (
    <div className="relative flex flex-col items-center">
      <Image
        className="absolute right-7 top-6 z-10 cursor-pointer "
        src={question}
        alt={question}
        width={20}
        height={20}
        onClick={onClickHandler}
      />
      {isOpen && <InfoModal />}
      <TopNav title={"일정관리"} hasBack={true}></TopNav>
      <ManagementCalendar reservationList={schedule} setIsClickDay={setClickDay} setClickDate={setClickDate} />
      <DayScheduleList clickDayList={clickDayList} isClickDay={clickDay} />
      <ConsultationTimeCard
        consultStart={consultTime?.consultStart}
        consultEnd={consultTime?.consultEnd}
        consultNotice={consultTime?.consultNotice}
      />
    </div>
  );
}

export default SchedulePage;
