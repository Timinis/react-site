import React, { useState } from 'react';

export const PictureSelector = () => {
  const pictureList = [
    {
      title: 'wave',
      src: `https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2019/03/20115900/04_klein_pipeline_hawaii_march2011_003799.jpg`
    },
    {
      title: 'sun',
      src: `https://www.universetoday.com/wp-content/uploads/2014/09/sun1.jpg`
    },
    {
      title: 'dog',
      src: `https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080`
    }
  ];
  const [selectedPicture, changePicture] = useState(pictureList[0].title);
  const clickButton = event => {
    changePicture(event.target.value);
  };
  const [displayedPicture] = pictureList.filter(item => {
    return item.title === selectedPicture;
  });
  return (
    <div>
      <PictureDisplay displayedPicture={displayedPicture} />
      {pictureList.map(item => {
        return (
          <button key={item.title} value={item.title} onClick={clickButton}>
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

const PictureDisplay = ({ displayedPicture }) => {
  return (
    <div>
      <img alt={displayedPicture.title} src={displayedPicture.src} />
      <h2>{displayedPicture.title}</h2>
    </div>
  );
};
