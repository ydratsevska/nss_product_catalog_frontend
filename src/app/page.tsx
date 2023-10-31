import Link from 'next/link';
import Image from 'next/image';

import grid from '@/styles/modules/grid.module.scss';
import styles from './page.module.scss';

import ProductsCarousel from '@/components/ProdactsCarouselHome/ProdactCarouselHome';
import BannerCarousel from '@/components/BannerCarousel/BannerCarousel';
import getData from '@/utils/getData';
import { categories } from '@/utils/constants';


export default async function Home() {
  const data = await getData('phones');

  const dataToRender = data.products;
  const dataSortedByYear = [...dataToRender].sort((a, b) => b.year - a.year).slice(0, 10);
  const dataSortedByPrice = [...dataToRender].sort((a, b) => a.price - b.price).slice(0, 10);

  return (
    <main className={styles.main}>

      <div className={grid.template}>
        <h1 className={styles.main_title}>
          Welcome to Nice Gadgets store!
        </h1>

          <div className={styles.banner_slider}>
            <BannerCarousel />
          </div>

        <div className={styles.new_models_slider}>
          <h2 className={styles.home_secondary_title}>
            Brand new models
          </h2>

          <div className={styles.products_slider_container}>
            <ProductsCarousel products={dataSortedByYear} />
          </div>
        </div>

        <div className={styles.categories}>
          <h2 className={styles.home_secondary_title}>
            Shop by category
          </h2>

          <div className={styles.category__cards}>
            {categories.map(({ image, title, description, id, link }) => (
              <div key={id} className={styles.category_card}>
                <Link href={link}>
                  <div className={styles.category_img_box}>
                    <Image
                      src={image}
                      alt={'category image'}
                      fill
                      className={styles.category_img}
                    />
                  </div>
                </Link>

                <Link href={link} className={styles.category__title}>
                  {title}
                </Link>

                <p className={styles.category__description}>
                  95 {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.hot_prices}>
          <h2 className={styles.home_secondary_title}>Hot prices</h2>
          <div className={styles.products_slider_container}>
            <ProductsCarousel products={dataSortedByPrice} />
          </div>
        </div>
      </div>
    </main>
  );
}
