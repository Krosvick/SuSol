
type BlogCardProps = {
    title?: string;
    subtitle?: string | null;
    secondaryTitle?: string;
    text?: string | null;
}

export function BlogCard({title, subtitle, secondaryTitle, text}: BlogCardProps){
    return(
        <div className="h-full dark:bg-slate-900 bg-gray-800 p-5 flex flex-col gap-5 rounded-md text-white">
            <div className="h-fit">
                <h4 className="text-2xl font-bold text-yellow-400">{title}</h4>
                <p>{subtitle}</p>
            </div>
            <div className="h-2/3">
                <p className="font-bold text-yellow-500">{secondaryTitle}</p>
                <p className="text-justify">{text}</p>
            </div>
        </div>
    )
}