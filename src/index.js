const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let result = "";
  const arrayExprs = [];

  for(let i = 0; i < expr.length; i = i + 10){
    const exprItem = expr.slice(i, i + 10);
    arrayExprs.push(exprItem)
  }

  for(let j = 0; j < arrayExprs.length; j++){
    let currentLetter = arrayExprs[j];

    currentLetter = currentLetter.replace(/00/g, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-');

    result += MORSE_TABLE[currentLetter] || " "
  }

  return result;
}

module.exports = {
  decode
};
