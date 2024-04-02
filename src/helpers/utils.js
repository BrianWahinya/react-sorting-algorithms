const genRandomStr = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomStr += characters.charAt(randomIndex);
  }
  return randomStr;
};

const genRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const genRandomNumbers = (start, stop, amount) => {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push(genRandomInt(start, stop));
  }
  return arr;
};

export const genRandomId = () => {
  const timestamp = new Date().getTime();
  const randomInt = genRandomInt(1000, 9999);
  const randomStr = genRandomStr(3);
  return `${timestamp}_${randomStr}_${randomInt}`;
};
