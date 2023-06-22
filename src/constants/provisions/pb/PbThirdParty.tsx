import React from "react";

function PbThirdParty() {
  return (
    <div className="cont">
      시스메틱 (이하 "서비스"라 합니다)는 더 나은 서비스 향상을 위해, 이용자의 개인 정보를 외부에, 일부를 제공 및
      운용하고 있습니다. 당사는 파트너와의 계약을 통해서 서비스 제공자의 개인 정보 보호 관련 비밀 엄수 및 유지하고
      있으며, 제3자 제공의 금지 및 사고 시의 책임 부담 등을 명확히 규정하고 당해 내용을 전적으로 보관하여, 이용자의 권익
      및 권리를 보호하고자 합니다. 특히, 개인 정보를 제공하는 경우, 정보 주체가 만 14세 미만의 아동인 경우에는 해당
      아동의 법정대리인의 동의를 받아야 합니다.
      <table
        style={{
          border: "1px solid",
          display: "grid",
          gridTemplateRows: "1fr 3fr",
        }}
      >
        <thead style={{ borderBottom: "1px solid" }}>
          <tr
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}
          >
            <th
              style={{
                borderRight: "1px solid",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              제공받는 자
            </th>
            <th
              style={{
                borderRight: "1px solid",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              제공 목적
            </th>
            <th
              style={{
                borderRight: "1px solid",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              항 목
            </th>
            <th
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              보유 기간
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}
          >
            <td style={{ borderRight: "1px solid", height: "243px" }}>개인정보의 수집·이용 목적</td>
            <td style={{ borderRight: "1px solid", height: "243px" }}>다양한 상품정보 이용 안내 및 투자정보 제공</td>
            <td style={{ borderRight: "1px solid", height: "243px" }}>
              이메일 주소, 비밀번호, 주소, 이름, 휴대전화 번호, IP주소, 기기고유번호, 서비스 이용기록, 방문 기록, 불량
              이용 기록 등
            </td>
            <td>회원 탈퇴시까지</td>
          </tr>
        </tbody>
      </table>
      단, 개인 정보는 본 서비스를 제공하는 기간 동안에 보유 및 이용되고, 이용자의 서비스 해지(회원 탈퇴)시 해당인의 개인
      정보가 열람 또는 이용될 수 없도록 파기 처리합니다. 아래의 경우는 예외로 합니다. <br />
      <br />
      1 법령에서 따로 정하는 경우에는 해당기간까지 보유 <br />
      2 분쟁 해결을 위한 해지 후 6개월까지 보유하고, 해당 기간 종료 후 삭제함. <br />
      <br />
      위의 개인 정보 제공에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우, 시스메틱에서 제공하는
      서비스를 원활하게 활용할 수 없으며, 일부는 제한이 있을 수 있습니다.
    </div>
  );
}

export default PbThirdParty;