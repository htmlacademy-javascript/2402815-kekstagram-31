const COUNT_OBJECTS = 25;

const DESCRIPTIONS = [
  'Гуляем',
  'Пейзаж',
  'Рассвет',
  'Релакс'
];

const AvatarCount = {
  MIN: 1,
  MAX: 6
};
const LikesCount = {
  MIN: 15,
  MAX: 200
};

const CommentsCount = {
  MIN: 0,
  MAX: 30
};

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

const getRandomElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getMessage = () =>
  Array.from({length: getRandomInteger(1,2)}, () => getRandomElement(MESSAGES));


const getComments = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(AvatarCount.MIN, AvatarCount.MAX)}.svg`,
  message: getMessage(),
  name: getRandomElement(NAMES),
});

const createComments = (number) => {
  const comments = [];
  for(let i = 0; i < number; i++){
    comments.push(getComments(i));
  }
  return comments;
};

const createElement = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(LikesCount.MIN, LikesCount.MAX),
  comments: createComments(getRandomInteger(CommentsCount.MIN, CommentsCount.MAX)),
});


const createPhotoArray = () => {
  const photoArray = [];
  for (let i = 1; i <= COUNT_OBJECTS; i++) {
    photoArray.push(createElement(i));
  }
  return photoArray;
};

createPhotoArray();
