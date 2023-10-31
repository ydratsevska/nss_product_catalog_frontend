'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.scss';
import { navigation } from '@/utils/constants';

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className='nav'>
      {navigation.map(({ id, title, path }) => (
        <Link
          key={id}
          href={path}
          prefetch={true}
          className={
            `/${pathName.split('/')[1]}` === path
              ? 'nav__link--active'
              : 'nav__link'
          }
        >
          {title}
        </Link>
      ))}
    </nav>
  );
};
