'use client';

import style from './BreadCrumbs.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import homeIcon from '../../../public/icons/Home.svg';
import arrowRight from '../../../public/icons/Arrow-right.svg';
import classNames from 'classnames';

interface Props {
  category: string;
  productName?: string;
}

export default function BreadCrumbs({ category, productName }: Props) {
  return (
    <div className={style.wrapper}>
      <Link
        href={'/'}
        className={style.link_home}
      >
        <Image
          src={homeIcon}
          alt={'home link'}
        />
      </Link>
      <Image
        src={arrowRight}
        alt={'arrow right'}
      />
      <Link
        href={`/${category}`}
        className={classNames({
          [`${style.link_category}`]: category && !productName,
        })}
      >
        {category}
      </Link>
      {productName && (
        <>
          <Image
            src={arrowRight}
            alt={'arrow right'}
          />
          <Link
            href={`/${category}/${productName}`}
            className={style.link_product}
          >
            {productName}
          </Link>
        </>
      )}
    </div>
  );
}
