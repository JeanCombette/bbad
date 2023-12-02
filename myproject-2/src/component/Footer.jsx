import { useState } from "react"

export default function Footer ({data}){
    const [bg] = useState(25)
    return(
        <>
        <div className="w-screen h-screen">
            <img className="w-screen h-screen" src={data[bg].resolutions.original.url} alt={data.id} />
        </div>
        </>
    )
}