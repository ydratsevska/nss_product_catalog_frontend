import { Blocks } from 'react-loader-spinner'
import style from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={style.wrapper}>
      <Blocks color={'yellow'} />
    </div>
  )
}
