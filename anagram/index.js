/* */

function getCharacterMap(str) {
  const pattern = /[^\w]/g;
  const cleanedString = str.replace(pattern, "").toLowerCase();

  const characterMap = {};

  for (let char of cleanedString) {
    characterMap[char] = characterMap[char] + 1 || 1;
  }

  return characterMap;
}

function anagram(str1, str2) {
  const word1 = getCharacterMap(str1);
  const word2 = getCharacterMap(str2);

  if (Object.keys(word1).length !== Object.keys(word2).length) {
    return false;
  }

  for (let key in word1) {
    if (word1[key] !== word2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagram;
