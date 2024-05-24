export const formatDate = (date: string) => {
  const dateArr = date.split("-");

  return `${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일 까지`;
};
