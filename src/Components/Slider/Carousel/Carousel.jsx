import React from 'react';
import collection from './collection.json';
import "./Carousel.css";
import Buy from './Buy/Buy';

const collections = collection.collections;

const Carousel = () => {
  return (
    <div className='slider__container__carousel'>
      {collections.map((item, key) => (
        <div className="slider__container__carousel__box" key={key}>
          <h3 className="slider__container__carousel__box__title">{item.name}</h3>
          <Buy />
          <span>shop now</span>
          <img className="slider__container__carousel__box__img" src={item.img} alt={"Collection Image " + key} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;