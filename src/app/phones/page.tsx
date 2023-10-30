import grid from 'src/styles/modules/grid.module.scss';
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import phones from '../../styles/modules/page.module.scss';
import ProductList from '@/components/ProductList/ProductList';
import getData from '@/utils/getData';

export default async function Phones() {
  const data = await getData('phones');

  return (
    <div className={grid.template}>
      <BreadCrumbs category={'phones'} />
      <h1 className={titles.main}>Mobile phones</h1>
      <p className={phones.title_sub}>{data.count} Models</p>

      <div className={phones.sort}>
        <p className={paragraphs.parameter}>Sort by</p>

        <select>
          <option>newest</option>
        </select>
      </div>

      <div className={phones.pagination}>
        <p className={paragraphs.parameter}>Items on page</p>

        <select>
          <option>16</option>
        </select>
      </div>

      <ProductList products={data.products} />
    </div>
  );
}
