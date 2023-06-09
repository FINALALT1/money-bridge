import Image from "next/image";
import { ICompanyListProps } from "@/types/pblist";
import { Carousel, ConfigProvider } from "antd";
import { chunkArray } from "@/utils/chunkArray";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import "@/styles/companyCarousel.css";
import { useMemo } from "react";

const LI_STYLE =
  "flex flex-col py-2 justify-between w-full h-[64px] justify-center items-center rounded-sm cursor-pointer";

function CompanyList({ companyList, nowCompany, handleIDClick }: ICompanyListProps) {
  const chunkedCompanyList = useMemo(() => {
    return chunkArray([{ id: "ALL", logo: null, name: "전체보기" }, ...companyList], 8);
  }, [companyList]);

  const nowCard = nowCompany === "ALL" ? 0 : Math.ceil((Number(nowCompany) + 1) / 8) - 1;

  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            colorBgContainer: "#242424",
          },
        },
      }}
    >
      <Carousel
        arrows={true}
        nextArrow={<MdOutlineArrowForwardIos />}
        prevArrow={<MdOutlineArrowBackIos />}
        dots={true}
        dotPosition="bottom"
        draggable={true}
        initialSlide={nowCard}
      >
        {chunkedCompanyList.map((companyList, index) => (
          <div key={index}>
            <ul className="mx-auto grid max-w-[680px] grid-cols-4 gap-4 px-4 pb-6">
              {companyList.map(company => (
                <li
                  data-id={company.id}
                  onClick={handleIDClick}
                  className={`${LI_STYLE} ${company.id == nowCompany && "bg-primary-normal font-bold text-white"} ${
                    company.name === "전체보기" && "!justify-center"
                  }`}
                  key={company.id}
                >
                  {company.logo && <Image src={company.logo} alt={company.name} width={30} height={30} />}
                  {company.name === "전체보기" ? (
                    <p>
                      전체
                      <br />
                      보기
                    </p>
                  ) : (
                    <p className="text-xs font-bold leading-3">{company.name}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Carousel>
    </ConfigProvider>
  );
}

export default CompanyList;
