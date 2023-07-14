'use client'
import Link from "next/link";
import Image from 'next/image';
import Search from "./search";
import CartIcon from "components/icons/cart";
import MobileMenu from "./mobile-menu";
import { usePathname } from "next/navigation";



export default function Navbar() {


    const pathname = usePathname()
    
    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6 fixed z-10 max-w-8xl mx-auto lg:h-28"> 
            <div className="">
                <MobileMenu />
            </div>
            <div className="">
            </div>
            <div className="">
                <CartIcon/>
            </div>
        </nav>
    )
}