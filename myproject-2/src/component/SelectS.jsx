export default function SelectorSeason ({data, setSeason}){
    const handlerChange = (e) => {
        e.preventDefault();
        setSeason(e.target.value)
    }
    return (
        
        <>
        <select name="Saison" id="" onChange={handlerChange} className="p-5 w-44 bg-bg2  font-txt mt-5">

        {data && data.map((season, i)=> <option value={i} key={season.id}>Season {season.number}</option>)}
        </select>
        
        </>
    )
}