'use client'

import Link from "next/link";
import Image from "next/image";
import homeIcon from "../../../public/icons/Home.svg";
import arrowRight from "../../../public/icons/Arrow-right.svg";
import style from './backLink.module.scss'
import { usePathname } from "next/navigation";

export default function BackLink () {
  const params = usePathname() || null;

  if (typeof params !== "string") {
    throw new Error('Params is not a string')
  }

  return (
    <div className={style.wrapper}>
      <Link href={'/'} className={style.homeLink}>
        <Image src={homeIcon} alt={'home link'} />
      </Link>
      <Image src={arrowRight} alt={'home link'} />
      <Link href={params}>{params?.slice(1)}</Link>
    </div>
  )
}
