import Categories from "components/layout/search/categories"


export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex max-w-8xl flex-col bg-white py-6 text-black dark:bg-black dark:text-white md:flex-row">
            <div className="order-first flex-none md:w-1/5">
                <Categories/>
            </div>
            <div className="order-last min-h-screen w-full md:order-none">{children}</div>
            <div className="order-none md:order-last md:w-1/5 md:flex-none">
                
            </div>
        </div>
    )
}