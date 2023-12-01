import { useState } from "react"
import Arrow from "./Arrow"

export default function Cast({ data }) {
    const [cast, setCast] = useState(0)

        const handlerNext = () => {
            // V1
            // const nextIndex = index + 1 > data.length - 1 ? 0 : index + 1;
            // v2 avec % => modulo reste de la division
            const nextCast = (cast + 1) % data.length;
            setCast(nextCast);
        };
        const handlerPrev = () => {
            //const nextIndex = index - 1 < 0 ? data.length - 1 : index - 1;
            const nextCast = (cast - 1 + data.length) % data.length;
            setCast(nextCast);
        };

    return (
        <>
            <div className="flex relative flex-col items-center justify-center bg-green-900 py-8 gap-20">
                <p className="text-7xl font-bold font-txt text-white">Cast & Characters</p>
                <div className="flex flex-row items-center justify-center gap-4">
                <button className="" onClick={handlerPrev}>
                        <Arrow className="h-6 w-6" />
                    </button>
                <img className="rounded-lg shadow-lg shadow-black" src={data[cast].character.image.original} alt="" />
                <button className="" onClick={handlerNext}>
                        <Arrow className="h-6 w-6 rotate-180 fill-white" />
                    </button>
                </div>
                <h2 className="font-h1 text-3xl">{data[cast].character.name}<span className="block">played by <b>{data[cast].person.name}</b></span></h2>
                    
                    
            </div>
        </>
    )
}