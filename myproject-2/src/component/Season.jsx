import { useState } from "react";
import SelectorSeason from "./SelectS";

export default function Season({ data }) {
  const [season, setSeason] = useState(0);
  let summary = data[season].summary.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <section className="overflow-hidden snap-center shrink-0 w-full h-screen bg-bg2 text-white grid grid-cols-2 grid-rows-1 relative ">


        <div className="flex justify-center items-center m-auto ">
          <video muted loop autoPlay className="absolute mix-blend-dodge">
            <source src="./src/assets/video.mp4" type="video/webm" />
          </video>
          <div className="flex flex-col gap-2 z-0 pl-28">
            <p className="font-title text-white text-6xl">Season {data[season].number}</p>
            <p className="font-txt text-lg font-light mt-2">{summary}</p>
            <p className="font-title">
              Nombre d'épisodes :{" "}
              <span className="font-bold font-txt">{data[season].episodeOrder}</span>
            </p>
            <SelectorSeason data={data} setSeason={setSeason} className=""/>
          </div>
        </div>
        <div className="clip bg-bg3 flex justify-center items-center shadow-left">
          <img className="shadow-slate-900 shadow-lg w-1/2" src={data[season].image.original} alt="" />
        </div>

      </section>
    </>
  );
}
