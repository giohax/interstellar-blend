import { useState } from "react";
import SearchIcon from "../icons/search"

export default function SearchEngine({ className }: { className?: string }) {

    return (
        <>
            <form className="relative max-w-lg m-0 flex w-full items-center bg-transparent p-0 border-gray-500 border rounded-lg">
                <input
                    type="text"
                    name="search"
                    placeholder="Type in your symptoms..."
                    autoComplete="off"
                    className="w-full pl-10 pr-4 py-3 text-black bg-black bg-opacity-50 text-gray-100 rounded-lg"
                    style={{ backdropFilter: 'blur(10px)' }}
                    onFocus={(event) => event.preventDefault()}
                />
                <div className="absolute left-0 top-0 ml-3 flex h-full items-center">
                    <SearchIcon className="h-5" />
                </div>
            </form>
        </>

    )
}