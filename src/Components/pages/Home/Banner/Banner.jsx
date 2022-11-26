import React from 'react';

const Banner = () => {
    return (
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://www.cadillac.com/content/dam/cadillac/na/us/english/ux/homepage-foundation/new/homepage-masthead-celestiq-reveal-l.jpg?imwidth=960/800/200"
              className="w-full h-1/2"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://www.alpenwild.com/timthumb.php?src=https://www.alpenwild.com/images/staticpage/description/11647_car.PNG&h=641&w=1306&q=100&zc=0/800/200"
              className="w-full h-1/2"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://www.whatcarshouldibuy.com/image/global/facebook/buying-a-new-vs-used-car-pros-and-cons.jpg"
              className="w-full h-1/2"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://trvprodcdn.azureedge.net/-/media/feature/truevaluehub/articleimages/from-the-auto-experts/big-auto1.jpg?modified=00010101000000"
              className="w-full h-1/2"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;