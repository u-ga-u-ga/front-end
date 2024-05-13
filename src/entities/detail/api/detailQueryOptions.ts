import { queryOptions } from "@tanstack/react-query";

const _mockData = {
  userName: "유저 닉네임",
  addr: "중랑구 면목동",
  title: "소니 Wh-1000xm5 실버 팝니다.",
  category: "디지털기기",
  date: "끌올 1일 전",
  content: "8/31일 해외 직구 한\n한달도 안된 제품 입니다.\n박풀 S급입니다.",
  price: 360_000,
  canBeDeal: false,
};
export const detailQueryOptions = () =>
  queryOptions({ queryKey: ["detail"], queryFn: () => _mockData });
