export const formatToCurrency = (num: number): string => {
  const format = Intl.NumberFormat("en-US");
  return format.format(num);
};

export const sliceText = (number: number, text: string): string => {
  return text.slice(0, number) + (text.length > number ? "..." : "");
};

export const firstLetter = (str: string): string => {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};
