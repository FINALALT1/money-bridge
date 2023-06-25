import { IJoinInformation, joinInDTO } from "@/types/join";
import { formInstance, instance } from "../axios";
import { IUser } from "@/types/login";
import { AxiosError } from "axios";

export const userLogin = async (user: IUser) => {
  const res = await instance.post("/login", user);
  return res;
};

export const userJoin = async (joinData: IJoinInformation) => {
  const res = await instance.post(`/join/user`, joinData);
  return res.data;
};

export const pbJoin = async (joinData: IJoinInformation) => {
  const { email, password, name, phoneNumber, businessCard, branchId, career, speciality1, speciality2, agreements } =
    joinData;
  const formData = new FormData();

  if (businessCard) {
    formData.append("businessCard", businessCard);
  }
  const joinInDTO: joinInDTO = {
    email,
    password,
    name,
    phoneNumber,
    branchId,
    career,
    speciality1,
    speciality2,
    agreements,
  };

  formData.append("joinInDTO", new Blob([JSON.stringify(joinInDTO)], { type: "application/json" }));

  const res = await formInstance.post(`/join/pb`, formData);
  return res.data;
};

export const joinAuthentication = async (email: string) => {
  const res = await instance.post("/email/authentication", { email: email });
  return res.data;
};

export const findEmail = async (user: IUser) => {
  const res = await instance.post("/email", user);
  return res.data;
};

export const passwordAuthentication = async (user: IUser) => {
  const res = await instance.post("/password", user);
  return res.data;
};

export const resetPassword = async (user: IUser) => {
  const res = await instance.patch("/password", user);
  return res.data;
};

export const getCompanyList = async () => {
  const res = await instance.get(`/companies?includeLogo=false`);
  return res.data;
};

export const getCompanyLocation = async (companyId: number, keyword: string) => {
  const res = await instance.get(`/branch?companyId=${companyId}&keyword=${keyword}`);
  return res.data;
};

export const userLogout = async () => {
  try {
    const res = await instance.post("/auth/logout");
    return res.data.data;
  } catch (error: any) {
<<<<<<< HEAD
    throw new Error(error.response.data);
=======
    throw new AxiosError(error.response.data.data.value);
>>>>>>> 323bb4a1210ce6c1f42dda85d6441723001b1f2b
  }
};

export const userWithdraw = async (password: string) => {
  const data = { password };
  try {
    const res = await instance.delete("/auth/account", { data });
    return res.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data.data);
  }
};

export const userCheckPassword = async (password: string) => {
  try {
    const res = await instance.post("/auth/password", { password });
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data.data);
  }
};

export const getMyInfo = async () => {
  try {
    const res = await instance.get("/auth/myinfo");
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response);
  }
};

export const editMyInfo = async (data: { [key: string]: string }) => {
  try {
    const res = await instance.patch("/auth/myinfo", data);
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data.data);
  }
};

export const getLoginedUserInfo = async () => {
  try {
    const res = await instance.get("/auth/account");
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};
