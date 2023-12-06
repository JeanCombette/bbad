export default function SelectorSeason ({data, setSeason}){
    const handlerChange = (e) => {
        e.preventDefault();
        setSeason(e.target.value)
    }
    return (
        
        <>
        <select name="Saison" id="" onChange={handlerChange} className="flex items-center justify-center px-4 py-2 w-44 bg-bg2 font-txt font-bold my-3 rounded shadow-slate-900 shadow">

        {data && data.map((season, i)=> <option className="font-txt py-1 px-3 bg-green rounded-sm border-1 border-green-dark shadow shadow-slate-900" value={i} key={season.id}>Season {season.number}</option>)}
        </select>
        
        </>
    )
}