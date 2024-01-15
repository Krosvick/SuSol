

export default function Aboutid({params}: {params: {id: string}}){
    return (
        <div>
            <h1>about {params.id}</h1>
        </div>
    )
}