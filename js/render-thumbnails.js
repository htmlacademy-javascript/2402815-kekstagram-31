

const pictureTemplate = document.body.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const createThumbnail = (picture) => {
  const {url, description, likes, comments, id} = picture;
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.pictureId = id;
  return pictureElement;

};

const fillThumbnails = (pictureData) => {
  const fragmentOfPictures = document.createDocumentFragment();
  pictureData.forEach((element) => {
    const template = createThumbnail(element);
    fragmentOfPictures.append(template);
  });
  picturesContainer.appendChild(fragmentOfPictures);
};

export {fillThumbnails};
