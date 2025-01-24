import {memo} from "react"
const UpdateNumber1=({value})=>
    {
    return(
        <div>
            <h1>this is UpdateNumber example..</h1>
            <h3>Value is {value}</h3>
        </div>
    )
    }
    export default memo(UpdateNumber1)