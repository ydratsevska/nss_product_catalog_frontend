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
    description: 'models',
    link: '/phones',
    id: 1,
  },
  {
    image: tabletImg,
    title: 'Tablets',
    description: 'models',
    link: '/tablets',
    id: 2,
  },
  {
    image: accessoriesImg,
    title: 'Accessories',
    description: 'models',
    link: '/accessories',
    id: 3
  }
]

export const sortOptions = [
  { value: 'age', text: 'newest'},
  { value: 'price', text: 'prise'},
  { value: 'title', text: 'title'},
]

export const limitOptions = [
  { value: '8', text: '8'},
  { value: '16', text: '16'},
  { value: '32', text: '32'},
]

export const optionsType = {sort: 'sort', limit: 'limit'}
