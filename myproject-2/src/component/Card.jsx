import useFetch from "../utils/useFetch"
import { useState } from "react"
import MyComponent from "./Season"
import SelectorSeason from "./SelectS";

export default function Card({ data }) {
  let resume = data.resume.replace(/(<([^>]+)>)/gi, "");

  return (
    <>

<div className="w-full h-screen bg-bgw bg-cover bg-no-repeat  relative grid grid-cols-2 overflow-hidden px-28">
  <div className="w-full">
    {/* <img src="./src/assets/wwhite.png" alt="" className="h-screen w-full saturate-0 z-0"/> */}
  </div>

  <div className="flex flex-col w-full justify-center gap-4 ">
    <h1 className="font-title text-7xl ">{data.serie}</h1>
    <h2 className="font-txt text-3xl font-semibold">
      2008 | Catégorie d'âge : 16+ | 5 saisons | {data.genres}
    </h2>
    <p className="font-txt text-xl mt-6">
      {resume}
    </p>
  </div>

  <div className="mix-blend-overlay bg-overlay absolute h-screen w-full"></div>
</div>
    </>
  );
}