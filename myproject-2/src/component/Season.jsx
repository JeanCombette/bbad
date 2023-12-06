import { useState } from "react";
import SelectorSeason from "./SelectS";

export default function Season({ data }) {
  const [season, setSeason] = useState(0);
  let summary = data[season].summary.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <section className="w-full h-screen overflow-hidden bg-bg2 text-white grid grid-cols-2 grid-rows-1 relative ">


        <div className="flex justify-center items-center m-auto ">
          <video muted loop autoPlay className="absolute mix-blend-dodge teinte">
            <source src="./src/assets/video.mp4" type="video/webm" />
          </video>
          <div className="flex flex-col gap-2 z-0 pl-28">
            <p className="font-h1 first-letter:font-test first-letter:text-8xl first-letter:align-middle text-white text-6xl">4ason {data[season].number}</p>
            <p className="font-txt text-lg font-light mt-2">{summary}</p>
            
            <SelectorSeason data={data} setSeason={setSeason} className=""/>
            <p className="font-title">
              Nombre d'épisodes :{" "}
              <span className="font-bold font-txt">{data[season].episodeOrder}</span>
            </p>
          </div>
        </div>
        <div className="clip bg-bg3 flex justify-center items-center shadow-left">
          <img className="shadow-slate-900 shadow-lg w-1/2" src={data[season].image.original} alt="" />
        </div>

      </section>
    </>
  );
}
