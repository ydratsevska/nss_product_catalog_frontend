import Link from "next/link";
import Image from "next/image";
import leftArrow from '/public/icons/Arrow-left.svg';
import style from './BackLink.module.scss'
interface Props {
  path: string;
}

export default function BackLink({ path }: Props) {
  return (
    <div className={style.wrapper}>
      <Image src={leftArrow} alt={'arrow left'} />
      <Link href={`/${path}`} className={style.link}>Back</Link>
    </div>
  )
}
