export function getLettersAtTheEnds(word, endCharsNo, noOfDots) {
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

export function getLettersAtTheBeginning(word, noOfChars, noOfDots) {
  if (!word) {
    return "";
  }
  const starting = word.split("").slice(0, noOfChars).join("");
  return starting + dots(noOfDots);
}

export const getTimeElapsed = (timeStamp) => {
  const secondsElapsed = Date.now() / 1000 - timeStamp;
  const minutesElapsed = secondsElapsed / 60;
  const hoursElapsed = minutesElapsed / 60;
  const remainingMinutes = minutesElapsed % 60;
  const daysElapsed = hoursElapsed / 24;
  const remainingHours = hoursElapsed % 24;

  if (hoursElapsed > 24) {
    return `${Math.floor(daysElapsed)} day ${Math.round(
      remainingHours
    )} hour ago`;
  }
  if (minutesElapsed > 60) {
    return `${Math.floor(hoursElapsed)} hour ${Math.round(
      remainingMinutes
    )} min ago`;
  }
  if (secondsElapsed > 60) {
    return Math.round(minutesElapsed) + " min ago";
  }
  if (secondsElapsed <= 60) {
    return Math.round(secondsElapsed) + " second ago";
  }
};

const dots = (n) => {
  let str = "";
  for (let i = 0; i <= n; i++) {
    str += ".";
  }
  return str;
};
