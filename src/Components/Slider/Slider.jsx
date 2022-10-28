import React from 'react';
import Carousel from './Carousel/Carousel';
import "./Slider.css";

const Slider = () => {
  return (
    <div className='slider'>
      <div className="slider__container container">
        <div className="slider__container__arrow left">
          <svg width="17" height="33" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.07229e-05 16.4999C-0.00102496 16.2912 0.0793374 16.0903 0.224199 15.9423L15.6758 0.231196C15.9786 -0.0770653 16.4698 -0.0770652 16.7726 0.231196C17.0758 0.539106 17.0758 1.0385 16.7726 1.34642L1.86136 16.5L16.7726 31.6536C17.0758 31.9615 17.0758 32.4609 16.7726 32.7688C16.4698 33.0771 15.9787 33.0771 15.6758 32.7688L0.224199 17.0577C0.0793431 16.9097 -0.00102307 16.7088 1.07228e-05 16.5001L1.07229e-05 16.4999Z" fill="#1B1A1A"/>
          </svg>
        </div>
        <Carousel />
        <div className="slider__container__arrow right">
          <svg width="17" height="33" viewBox="0 0 17 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 16.5001C17.001 16.7088 16.9207 16.9097 16.7758 17.0577L1.32418 32.7688C1.02135 33.0771 0.530211 33.0771 0.227377 32.7688C-0.0757924 32.4609 -0.0757924 31.9615 0.227377 31.6536L15.1386 16.5L0.227378 1.34641C-0.075792 1.0385 -0.075792 0.539112 0.227378 0.231194C0.530203 -0.0770683 1.02134 -0.0770683 1.32418 0.231194L16.7758 15.9423C16.9207 16.0903 17.001 16.2912 17 16.4999L17 16.5001Z" fill="#1B1A1A"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Slider;