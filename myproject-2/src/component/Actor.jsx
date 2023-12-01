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
            <section className="h-screen snap-center shrink-0 flex relative flex-col items-center justify-center text-center bg-green-900 py-8 gap-4 bg-bgt">
                <div className="flex flex-col gap-20">
                    <p className="text-7xl font-bold font-txt text-white">Cast & Characters</p>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <button className="" onClick={handlerPrev}>
                            <Arrow className="h-6 w-6 text-white" />
                        </button>
                        <img className="rounded-lg shadow-lg shadow-slate-900" src={data[cast].character.image.original} alt="" />
                        <button className="" onClick={handlerNext}>
                            <Arrow className="h-6 w-6 rotate-180 text-white" />
                        </button>
                    </div>
                </div>
                <h2 className="text-white text-5xl font-title">{data[cast].character.name}<span className="block text-3xl mt-2 font-txt">played by <b>{data[cast].person.name}</b></span></h2>
            </section>
        </>
    )
}