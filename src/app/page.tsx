import Link from 'next/link';
import Image from 'next/image';

import grid from '@/styles/modules/grid.module.scss';
import styles from './page.module.scss';

import ProductsCarousel from '@/components/ProdactsCarouselHome/ProdactCarouselHome';
import BannerCarousel from '@/components/BannerCarousel/BannerCarousel';

import getNewData from '@/utils/getNewData';
import getDiscountData from '@/utils/getDiscountData';

import { categories } from '@/utils/constants';
import classNames from "classnames";


export default async function Home() {
  const newData = await getNewData();
  const discountData = await getDiscountData();


  return (

    <div className={classNames(grid.template, 'animate__animated', 'animate__fadeInDownBig')}>
      <h1 className={styles.main_title}>
        Welcome to Nice Gadgets store!
      </h1>

      <section className={styles.banner_slider}>
        <BannerCarousel />
      </section>

      <section className={styles.new_models_slider}>
        <h2 className={styles.home_secondary_title}>
          Brand new models
        </h2>

        <div className={styles.products_slider_container}>
          <ProductsCarousel products={newData} />
        </div>
      </section>

      <section className={styles.categories}>
        <h2 className={styles.home_secondary_title}>
          Shop by category
        </h2>

        <div className={styles.category__cards}>
          {categories.map(({ image, title, description, id, link }) => (
            <div key={id} className={styles.category_card}>
              <Link href={link} >
                <div className={styles.category_img_box}>
                  <Image
                    src={image}
                    alt={'category image'}
                    className={styles.category_img}
                  />
                </div>
                <h3 className={styles.category__title}>
                  {title}
                </h3>
                <p className={styles.category__description}>
                  {description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.hot_prices}>
        <h2 className={styles.home_secondary_title}>Hot prices</h2>
        <div className={styles.products_slider_container}>
          <ProductsCarousel products={discountData} />
        </div>
      </section>
    </div>
  );
}
