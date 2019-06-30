/*
sentenceCapitalize('hello everyone!') => 'Hello Everyone!'
sentenceCapitalize('today it will rain.') => 'Today It Will Rain.'
*/

// function sentenceCapitalize(sentence) {
//   const words = sentence.split(" ");

//   const capitalizedWords = words.map(word => {
//     let temp = [...word];
//     temp[0] = temp[0].toUpperCase();
//     return temp.join("");
//   });

//   return capitalizedWords.join(" ");
// }

function sentenceCapitalize(sentence) {
  const words = sentence.split(" ");

  const capitalizedWords = words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

module.exports = sentenceCapitalize;
