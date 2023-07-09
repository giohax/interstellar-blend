import Link from "next/link";
import Image from 'next/image';
import Search from "./search";
import CartIcon from "./icons/cart";

export default function Navbar() {
    return (
        <nav className="relative flex items-center justify-between p-4 lg:px-6 fixed z-10 bg-gradient-to-r-[15%] from-transparent to-gray-600"> 
            <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
                <div className="md:mr-4 flex-shrink-0 cursor-pointer transition-all ease-in-out hover:scale-110">
                    <Link href="/" aria-label="Go back home">
                        <Image src="/interstellar-logo.jpg" alt="Logo" width={30} height={30} layout='fixed' />
                    </Link>
                </div>
                <ul className="hidden lg:flex lg:items-center">
                    <li>
                        <Link href={""} className="px-2 py-1 text-gray-200 hover:bg-black hover:bg-opacity-50 font-vandiana font-bold">
                            SHOP
                        </Link>
                    </li>
                    <li>
                        <Link href={""} className="px-2 py-1 text-gray-200 hover:bg-black hover:bg-opacity-50 font-vandiana font-bold">
                            RESOURCES
                        </Link>
                    </li>
                    <li>
                        <Link href={""} className="px-2 py-1 text-gray-200 hover:bg-black hover:bg-opacity-50 font-vandiana font-bold">
                            TELEGRAM
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="hidden w-1/3 md:block">
                <Search />
            </div>
            <div className="flex w-1/3 justify-end cursor-pointer">
                <CartIcon/>
            </div>
        </nav>
    )
}