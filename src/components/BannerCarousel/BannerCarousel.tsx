'use client'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './BannerCarousel.scss';

export default function BannerCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 1,

    },
    tablet: {
      breakpoint: { max: 1199, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    }
  };

  const BannerButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="banner-buttons">
        <button className={currentSlide === 0
          ? 'banner-buttons__left--disable'
          : 'banner-buttons__left'
        } onClick={() => previous()} />
        <button className='banner-buttons__right' onClick={() => next()} />
      </div>

    );
  };

  return (
    <div className="banner__container">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        transitionDuration={500}
        renderArrowsWhenDisabled={true}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<BannerButtonGroup />}
        itemClass="carousel_item"
        containerClass="banner__carousel-container"
        sliderClass="banner__carousel-trak"
      >
        <div className="banner_content"></div>
        <div className="banner_content"></div>
        <div className="banner_content"></div>

      </Carousel>
    </div>
  );
}
