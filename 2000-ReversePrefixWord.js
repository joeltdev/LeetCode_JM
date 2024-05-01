var reversePrefix = function (word, ch) {
  let index = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      index = i;
      break;
    }
  }

  if (index > 0) {
    let reversedSubstring = word
      .substring(0, index + 1)
      .split("")
      .reverse()
      .join("");
    return reversedSubstring + word.substring(index + 1);
  }

  return word;
};
const word = "abcdefd";
const ch = "d";
console.log(reversePrefix(word, ch)); // Output: "dcbaefd"
