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
    return `${Math.floor(daysElapsed)} day ${Math.floor(
      remainingHours
    )} hour ago`;
  }
  if (minutesElapsed > 60) {
    return `${Math.floor(hoursElapsed)} hour ${Math.floor(
      remainingMinutes
    )} min ago`;
  }
  if (secondsElapsed > 60) {
    return Math.floor(minutesElapsed) + " min ago";
  }
  if (secondsElapsed <= 60) {
    return Math.floor(secondsElapsed) + " second ago";
  }
};

const dots = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += ".";
  }
  return str;
};

export const capitaliseFirstLetter = (word) => {
  const lowerCased = word.toLowerCase();
  const firstLetter = lowerCased[0].toUpperCase();
  const restOfTheLetters = lowerCased
    .split("")
    .slice(1, lowerCased.length)
    .join("");
  return firstLetter + restOfTheLetters;
};

export const splitCase = (s) =>
  !s || s.indexOf(" ") >= 0
    ? s
    : (s.charAt(0).toUpperCase() + s.substring(1))
        .split(/(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/g)
        .map((x) => x.replace(/([0-9]+)/g, "$1 "))
        .join(" ");
