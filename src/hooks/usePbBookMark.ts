import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookMarkPB, postBookMarkPB } from "@/app/apis/services/user";
import { AxiosError } from "axios";
import useErrorShow from "@/hooks/useErrorShow";

const usePbBookMark = (isBookmarked: boolean, link: string, id: number|undefined, queryKey?: string[] | string) => {
  const { isOpen, setIsOpen, error, errorHandler } = useErrorShow();
  const [isBookmark, setIsBookMark] = useState(isBookmarked);
  const [isBookmarkedOpen, setIsBookmarkedOpen] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: postbookMarkPB } = useMutation(postBookMarkPB, {
    onSuccess: () => {
      queryClient.refetchQueries([queryKey, id]);
    },
    onError: (err: AxiosError) => {
      errorHandler(err);
    },
  });

  const { mutate: deletebookMarkPB } = useMutation(deleteBookMarkPB, {
    onSuccess: () => {
      queryClient.refetchQueries([queryKey, id]);
    },
    onError: (err: AxiosError) => {
      errorHandler(err);
    },
  });

  const bookMarkHandler = (id: number) => {
    setIsBookmarkedOpen(true);
    if (isBookmarked) {
      setIsBookMark(false);
      deletebookMarkPB({ id: id });
    } else {
      setIsBookMark(true);
      postbookMarkPB({ id: id });
    }
  };

  const bookMarkContents = {
    content: isBookmark ? "북마크에 추가되었습니다." : "북마크가 해제되었습니다.",
    confirmText: "확인",
    cancelText: "북마크 바로가기",
    confirmFn: () => {
      setIsBookmarkedOpen(false);
    },
    cancelFn: () => {
      router.push(link);
      setIsBookmarkedOpen(false);
    },
  };

  return {
    isBookmarkedOpen,
    setIsBookmarkedOpen,
    bookMarkHandler,
    bookMarkContents,
    isOpen,
    setIsOpen,
    error,
  };
};

export default usePbBookMark;
