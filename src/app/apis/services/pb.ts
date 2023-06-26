import { ConsultationTimeCardProps } from "@/types/schedule";
import { instance } from "../axios";
import { AxiosError } from "axios";
import { ChangeReservationProps, ConsultationListProps, GetScheduleInfoProps } from "@/types/pb";

export const getPBInfo = async () => {
  try {
    const res = await instance.get("/pb/mypage");
    return res.data;
  } catch (error: any) {
    throw new Error(error.response.data.status);
  }
};

export const getPbNotLogin = async (id: number) => {
  try {
    const res = await instance.get(`/profile/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getPbProfile = async (id: number) => {
  try {
    const res = await instance.get(`/auth/profile/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getPbPortfolio = async (id: number | undefined) => {
  try {
    const res = await instance.get(`/auth/portfolio/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getSamePb = async (id: number | undefined) => {
  try {
    const res = await instance.get(`/auth/${id}/same`);
    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getPbContent = async (id: number, page: number) => {
  try {
    const res = await instance.get(`/auth/boards/${id}`, { params: { page } });
    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getReviewStyle = async (id: number | undefined) => {
  try {
    const res = await instance.get(`/review/style/${id}`);
    return res.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getPbReviewRecent = async (id: number | undefined) => {
  try {
    const res = await instance.get(`/reviews/${id}`);
    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getPbReview = async (id: number | undefined, page: number) => {
  try {
    const res = await instance.get(`auth/reviews/${id}`, { params: { page } });
    return res.data.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getScheduleInfo = async ({ year, month }: GetScheduleInfoProps) => {
  try {
    const res = await instance.get("/pb/reservation", {
      params: {
        year,
        month,
      },
    });
    return res.data.data;
  } catch (error) {}
};

export const getConsultationStatus = async () => {
  try {
    const res = await instance.get("/pb/management/recent");
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};

export const getConsultationList = async ({ type, page }: ConsultationListProps) => {
  try {
    const res = await instance.get("/pb/management/reservations", {
      params: {
        page,
        type,
      },
    });
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};

export const getConsultTime = async () => {
  try {
    const res = await instance.get("/pb/consultTime");
    return res.data.data;
  } catch (error: any) {
    new AxiosError(error.response.data);
  }
};

export interface ConsultTimeProps {
  consultStart: string;
  consultEnd: string;
  consultNotice: string;
}

export const updateConsultTime = async ({ consultStart, consultEnd, consultNotice }: ConsultationTimeCardProps) => {
  try {
    const res = await instance.post("/pb/consultTime", {
      consultStart,
      consultEnd,
      consultNotice,
    });
    return res;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};

export const getReservationInfo = async ({ id }: { id: number }) => {
  try {
    const res = await instance.get(`/pb/reservation/${id}`);
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};

export const changeReservation = async ({ id, category, time, type }: ChangeReservationProps) => {
  console.log(id, category, time, type);
  try {
    const res = await instance.patch(`/pb/reservation/${id}`, {
      category,
      time,
      type,
    });
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};

export const confirmedReservation = async ({ id, time }: { id: number; time: string }) => {
  try {
    const res = await instance.patch(`/pb/reservation/${id}/confirmed`, {
      time: String(time),
    });

    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};

export const completedReservation = async (id: number) => {
  try {
    const res = await instance.patch(`/auth/reservation/${id}/completed`);
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};

export const deleteReservation = async (id: number) => {
  try {
    const res = await instance.delete(`/auth/reservation/${id}`);
    return res.data.data;
  } catch (error: any) {
    throw new AxiosError(error.response.data);
  }
};
