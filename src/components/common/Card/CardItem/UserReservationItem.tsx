"use client";

import DefaultProfile from "/public/assets/images/profile.svg";
import Image from "next/image";
import Link from "next/link";
import { UserReservationItemProps } from "@/types/pb";

function UserReservationItem({ children, buttonName, href, isRole, profileImage, disabled }: UserReservationItemProps) {
  return (
    <li className="flex h-[90px] w-full justify-between overflow-hidden rounded-lg bg-white pl-4 shadow-md">
      <div className="flex items-center">
        <Image
          src={profileImage ? profileImage : DefaultProfile}
          width={70}
          height={70}
          alt="profile"
          className="h-[70px] max-w-[70px] rounded-full object-cover"
        />
      </div>
      <div className="flex w-[54%] flex-col justify-center rounded-lg px-4 py-3 ">{children}</div>
      {disabled ? (
        <div
          className={
            isRole === "USER"
              ? "text-lg ml-auto flex h-auto w-[100px] items-center justify-center rounded-r-lg bg-secondary-heavy text-sm font-bold text-white"
              : "text-lg ml-auto flex h-auto w-[100px] items-center justify-center rounded-r-lg bg-primary-normal text-sm font-bold text-white"
          }
        >
          <span>{buttonName}</span>
        </div>
      ) : (
        <Link
          href={href ? href : "/"}
          shallow={true}
          className={
            isRole === "USER"
              ? "text-lg ml-auto flex h-auto w-[100px] items-center justify-center rounded-r-lg bg-secondary-heavy text-sm font-bold text-white"
              : "text-lg ml-auto flex h-auto w-[100px] items-center justify-center rounded-r-lg bg-primary-normal text-sm font-bold text-white"
          }
        >
          <span>{buttonName}</span>
        </Link>
      )}
    </li>
  );
}

export default UserReservationItem;
