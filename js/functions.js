// const isLengthLessMax = function (string, length) {
//   const num = string.length <= Number(length) ? 'true' : 'false';
//   return num;
// };

// isLengthLessMax('fgdddd', 15);

// const isPalindrom = (string) => {

//   const word = string.toLowerCase().replaceAll(' ');

//   let reversedWord = '';
//   for (let i = 1; i <= word.length; i++) {
//     reversedWord += word[word.length - i];
//   }
//   const text = reversedWord === word ? 'Palindrom' : 'Not palindrom';

//   return text;
// };

// //isPalindrom('Ala');


const toMinutes = function(time){
  const dataInMinutes = [];
  time.forEach((element) => {
    const arrayTime = element.split(':');
    const durationEachTime = arrayTime[0] * 60 + Number(arrayTime[1]);
    dataInMinutes.push(durationEachTime);

  });
  return dataInMinutes;

};


const getSchedule = function(start, finish, begin, duration){
  const arrayData = [start, finish, begin];
  const data = toMinutes(arrayData);
  const startDay = data[0];
  const finishDay = data[1];
  const beginMeeting = data[2];
  const endMeeting = Number(data[2]) + duration;

  if((startDay <= beginMeeting) && (finishDay >= endMeeting)){
    return true;

  }
  return false;

};


export{getSchedule};
