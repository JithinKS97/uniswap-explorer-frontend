export function getTrimmedWord(word, endCharsNo, noOfDots) {
  if (!word) {
    return "";
  }
  const starting = word.split("").slice(0, endCharsNo).join("");
  const ending = word
    .split("")
    .slice(word.length - endCharsNo, word.length)
    .join("");
  return starting + dots(noOfDots) + ending;
}

const dots = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    str += ".";
  }
  return str;
};
