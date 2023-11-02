'use client';

import { useEffect, useRef, useState } from 'react';
import './Dropdown.scss';
import { Option } from '@/types/Option';
import classNames from 'classnames';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

interface Props {
  options: Option[],
  optionsType: string,
  currentValue: string,
}

export default function Dropdown({ options, optionsType, currentValue }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [open, setOpen] = useState(false);
  const [currentText, setCurrentText] = useState(options.find(option => option.value === currentValue)?.text);

  let dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mouseup', handler);
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = (newText: string, newValue: string) => {
    setCurrentText(newText);

    const newParams = new URLSearchParams(params.toString());
    newParams.set(optionsType, newValue);

    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <div className='dropdown'>
      <button
        className={classNames('dropdown__trigger', {
          dropdown__trigger_active: open,
        })}
        onClick={handleOpen}
        ref={dropdownRef}
      >
        {currentText}
        <div
          className={classNames('dropdown__trigger__arrow', {
            dropdown__trigger__arrow_active: open,
          })}
        />
      </button>
      {open && (
        <ul className='dropdown__list'>
          {options.map((option) => (
            <li className='dropdown__element' key={option.value}>
              <button
                onMouseDown={() => handleClick(option.text, option.value)}
                className='dropdown__element__button'
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
