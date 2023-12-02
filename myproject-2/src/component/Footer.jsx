import { useState } from "react"

export default function Footer ({data}){
    const [bg] = useState(25)
    return(
        <>
        <div className="w-screen h-screen">
            <img className="" width={data[bg].resolutions.original.width} height={data[bg].resolutions.original.height} src={data[bg].resolutions.original.url} alt={data.id} />
        </div>
        </>
    )
}