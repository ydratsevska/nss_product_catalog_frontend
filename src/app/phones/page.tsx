import grid from 'src/styles/modules/gridTemplate.module.scss'
import titles from 'src/styles/modules/titles.module.scss';
import paragraphs from 'src/styles/modules/paragraphs.module.scss';
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import phones from './page.module.scss'

export default function Home() {
  return (
    <div className={grid.gridTemplate}>
      <BreadCrumbs/>
      <h1 className={titles.main}>Mobile phones</h1>
      <p className={phones.subTitle}>95 Models</p>

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
    </div>
  )
}
