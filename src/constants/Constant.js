export const currencyFormat = (num) => {
  let inputNum = Number(num);
  if (num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
};
