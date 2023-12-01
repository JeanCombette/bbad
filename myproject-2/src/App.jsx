import { useEffect, useState } from 'react'
import useFetch from './utils/useFetch';
import Season from './component/Season';
import Card from './component/Card';
import Actor from './component/Actor';

import './App.css'

const ID = "169"
let dataSerie = {}
export default function App() {

  const urlSerie = `https://api.tvmaze.com/shows/${ID}?embed[]=seasons&embed[]=cast`

  const [url, setUrl] = useState(urlSerie)
  const { isLoading, isError, data } = useFetch(url)
  if (data) {
    dataSerie = {
      serie: data.name,
      genres: data.genres,
      resume: data.summary,
      listSeason: data._embedded.seasons,
      listCast: data._embedded.cast,


    }
    console.log(dataSerie.listCast)
  }

  return (
    <>
       {isLoading && <p>Chargement...</p>}
      {isError && <p>Une erreur est survenue !</p>}
      {data &&
        <Card data={dataSerie} />
      } 
      {data &&
        <Season data={dataSerie.listSeason} />
      }
      {data &&
        <Actor data={dataSerie.listCast} />
      }
    </>
  )
}