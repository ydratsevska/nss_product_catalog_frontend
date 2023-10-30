'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



import { ProductCard } from '../ProductCard';
import './ProdactCarouselHome.scss';

export default function ProductsCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,

    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      partialVisibilityGutter: 100,
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="buttons">
        <button className={currentSlide === 0
          ? 'buttons__left--disable'
          : 'buttons__left'
        } onClick={() => previous()} />
        <button className='buttons__right' onClick={() => next()} />
      </div>

    );
  };


  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        partialVisible={true}
        containerClass="carousel-container"
        renderArrowsWhenDisabled={true}
        arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
      >
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
        <div className="temporary-card"></div>
      </Carousel>
    </div>

  );
}
