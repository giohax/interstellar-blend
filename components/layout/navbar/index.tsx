'use client'
import Link from "next/link";
import Image from 'next/image';
import Search from "./search";
import CartIcon from "components/icons/cart";
import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";
import SearchIcon from "components/icons/search";




export default function Navbar() {


    const pathname = usePathname()

    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6 fixed z-10 max-w-8xl mx-auto lg:h-28">
            <div className="w-1/3">
                <MobileMenu />
            </div>
            <div className="w-1/3">
                {
                    pathname !== '/' && 
                        <Link href={"/"}>
                            <Image src="/interstellar-logo.jpg" height={25} width={25} alt="logo" className="mx-auto" />
                        </Link>
                }
            </div>
            <div className="flex space-x-6 w-1/3 justify-end">
                <SearchIcon className="h-6" />
                <CartIcon />
            </div>
        </nav>
    )
}