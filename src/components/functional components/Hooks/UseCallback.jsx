import { useCallback, useState,useEffect } from "react"
import ListItems from "./List"

const UseCallback = () => {
    var [num, setNum] = useState(6)
    var [dark, setDark] = useState(true)
    
    var styling = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }
    var getItems = useCallback((inc)=>{
        return[num+inc+1,num+inc+2,num+inc+3]
    },[num])
    
    return (
        <div style={styling}>
            <button onClick={() => setDark(dark => !dark)}>change the theme</button>
            <h2>Welcome to callback hook</h2>
            <input type="number" value={num} onChange={(e) => { setNum(parseInt(e.target.value)) }} />
            <button onDoubleClick={()=>setNum(num=0)}>RESET</button>

            <ListItems func={getItems} />
        </div>


    )
}
export default UseCallback