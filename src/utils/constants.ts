import phoneImg from './../../public/Phones.png';
import tabletImg from './../../public/Tablets.png';
import accessoriesImg from './../../public/Accessories.png';

export const navigation = [
  { id: 1, title: 'home', path: '/' },
  { id: 2, title: 'phones', path: '/phones' },
  { id: 3, title: 'tablets', path: '/tablets' },
  { id: 4, title: 'accessories', path: '/accessories' },
];

export const URL_BASE = 'https://nss-product-catalog-api.onrender.com';

export const categories = [
  {
    image: phoneImg,
    title: 'Mobile phones',
    description: '124 models',
    link: '/phones',
    id: 1,
  },
  {
    image: tabletImg,
    title: 'Tablets',
    description: '36 models',
    link: '/tablets',
    id: 2,
  },
  {
    image: accessoriesImg,
    title: 'Accessories',
    description: '34 models',
    link: '/accessories',
    id: 3
  }
]

export const sortOptions = [
  { value: 'title', text: 'Alphabetically '},
  { value: 'age', text: 'Newest'},
  { value: 'price', text: 'Cheapest'},
]

export const limitOptions = [
  { value: '4', text: '4'},
  { value: '8', text: '8'},
  { value: '16', text: '16'},
]

export const optionsType = {sort: 'sort', limit: 'limit'}

export const colors: {
  [key: string]: string;
} = {
  black: '#000000',
  blue: '#0000FF',
  coral: '#FF7F50',
  gold: '#FFD700',
  graphite: '#251607',
  green: '#008000',
  midnight: '#191970',
  midnightgreen: '#004953' ,
  pink: '#FFC0CB',
  purple: '#800080',
  red: '#FF0000',
  rosegold: '#b76e79',
  sierrablue: '#69abce',
  silver: '#c0c0c0',
  skyblue: '#87CEEB',
  spacegray: '#717378',
  spaceblack: '#505150',
  starlight: '#F8F9EC',
  white: '#FFFFFF',
  yellow: '#FFFF00',
}
