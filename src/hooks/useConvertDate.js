export const useConvertDate = (DateArr) => {
  //   const DateArr = data.release_date.split("-");
  return `${DateArr[2]} thg ${DateArr[1]} ${DateArr[0]}`;
};
