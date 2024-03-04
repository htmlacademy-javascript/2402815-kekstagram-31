const isLengthLessMax = function (string, length) {
  const num = string.length <= Number(length) ? 'true' : 'false';
  return num;
};

isLengthLessMax('fgdddd', 15);

const isPalindrom = (string) => {

  const word = string.toLowerCase().replaceAll(' ');

  let reversedWord = '';
  for (let i = 1; i <= word.length; i++) {
    reversedWord += word[word.length - i];
  }
  const text = reversedWord === word ? 'Palindrom' : 'Not palindrom';

  return text;
};

//isPalindrom('Ala');

// const getTime = (start, finish, begin, duration) => {
//   startHours = Number(start.split(':'));

// };

// getTime();
