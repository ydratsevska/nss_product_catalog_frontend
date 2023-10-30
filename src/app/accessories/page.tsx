import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import accessories from '../../styles/modules/page.module.scss';
import getData from '@/utils/getData';
import ProductList from '@/components/ProductList/ProductList';

export default async function Accessories() {
  const data = await getData('accessories');

  return (
    <div className={grid.template}>
      <BreadCrumbs category={'accessories'} />
      <h1 className={titles.main}>Accessories</h1>
      <p className={accessories.title_sub}>{data.count} Models</p>

      <div className={accessories.sort}>
        <p className={paragraphs.parameter}>Sort by</p>

        <select>
          <option>newest</option>
        </select>
      </div>

      <div className={accessories.pagination}>
        <p className={paragraphs.parameter}>Items on page</p>

        <select>
          <option>16</option>
        </select>
      </div>

      <ProductList products={data.products} />
    </div>
  );
}
