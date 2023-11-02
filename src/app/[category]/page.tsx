import { redirect } from "next/navigation";
import getData from "@/utils/getData";
import classNames from "classnames";
import grid from "@/styles/modules/grid.module.scss";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import titles from "@/styles/modules/titles.module.scss"
import style from "./page.module.scss"
import Dropdown from "@/components/Dropdown/Dropdown";
import ProductList from "@/components/ProductList/ProductList";

export default async function Page({params}: { params: { category: string }}) {
  if (
    params.category !== 'phones'
    && params.category !== 'accessories'
    && params.category !== 'tablets'
  ) {
    redirect('unknown')
  }
  const data = await getData(params.category);

  return (
    <div className={classNames(grid.template, 'animate__animated', 'animate__fadeInLeft')}>
      <BreadCrumbs category={params.category}/>
      <h1 className={titles.main}>{params.category}</h1>
      <p className={style.title_sub}>95 Models</p>

      <div className={style.sort}>
        <p className={style.sort__parameter}>Sort by</p>

        <Dropdown options={[{value: 'newest', text: 'Newest'}]} />
      </div>

      <div className={style.pagination}>
        <p className={style.pagination__parameter}>Items on page</p>

        <Dropdown options={[{value: 16, text: '16'}]} />
      </div>

      <ProductList products={data.products} />
    </div>
  )
}
