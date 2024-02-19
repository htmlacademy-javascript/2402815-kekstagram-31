const isLengthLessMax = function (string, length) {
  const num = string.length <= Number(length) ? 'true' : 'false';
  return num;
};

console.log(isLengthLessMax('fgdddd', 15));

const isPalindrom = (string) => {

  const word = string.toLowerCase().replaceAll(' ');

  let reversedWord = '';
  for (let i = 1; i <= word.length; i++) {
    reversedWord += word[word.length - i];
  }
  const text = reversedWord === word ? 'Palindrom' : 'Not palindrom';

  return text;
};

console.log(isPalindrom('Ala'));
