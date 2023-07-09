import Link from "next/link";
import Image from 'next/image';
import Search from "./search";
import CartIcon from "./icons/cart";

export default function Navbar() {
    return (
        <nav className="relative flex items-center justify-between bg-white p-4 dark:bg-black lg:px-6 fixed z-10"> 
            <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
                <div className="md:mr-4 flex-shrink-0 cursor-pointer transition-all ease-in-out hover:scale-110">
                    <Link href="/" aria-label="Go back home">
                        <Image src="/interstellar-logo.jpg" alt="Logo" width={30} height={30} layout='fixed' />
                    </Link>
                </div>
                <ul className="hidden md:flex md:items-center">
                    <li>
                        <Link href={""} className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-red-500 font-vandiana text-lg">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href={""} className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-red-500 font-vandiana text-lg">
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link href={""} className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-red-500 font-vandiana text-lg">
                            Telegram
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