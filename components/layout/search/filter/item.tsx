'use client'
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

export default function PathFilterItem({item} : {item: string}) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [active, setActive] = useState(false);
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete('q');



    return (
        <li className="mt-2 flex text-sm text-gray-400" key={item}>
            <Link
            href={""}
            className={clsx('w-full hover:text-gray-100', {
                'text-gray-400': !active,
                'font-semibold text-white': active
            })}
            >
            {item}
            </Link>
      </li>
    )
}

