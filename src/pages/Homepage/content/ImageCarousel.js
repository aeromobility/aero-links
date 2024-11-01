import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container flex justify-center">
      <div className="carousel w-fit h-fit glass rounded">
        <button onClick={goToPrevious} className="carousel-button left btn btn-circle flex content-center">
        ❮
        </button>

        <div className="carousel-slide ">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="carousel-image lg:w-96 w-11/12 h-11/12 m-4"
          />
        </div>

        <button onClick={goToNext} className="carousel-button right btn btn-circle flex content-center">
        ❯
        </button>
      </div>

      <div className="carousel-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
