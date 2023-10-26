import grid from "src/styles/modules/grid.module.scss";
import titles from "src/styles/modules/titles.module.scss";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import favourites from "../../styles/modules/page.module.scss";

export default function Favourites() {
  return (
    <div className={grid.template}>
      <BreadCrumbs category={"favourites"} />
      <h1 className={titles.main}>Favourites</h1>
      <p className={favourites.title_sub}>95 Models</p>
    </div>
  );
}
