'use client';

import { useEffect, useRef, useState } from 'react';
import './Dropdown.scss';
import { Option } from '@/types/Option';
import classNames from 'classnames';

export default function Dropdown({ options }: { options: Option[] }) {
  const [open, setOpen] = useState(false);
  const [currentText, setCurrentText] = useState(options[0].text);

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

  const handleClick = (newText: string) => {
    setCurrentText(newText);
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
                onMouseDown={() => handleClick(option.text)}
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
