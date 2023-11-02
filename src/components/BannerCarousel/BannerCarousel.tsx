'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './BannerCarousel.scss';
import Link from 'next/link';

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
    },
  };

  const CustomDot = ({ onClick, active }:{ onClick: any, active: any }) => {
    return (
      <li
        className={active ? "dot-active" : "dot"}
        onClick={() => onClick()}
      >
      </li>
    );
  };

  const BannerButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className='banner-buttons'>
        <button
          className={
            currentSlide === 0
              ? 'banner-buttons__left--disable'
              : 'banner-buttons__left'
          }
          onClick={() => previous()}
        />
        <button className='banner-buttons__right' onClick={() => next()} />
      </div>
    );
  };

  return (
    <div className='banner__container'>
      <Link href={'/phones'} className='banner__link'>Order now</Link>

      <Carousel
        responsive={responsive}
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
        dotListClass="custom-dot-list-style"
        showDots
        customDot={<CustomDot />}
        renderDotsOutside={true}

      >
        <div className='banner_content banner_content--phone'>
          <div className='text'>
            <h2 className='item__title'>Now avaliable in our store!</h2>
            <p className='item__text'>be first!</p>
          </div>

        </div>

        <div className='banner_content banner_content--tablet'>
          <div className='text'>
            <h2 className='item__title'>Now avaliable in our store!</h2>
            <p className='item__text'>be first!</p>
          </div>
        </div>

        <div className='banner_content banner_content--watch'>
          <div className='text'>
            <h2 className='item__title'>Now avaliable in our store!</h2>
            <p className='item__text'>be first!</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
