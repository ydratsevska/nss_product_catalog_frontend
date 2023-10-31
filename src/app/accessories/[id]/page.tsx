'use client';

import style from './page.module.scss';
import Image from 'next/image';
import buttons from '@/styles/modules/buttons.module.scss';
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';
import { v4 as uuidv4 } from 'uuid';
import grid from 'src/styles/modules/grid.module.scss';
import ColorButton from '@/components/ColorButton/ColorButton';
import { ProductDescriptive } from '@/types/ProductDescriptive';
import { Product } from '@/types/Product';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Loader from '@/components/Loader/Loader';
import { URL_BASE } from '@/utils/constants';
import AddToButtons from '@/components/AddToButtons/AddToButtons';

interface Props {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  const res = await fetch(`${URL_BASE}/products/${id}`);

  if (!res.ok) {
    throw new Error(`${res}`);
  }

  return res.json();
}

interface Response {
  product: Product;
  variants: ProductDescriptive[];
}

export default function Page({ params }: { params: { id: string } }) {
  const data = useRef<Response>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      data.current = await getData(params.id);

      if (!data.current) {
        throw new Error('No such product');
      }

      const descriptiveProduct = data.current.variants.find(
        (variant) => data.current?.product.name === variant.name,
      ) as ProductDescriptive;
      setSelectedProduct(descriptiveProduct);
      setSelectedImg(descriptiveProduct.images[0]);
      setIsLoading(false);
    };

    fetchData();
  }, [params.id]);

  const [selectedProduct, setSelectedProduct] = useState<ProductDescriptive>();
  const [selectedImg, setSelectedImg] = useState(selectedProduct?.images[0]);
  const [isLoading, setIsLoading] = useState(true);

  const onColorChange = (newColor: string) => {
    const product = data.current?.variants.find(
      ({ color, capacity }) =>
        color === newColor && capacity === selectedProduct?.capacity,
    );

    setSelectedProduct(product);
    setSelectedImg(product?.images[0]);
  };

  const onCapacityChange = (newCapacity: string) => {
    const product = data.current?.variants.find(
      ({ color, capacity }) =>
        color === selectedProduct?.color && capacity === newCapacity,
    );

    setSelectedProduct(product);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={`${style.page} ${grid.template}`}>
      <BreadCrumbs
        category={'Accessories'}
        productName={selectedProduct?.name}
      />

      <h1 className={`${style.page__title} ${style.title}`}>
        {selectedProduct?.name}
      </h1>

      <div className={style.page__image_selected}>
        <Image
          src={`https://nss-product-catalog-api.onrender.com/${selectedImg}`}
          alt={'product image'}
          fill={true}
          style={{ objectPosition: 'center top', objectFit: 'contain' }}
        />
      </div>

      <div className={`${style.page__images} ${style.images}`}>
        {selectedProduct?.images.map((image) => (
          <button
            className={classNames({
              [style.images__button]: true,
              [style.images__button__selected]: selectedImg === image,
            })}
            onClick={() => setSelectedImg(image)}
            key={uuidv4()}
          >
            <Image
              src={`${URL_BASE}/${image}`}
              alt={'phone image'}
              fill={true}
              style={{ objectPosition: 'center bottom', objectFit: 'contain' }}
            />
          </button>
        ))}
      </div>

      <div className={`${style.page__options} ${style.options}`}>
        <div className={`${style.options__colors} ${style.colors}`}>
          <p className={style.colors__text}>Available colors</p>

          <div className={`${style.colors__buttons} ${style.buttons}`}>
            {selectedProduct?.colorsAvailable.map((color) => {
              const selected = selectedProduct?.color === color;

              return (
                <ColorButton
                  color={color}
                  selected={selected}
                  key={color}
                  onClick={onColorChange}
                />
              );
            })}
          </div>
        </div>

        <div className={style.divider} />

        <div className={`${style.options__capacity} ${style.capacity}`}>
          <p className={style.capacity__text}>Select capacity</p>

          <div className={`${style.capacity__buttons}`}>
            {selectedProduct?.capacityAvailable.map((capacity) => (
              <button
                key={capacity}
                className={classNames({
                  [style.capacity__buttons__button]: true,
                  [style.capacity__buttons__button__selected]:
                    selectedProduct?.capacity === capacity,
                })}
                onClick={() => onCapacityChange(capacity)}
              >
                {capacity}
              </button>
            ))}
          </div>
        </div>

        <div className={style.divider} />

        <p className={`${style.options__price} ${style.price}`}>
          <span className={style.price__new}>
            ${selectedProduct?.priceDiscount}
          </span>

          <span className={style.price__old}>
            ${selectedProduct?.priceRegular}
          </span>
        </p>

        <AddToButtons product={data.current?.product as Product} />

        <div className={style.pairs}>
          <p className={style.pair}>
            <span className={style.pair__label_small}>Screen:</span>

            <span className={style.pair__value_small}>
              {selectedProduct?.screen}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label_small}>Resolution:</span>

            <span className={style.pair__value_small}>
              {selectedProduct?.resolution}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label_small}>Processor:</span>

            <span className={style.pair__value_small}>
              {selectedProduct?.processor}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label_small}>RAM:</span>

            <span className={style.pair__value_small}>
              {selectedProduct?.ram}
            </span>
          </p>
        </div>
      </div>

      <section className={`${style.page__description} ${style.section}`}>
        <h2 className={style.section__title}>About</h2>

        {selectedProduct?.description.map(({ title, text }) => (
          <article key={title} className={style.article}>
            <h3 className={style.article__title}>{title}</h3>

            <p className={style.article__text}>{text}</p>
          </article>
        ))}
      </section>

      <section className={`${style.page__specs} ${style.section}`}>
        <h2 className={style.section__title}>Tech specs</h2>

        <div className={style.pairs}>
          <p className={style.pair}>
            <span className={style.pair__label}>Screen</span>

            <span className={style.lable__value}>
              {selectedProduct?.screen}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label}>Resolution</span>

            <span className={style.lable__value}>
              {selectedProduct?.resolution}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label}>Processor</span>

            <span className={style.lable__value}>
              {selectedProduct?.processor}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label}>RAM</span>

            <span className={style.lable__value}>{selectedProduct?.ram}</span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label}>Built in memory</span>

            <span className={style.lable__value}>
              {selectedProduct?.capacity}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label}>Camera</span>

            <span className={style.lable__value}>
              {selectedProduct?.camera}
            </span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label}>Zoom</span>

            <span className={style.lable__value}>{selectedProduct?.zoom}</span>
          </p>

          <p className={style.pair}>
            <span className={style.pair__label}>Cell</span>

            <span className={style.pair__value}>
              {selectedProduct?.cell.join(', ')}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
