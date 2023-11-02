import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import accessories from '../../styles/modules/page.module.scss';
import ProductList from '@/components/ProductList/ProductList';
import Dropdown from '@/components/Dropdown/Dropdown';
import { sortOptions, limitOptions, optionsType } from '@/utils/constants';
import getSortedData from '@/api/products'
import CustomPagination from '@/components/CastomPagination/CastomPagination';
import {redirect} from "next/navigation";
import classNames from "classnames";

interface Props {
  params: {
    category: string;
  },
  searchParams: {
    sort: string;
    limit: string;
    offset: string;
  }
}

export default async function Page({params, searchParams}: Props) {
  if (
    params.category !== 'phones'
    && params.category !== 'accessories'
    && params.category !== 'tablets'
  ) {
    redirect('unknown')
  }

  const sort = searchParams.sort || 'age';
  const limit = searchParams.limit || '8';
  const offset = searchParams.offset || '1';

  let data = await getSortedData(params.category, sort, limit, offset);

  return (
    <div className={classNames(grid.template, 'animate__animated', 'animate__fadeInLeftBig')}>
      <BreadCrumbs category={params.category} />
      <h1 className={titles.main}>{params.category}</h1>
      <p className={accessories.title_sub}>{data.count} Models</p>

      <div className={accessories.sort}>
        <p className={paragraphs.parameter}>Sort by</p>

        <Dropdown
          options={sortOptions}
          optionsType={optionsType.sort}
          currentValue={sort}
        />
      </div>

      <div className={accessories.pagination}>
        <p className={paragraphs.parameter}>Items on page</p>

        <Dropdown
          options={limitOptions}
          optionsType={optionsType.limit}
          currentValue={limit}
        />
      </div>

      <ProductList products={data.products} />

      <div className={accessories.pagination_box}>
        <CustomPagination
          resPerPage={limit}
          productsCount={data.count}
          offset={searchParams.offset}
        />
      </div>
    </div>
  );
}
