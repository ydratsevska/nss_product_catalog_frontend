'use client';

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

import style from './BannerCarousel.module.scss';
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

  const CustomDot = ({ onClick, active }:any) => {
    return (
      <li
        className={active ? style['dot-active'] : style['dot']}
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
      <div className={style['banner-buttons']}>
        <button
          className={
            currentSlide === 0
              ? style['banner-buttons__left--disable']
              : style['banner-buttons__left']
          }
          onClick={() => previous()}
        />
        <button className={style['banner-buttons__right']} onClick={() => next()} />
      </div>
    );
  };

  return (
    <div className={style['banner__container']}>
      <Carousel
        itemClass={style['carousel_item']}
        containerClass={style['banner__carousel-container']}
        sliderClass={style['banner__carousel-trak']}
        dotListClass={style['custom-dot-list-style']}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
        showDots
        renderDotsOutside={true}
        autoPlaySpeed={5000}
        transitionDuration={500}
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<BannerButtonGroup />}
        customDot={<CustomDot />}

      >
        <div className={`${style['banner_content']} ${style['banner_content--phone']}`}>
          <Link href={'/phones'} className={style['banner__link']}>Order now</Link>
          <div className={style['text']}>
            <h2 className={style['item__title']}>Now avaliable in our store!</h2>
            <p className={style['item__text']}>be first!</p>
          </div>
        </div>

        <div className={`${style['banner_content']} ${style['banner_content--tablet']}`}>
          <Link href={'/tablets'} className={style['banner__link']}>Order now</Link>
          <div className={style['text']}>
            <h2 className={style['item__title']}>Now avaliable in our store!</h2>
            <p className={style['item__text']}>be first!</p>
          </div>
        </div>

        <div className={`${style['banner_content']} ${style['banner_content--watch']}`}>
          <Link href={'/accessories'} className={style['banner__link']}>Order now</Link>
          <div className={style['text']}>
            <h2 className={style['item__title']}>Now avaliable in our store!</h2>
            <p className={style['item__text']}>be first!</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
