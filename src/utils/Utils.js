
export const formatMinutes = (minutes) => {
  return addZero(Math.floor(minutes / 60)) + ":" + addZero(minutes % 60)
}

export const addZero = (num) => num < 10 ? "0" + num : num;

export const currentMinutes = () => {
  const date = new Date();
  return date.getHours() * 60 + date.getMinutes();
};