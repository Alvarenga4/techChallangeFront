import React, {useState} from 'react';
import { FaArrowCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import {
  Image,
  Slider
} from './styles'

function ImagesSlider({ slides, width, height }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length === 0) {
    return null
  }

  return (
    <Slider>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (<Image width={width} height={height} src={slide.img_url}/>)}
          </div>
        )
      })}
    </Slider>
  );
}

export default ImagesSlider;