import Categories from "components/layout/search/categories"


export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto flex max-w-8xl flex-col text-black bg-black text-white md:flex-row">
            <div className="order-first flex-none md:w-1/5">
                <hr className="md:hidden mx-4 border-neutral-600"/>
                <Categories/>
            </div>
            <div className="order-last min-h-screen w-full md:order-none">{children}</div>
            <div className="order-none md:order-last md:w-1/5 md:flex-none">
                
            </div>
        </div>
    )
}