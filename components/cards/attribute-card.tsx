export default function AttributeCard({title, icon} : { title: string, icon: JSX.Element}) {
    return (
        <div className="flex items-center text-md justify-start bg-neutral-800 rounded-md py-4 px-4 space-x-4 hover:bg-neutral-700 transition-transform duration-200 ease-in-out transform hover:scale-105">
            <span>
                {icon}
            </span>
            <span className="text-start">{title}</span>
        </div>
    )
}