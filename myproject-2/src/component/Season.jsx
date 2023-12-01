import { useState } from "react";
import SelectorSeason from "./SelectS";

export default function Season({ data }) {
  const [season, setSeason] = useState(0);
  let summary = data[season].summary.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <section className="overflow-hidden snap-center shrink-0 w-full h-screen bg-bg2 text-white grid grid-cols-2 grid-rows-1 relative">
        

        <div className="flex justify-center items-center m-auto ">

        <video muted loop autoPlay  className="absolute mix-blend-dodge">
          <source src="./src/assets/video.mp4" type="video/webm" />      
        </video>

          <div className="w-1/2 z-0">
            <p className="font-txt text-xl font-light mt-2">{summary}</p>
            <p>
              Nombre d'épisodes :{" "}
              <span className="font-bold">{data[season].episodeOrder}</span>
            </p>
            <SelectorSeason data={data} setSeason={setSeason} />

          </div>
        </div>
        <div className="clip bg-bg3 flex justify-center items-center">
          <img className="w-1/2" src={data[season].image.original} alt="" />
        </div>

      </section>
    </>
  );
}
