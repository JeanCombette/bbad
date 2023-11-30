import useFetch from "../utils/useFetch"
import { useState } from "react"
import MyComponent from "./Season"
import SelectorSeason from "./SelectS";

export default function Card({ data }) {
  let resume = data.resume.replace(/(<([^>]+)>)/gi, "");

  return (
    <>
      <div>
        <h2 className="font-bold">{data.serie}</h2>
        <h2 className="font-bold">{data.genres}</h2>
        <h2 className="font-bold">{resume}</h2>
      </div>
    </>
  );
}