import { BlogCard } from "./BlogCard"

type MythCardProps = {
    Myth: string;
    Reality: string;
}
export function MythCard({Myth, Reality}: MythCardProps){
    return(
        <BlogCard title={Myth} text={Reality}/>
    )
}