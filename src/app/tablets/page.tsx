import grid from 'src/styles/modules/grid.module.scss'
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import tablets from '../../styles/modules/page.module.scss';

export default function Tablets() {
  return (
    <div className={grid.template}>
      <BreadCrumbs category={"tablets"} />
      <h1 className={titles.main}>Tablets</h1>
      <p className={tablets.title_sub}>95 Models</p>

      <div className={tablets.sort}>
        <p className={paragraphs.parameter}>Sort by</p>

        <select>
          <option>newest</option>
        </select>
      </div>

      <div className={tablets.pagination}>
        <p className={paragraphs.parameter}>Items on page</p>

        <select>
          <option>16</option>
        </select>
      </div>
    </div>
  )
}
