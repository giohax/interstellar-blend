export default function Search(){
    return (
        <form className="relative m-0 flex w-full items-center border border-gray-200 bg-transparent p-0 dark:border-gray-500">
            <input
                type="text"
                name="search"
                placeholder="Search for blends..."
                autoComplete="off"
                className="w-full px-4 py-2 text-black dark:bg-black dark:text-gray-100"
            />
        </form>
    )
}