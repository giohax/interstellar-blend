'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import Caret from 'components/icons/caret-right';
import type { ListItem } from '.';
import PathFilterItem from './item';
import { Category } from 'lib/types';


export default function FilterItemDropdown({ list }: { list: Category[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach((listItem: Category) => {
      if (
        ('path' in listItem && pathname === listItem.path) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        setActive(listItem.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-start px-4 py-2 text-sm space-x-2 "
      >
        <Caret className="h-5 rotate-90" />
        <div>{active}</div>
        
      </div>
      {openSelect && (
        <div
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
        >
          {list.map((item: Category, i) => (
            <PathFilterItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
