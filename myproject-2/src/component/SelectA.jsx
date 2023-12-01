export default function SelectorCast ({data, setCast}){
    const handlerChange = (e) => {
        e.preventDefault();
        setCast(e.target.value)
    }
    return (
        
        <>
        <select name="Cast" id="" onChange={handlerChange}>
        {data && data.map((cast, i)=> <option value={i} key={cast.id}>{cast.character.name}</option>)}
        </select>
        
        </>
    )
}