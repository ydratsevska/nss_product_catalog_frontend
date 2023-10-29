import Link from 'next/link';

import grid from '@/styles/modules/grid.module.scss';
import styles from './page.module.scss'

import ProductsCarousel from '@/components/ProdactsCarouselHome/ProdactCarouselHome';
import BannerCarousel from '@/components/BannerCarousel/BannerCarousel';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.home_page_wraper}>
      <div className={grid.template}>
        <h1 className={styles.main_title}>
          Welcome to Nice Gadgets store!
        </h1>

        <div className={styles.banner_slider}>
          <BannerCarousel />
        </div>

        <div className={styles.new_models_slider}>
          <h2 className={styles.home_secondary_title}>Brand new models</h2>
          <div className={styles.new_models_slider_container}>
            <ProductsCarousel />
          </div>
        </div>

        <div className={styles.categories}>
          <h2 className={styles.home_secondary_title}>
            Shop by category
          </h2>

          <div className={styles.category__cards}>
            <div className={styles.category_card}>
              <div className={styles.category_img}></div>
              <Link href="/phones" className={styles.category__title}>
                Mobile phones
              </Link>
              <p className={styles.category__description}>95 models</p>
            </div>

            <div className={styles.category_card}>
              <div className={styles.category_img}></div>
              <Link href="/tablets" className={styles.category__title}>
                Tablets
              </Link>
              <p className={styles.category__description}>24 models</p>
            </div>

            <div className={styles.category_card}>
              <div className={styles.category_img}></div>
              <Link href="/accessories" className={styles.categroy__title}>
                Accessories
              </Link>
              <p className={styles.category__description}>100 models</p>
            </div>
          </div>
        </div>

          <div className={styles.hot_prices}>
            <h2 className={styles.home_secondary_title}>Hot prices</h2>
            <ProductsCarousel />
          </div>
        </div>
      </div>
    </main>
  )
}
