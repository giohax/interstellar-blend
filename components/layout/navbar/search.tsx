import SearchIcon from "../../icons/search";

export default function Search(){
    return (
        <form className="relative m-0 flex lg:w-full items-center border bg-transparent p-0 border-gray-500 rounded-full">
            <input
                type="text"
                name="search"
                placeholder="Search for blends..."
                autoComplete="off"
                className="w-full px-4 py-2 text-black bg-black bg-opacity-50 text-gray-100 rounded-full"
                style={{ backdropFilter: 'blur(10px)' }}
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                <SearchIcon className="h-5" />
            </div>
        </form>
    )
}