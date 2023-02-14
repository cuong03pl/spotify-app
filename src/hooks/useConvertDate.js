export const useConvertDate = (DateArr) => {
  if (DateArr) {
    var year = DateArr[0];
    var month = DateArr[1];
    var day = DateArr[2];
  }
  return [year, month, day];
};
