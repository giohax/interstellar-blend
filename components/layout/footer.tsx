import Link from 'next/link';



export default async function Footer() {
    const currentYear = new Date().getFullYear();
    const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');


    return (
        <footer className="border-t border-gray-700 bg-white text-black dark:bg-black dark:text-white">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-8 border-b border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
                    <div className="col-span-1 lg:col-span-3">
                        <Link className="flex flex-initial items-center font-bold md:mr-24 font-vandiana text-2xl" href="/">
                            <span>INTERSTELLAR BLEND</span>
                        </Link>
                    </div>
                    <nav className="col-span-1 lg:col-span-7">
                        <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link
                                    href={""}
                                    className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link
                                    href={""}
                                    className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                                >
                                    Shop
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link
                                    href={""}
                                    className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link
                                    href={""}
                                    className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link
                                    href={""}
                                    className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                                >
                                    Shippinh & Return Policy
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link
                                    href={""}
                                    className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="py-3 md:py-0 md:pb-4">
                                <Link
                                    href={""}
                                    className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300 dark:text-gray-100"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-sm md:flex-row">
                    <p>
                        &copy; {copyrightDate} Interstellar Blend. All rights reserved.
                    </p>
                    <div className="flex items-center text-sm text-white dark:text-black">
                        <span className="text-black dark:text-white">Created by Giovanni</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
