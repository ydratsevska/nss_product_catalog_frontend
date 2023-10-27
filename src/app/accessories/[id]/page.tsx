import style from './page.module.scss';
import grid from "src/styles/modules/grid.module.scss";
import Image from "next/image";
import MainImage from './phone.img.png';
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import BackLink from "@/components/BackLink/BackLink";
import imageOne from './images/image-1.png'
import imageTwo from './images/image-2.png'
import imageThree from './images/image-3.png'
import imageFour from './images/image-4.png'
import imageFive from './images/image-5.png'

export default function Page() {
  const product = {
    name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
    id: 802390,
    category: 'phones',
    image: MainImage,
    colors: ['#FCDBC1', '#5F7170', '#4C4C4C', '#F0F0F0'],
    capacity: ['64', '256', '512'],
    'price': 1199,
    'new-price': 799,
    screen: '6.5” OLED',
    resolution: '2688x1242',
    processor: 'Apple A12 Bionic',
    ram: 3,
    camera: '12 Mp + 12 Mp + 12 Mp (Triple)',
    zoom: 'Optical, 2x',
    cell: 'GSM, LTE, UMTS',
    about: {
      'And then there was Pro': 'A transformative triple‑camera system that adds tons of capability without complexity. \n' +
        '\n' +
        'An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
      'Camera': 'Meet the first triple‑camera system to combine cutting‑edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest‑quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
      'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.': 'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
    }
  }

  return (
    <div className={grid.template}>
      <BreadCrumbs category={product.category} productName={product.name}/>
      <BackLink path={product.category} />
      <h1 className={style.title}>{product.name}</h1>
      <Image src={product.image} alt={'product image'} />
      <Image src={imageOne} alt={'phone image'} />
      <Image src={imageTwo} alt={'phone image'} />
      <Image src={imageThree} alt={'phone image'} />
      <Image src={imageFour} alt={'phone image'} />
      <Image src={imageFive} alt={'phone image'} />
    </div>
  )
}
