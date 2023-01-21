export const formatToCurrency = (num: number) => {
  if (num !== undefined) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
};
