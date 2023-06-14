"use client";
import React, { useEffect, useState } from "react";
import type { BadgeProps } from "antd";
import { Badge, Calendar } from "antd";
import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import dayjs from "dayjs";
import { ManagementCalendarProps } from "@/types/schedule";

dayjs.locale("ko");

const ManagementCalendar: React.FC<ManagementCalendarProps> = ({ reservationList, setIsClickDay }) => {
  const [scheduleData, setScheduleData] = useState(reservationList); // 초기 데이터로 상태 초기화
  const [initialDateSelected, setInitialDateSelected] = useState(false); // 초기 날짜 선택 여부를 확인하는 상태, 오늘 날짜 선택

  useEffect(() => {
    setScheduleData(reservationList);

    if (!initialDateSelected && reservationList.length > 0) {
      const today = dayjs().format("YYYY-MM-DD");
      setIsClickDay(today);
      setInitialDateSelected(true);
    }
  }, [reservationList, setIsClickDay, initialDateSelected]);

  const getListData = (value: Dayjs) => {
    const dateString = value.format("YYYY-MM-DD");
    const filteredData = scheduleData.filter(item => item.day === dateString);

    // 데이터에 따라 스케줄 상태를 반환
    const listData = filteredData.map(item => {
      let status: BadgeProps["status"] = "default";

      if (item.process === "상담완료") {
        status = "success";
      } else if (item.process === "예약확정") {
        status = "warning";
      } else if (item.process === "신규예약") {
        status = "error";
      } else if (item.process === "예약취소") {
        status = "processing";
      }

      return { type: status };
    });

    return listData;
  };

  const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  const onSelect = (date: Dayjs | null) => {
    if (date) {
      const dateString = date.format("YYYY-MM-DD");
      setIsClickDay(dateString);
    }
  };
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    const setListData = listData.filter((obj, index, self) => index === self.findIndex(item => item.type === obj.type));
    return setListData.length ? (
      <ul className="events">
        {setListData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type as BadgeProps["status"]} />
          </li>
        ))}
      </ul>
    ) : null;
  };

  const disabledDate = (current: Dayjs) => {
    const listData = getListData(current);
    return listData.length === 0;
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  return <Calendar cellRender={cellRender} onSelect={onSelect} disabledDate={disabledDate} />;
};

export default ManagementCalendar;
