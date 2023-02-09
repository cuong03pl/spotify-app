export const useConvertTime = (time) => {
  const second = Math.floor((time / 1000) % 60);
  const minute = Math.floor(time / 1000 / 60);
  return [minute, second];
};
