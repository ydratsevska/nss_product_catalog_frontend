import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import accessories from '../../styles/modules/page.module.scss';
import getData from '@/utils/getData';
import ProductList from '@/components/ProductList/ProductList';
import Dropdown from '@/components/Dropdown/Dropdown';
import { sortOptions, limitOptions, optionsType } from '@/utils/constants';
import getSortedData from '@/utils/getSortedData';
import CustomPagination from '@/components/CastomPagination/CastomPagination';

export default async function Accessories({ searchParams } : { searchParams: any}) {
  const sort = searchParams.sort || 'age';
  const limit = searchParams.limit || '8';

  const data = await getSortedData('accessories', sort, limit);


  return (
    <div className={grid.template}>
      <BreadCrumbs category={'accessories'} />
      <h1 className={titles.main}>Accessories</h1>
      <p className={accessories.title_sub}>{data.count} Models</p>

      <div className={accessories.sort}>
        <p className={paragraphs.parameter}>Sort by</p>

        <Dropdown
          options={sortOptions}
          optionsType={optionsType.sort}
        />
      </div>

      <div className={accessories.pagination}>
        <p className={paragraphs.parameter}>Items on page</p>

        <Dropdown
          options={limitOptions}
          optionsType={optionsType.limit}
        />
      </div>

      <ProductList products={data.products} />

      <div className={accessories.pagination_box}>
        <CustomPagination
          resPerPage={limit}
          productsCount={data.count}
        />
      </div>
    </div>
  );
}
