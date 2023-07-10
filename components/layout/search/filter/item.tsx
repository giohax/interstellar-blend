'use client'
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export default function PathFilterItem({item} : {item: string}) {
    const [active, setActive] = useState(false);
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

