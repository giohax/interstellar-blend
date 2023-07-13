import IconPlus from "../icons/plus";


export default function GridTitle({title, amount, src}: {title:string, amount:string, src:string}){
    return (
        <div className="flex justify-between items-center mt-2 flex-grow space-x-2">
            <div className="flex flex-col truncate">
                <span className="truncate text-sm">{title}</span>
                <span className="text-lg mt-1 font-semibold">${amount}</span>
            </div>
            <div className="rounded-full bg-red-500 active:text-red-500 active:bg-white p-2 flex-shrink-0 cursor-pointer transition-transform duration-200 ease-in-out transform md:hover:scale-105">
                <IconPlus className="h-6 w-6"/>
            </div>
            
            
        </div>
    )
}