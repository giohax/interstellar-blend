'use client'
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation';
import { Category } from "lib/types";

export default function PathFilterItem({item}:{item: Category}) {
    const pathname = usePathname();
    const [active, setActive] = useState(false);

    console.log(pathname);
  


    return (
        <li className="mt-2 flex text-sm text-gray-400" key={item.title}>
            <Link
            href={""}
            className={clsx('w-full hover:text-gray-100', {
                'text-gray-400': !active,
                'font-semibold text-white': active
            })}
            >
            {item.title}
            </Link>
      </li>
    )
}

