import phoneImg from './../../public/Phones.png';
import tabletImg from './../../public/Tablets.png';
import accessoriesImg from './../../public/Accessories.png';

export const navigation = [
  { id: 1, title: 'home', path: '/' },
  { id: 2, title: 'phones', path: '/phones' },
  { id: 3, title: 'tablets', path: '/tablets' },
  { id: 4, title: 'accessories', path: '/accessories' },
];

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
