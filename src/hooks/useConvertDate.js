export const useConvertDate = (DateArr) => {
  const year = DateArr[0];
  const month = DateArr[1];
  const day = DateArr[2];
  return [year, month, day];
};
