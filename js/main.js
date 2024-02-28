const COUNT_OBJECTS = 25;

const DESCRIPTIONS = [
  'Гуляем',
  'Пейзаж',
  'Рассвет',
  'Релакс'
];

const MAX_LIKES = 200;
const MIN_LIKES = 15;
const MAX_COMMENTS = 30;


const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артем', 'Соня', 'Игорь', 'Алена', 'Михаил', 'Ваня'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (elements) => {
  const elem = elements[getRandomInteger(0, elements.length-1)];
  return elem;
};

const createId = (min, max) => {
  const previousValues = [];
  return function() {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)){

      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };

};

const getMessage = () => {
  const messages = Array.from({length: getRandomInteger(1,2)}, getRandomElement(MESSAGES));
  return messages;
};

const getComments = () => ({
  id: createId(0, MAX_COMMENTS),
  avatar: 'img/avatar-`${}`.svg',
  message: getMessage(),
  name: getRandomElement(NAMES),
});


const createElement = () => ({
  id: createId(0, COUNT_OBJECTS),
  url: 'photos/`${}`.jpg',
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: getComments(),
});

createElement();
