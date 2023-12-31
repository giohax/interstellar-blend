'use client'
import CloseIcon from "@/components/icons/close";
import MenuIcon from "@/components/icons/menu";
import Search from './search';
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const openMobileMenu = () => setIsOpen(true);
    const closeMobileMenu = () => setIsOpen(false);
    return (
        <>
            <button
                onClick={openMobileMenu}
                aria-label="Open mobile menu"
                className=""
                data-testid="open-mobile-menu"
            >
                <MenuIcon className="h-6" />
            </button>
            <Transition show={isOpen}>
                <Dialog onClose={closeMobileMenu} className="relative z-50">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 backdrop-blur-none"
                        enterTo="opacity-100 backdrop-blur-[.5px]"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="opacity-100 backdrop-blur-[.5px]"
                        leaveTo="opacity-0 backdrop-blur-none"
                    >
                        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="translate-x-[-100%]"
                        enterTo="translate-x-0"
                        leave="transition-all ease-in-out duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-[-100%]"
                    >
                        <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-2/3 lg:w-2/5 flex-col pb-6 pr-10 bg-transparent backdrop-blur-sm">
                            <div className="p-4">
                                <button
                                    className="mb-4 outline-none"
                                    onClick={closeMobileMenu}
                                    aria-label="Close mobile menu"
                                    data-testid="close-mobile-menu"
                                >
                                    <CloseIcon className="h-6" />
                                </button>
                                <ul className="flex flex-col items-end space-y-8 text-right">
                                    <li>
                                        <Link onClick={closeMobileMenu} className="rounded-lg py-1 text-lg font-bold font-vandiana transition-colors hover:text-gray-500 text-white" href={"/"}>HOME</Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeMobileMenu} className="rounded-lg py-1 text-lg font-bold font-vandiana transition-colors hover:text-gray-500 text-white" href={"/search"}>SHOP</Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeMobileMenu} className="rounded-lg py-1 text-lg font-bold font-vandiana transition-colors hover:text-gray-500 text-white" href={""}>RESOURCES</Link>
                                    </li>
                                    <li>
                                        <Link onClick={closeMobileMenu} className="rounded-lg py-1 text-lg font-bold font-vandiana transition-colors hover:text-gray-500 text-white" href={""}>TELEGRAM</Link>
                                    </li>
                                </ul>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )

}