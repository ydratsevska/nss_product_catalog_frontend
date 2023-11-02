import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import tablets from '../../styles/modules/page.module.scss';
import ProductList from '@/components/ProductList/ProductList';
import Dropdown from '@/components/Dropdown/Dropdown';
import { sortOptions, limitOptions, optionsType } from '@/utils/constants';
import getSortedData from '@/utils/getSortedData';
import CustomPagination from '@/components/CastomPagination/CastomPagination';

export default async function Tablets({ searchParams } : { searchParams: any}) {
  const sort = searchParams.sort || 'age';
  const limit = searchParams.limit || '8';
  const offset = searchParams.offset || '1';

  const data = await getSortedData('tablets', sort, limit, offset);

  return (
    <div className={grid.template}>
      <BreadCrumbs category={'tablets'} />
      <h1 className={titles.main}>Tablets</h1>
      <p className={tablets.title_sub}>{data.count} Models</p>

      <div className={tablets.sort}>
        <p className={paragraphs.parameter}>Sort by</p>

        <Dropdown
          options={sortOptions}
          optionsType={optionsType.sort}
        />
      </div>

      <div className={tablets.pagination}>
        <p className={paragraphs.parameter}>Items on page</p>

        <Dropdown
          options={limitOptions}
          optionsType={optionsType.limit}
        />
      </div>

      <ProductList products={data.products} />

      <div className={tablets.pagination_box}>
        <CustomPagination
          resPerPage={limit}
          productsCount={data.count}
        />
      </div>
    </div>
  );
}
