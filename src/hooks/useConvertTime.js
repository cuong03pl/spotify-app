export const useConvertTime = (time) => {
  if (time) {
    var second = Math.floor((time / 1000) % 60);
    var minute = Math.floor(time / 1000 / 60);
  }
  return [minute, second];
};
