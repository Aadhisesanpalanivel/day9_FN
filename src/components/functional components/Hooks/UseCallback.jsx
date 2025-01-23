import { useState } from "react"

const UseCallback=()=>
{
    var[num,setNum]=useState(0)
    var[dark,setDark]=useState(true)
    var styling={backgroundColor:dark?"black":"white",
    color:dark?"white":"black"}
    var getItems=()=>{
        return[num+1,num+2,num+3]
    }
return (
    <div style={styling}>
        <button onClick={()=>setDark(dark=>!dark)}>change the theme</button>
        <h2>Welcome to callback hook</h2>
        <input type="number" value={num} onChange={(e)=>setNum(e.target.value)} />
        <h2>the number is{num}</h2>
    </div>
    
)
}
export default UseCallback