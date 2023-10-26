"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import './Header.scss';
import { navigation } from './../../utils/Constants';

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="nav">
      {navigation.map(({ id, title, path }) => (
        <Link
          key={id}
          href={path}
          className={pathName === path ? 'nav__link--active' : 'nav__link'}
        >
          {title}
        </Link>
      ))}
    </nav>)
}
