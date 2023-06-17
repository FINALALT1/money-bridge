"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { MouseEvent } from "react";
import SpecialityList from "./SpecialityList";
import CompanyList from "../common/CompanyList";
import { createQueryString } from "@/utils/createQueryString";
import { ICompanyList } from "@/types/pblist";
import { usePBListQueries } from "@/hooks/usePBListQueries";

const BUTTON_STYLE = "w-1/2 rounded-t-md bg-white py-4 shadow-md box-border";
function PBMenu({ companyList }: { companyList: ICompanyList }) {
  const { handleTypeClick, handleIDClick, company, speciality } = usePBListQueries();

  return (
    <nav className="mb-8">
      <div onClick={handleTypeClick}>
        <button data-type="speciality" className={`${BUTTON_STYLE} ${speciality && "border-b-4"}`}>
          분야별
        </button>
        <button data-type="company" className={`${BUTTON_STYLE} ${company && "border-b-4"}`}>
          증권사별
        </button>
      </div>
      <div className="h-[190px] w-full rounded-b-md bg-white px-3 py-4">
        {speciality && <SpecialityList nowSpeciality={speciality} handleIDClick={handleIDClick} />}
        {company && <CompanyList companyList={companyList} nowCompany={company} />}
      </div>
    </nav>
  );
}

export default PBMenu;