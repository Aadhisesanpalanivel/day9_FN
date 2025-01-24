import { useContext } from "react"
import { ThemeProvider } from "../Hooks/Student"

const ExamResults=()=>
    {
        const res=useContext(ThemeProvider)
        return(
            <div>
                <h1>
                    Result is coming soon and is your sgpa{res.sgpa},cgpa is{res.cgpa}
                </h1>
            </div>
        )
    }
     export default ExamResults