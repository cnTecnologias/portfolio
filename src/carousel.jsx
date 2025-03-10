import React, { useState } from 'react';
const Carousel = ({ slides }) => {
      const [currentIndex, setCurrentIndex] = useState(0);

      const goToPreviousSlide = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      const goToNextSlide = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      return (
        <div className="relative h-screen border-t-1 border-b-2 border-gray-800">
          <div className="overflow-hidden h-full">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  {slide}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={goToPreviousSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      );
    };

 export default Carousel;