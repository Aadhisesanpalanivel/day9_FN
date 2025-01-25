import { Link } from "react-router-dom"
import "../../CSS/Navbar.css"
import {useState} from "react"
const Navbar=()=>{
    var [dropdown,showDropdown]=useState(false)
    var [dropdown1,showDropdown1]=useState(false)
    const toggleDropDown=()=>{
        showDropdown((dropdown)=>!dropdown)
    }
    const toggleDropDown1=()=>{
        showDropdown1((dropdown1)=>!dropdown1)
    }
    return(
     <header>
         <nav>
             <ol>
                 <li><Link to='/Home' className="link">Home</Link></li>
                 <li><Link to='/About' className="link">About</Link></li>
                 <li><Link to='/Gallery' className="link">Gallery</Link></li>
                 <li><Link to='/Contact' className="link">Contact</Link></li>
                 
                 <div className="dropdown">
                        <div  className="link" onClick={(toggleDropDown)} onLeave={(toggleDropDown)}>Hooks</div>
                        {dropdown &&(
                            <ul className="dropdown-menu">
                                
                                <li><Link to="/usestate" >UseState</Link></li>
                                <li><Link to="/useeffect">UseEffect</Link></li>
                                <li><Link to="/useapi">UseEffectAPI</Link></li>
                                <li><Link to="/useref">UseRef</Link></li>
                                <li><Link to="/usereducer">UseReducer</Link></li>
                                <li><Link to="/usememo">UseMemo</Link></li>
                                <li><Link to="/usecallback">UseCallback</Link></li>
                                <li><Link to="/student">Student</Link></li>
                                <li><Link to="/usecustom">UseLocalStorage</Link></li>
                                {/* <li><Link to="/Coe">CoE</Link></li>
                                <li><Link to="/examresults">ExamResults</Link></li>
                                <li><Link to="/faculty">Faculty</Link></li>
                                <li><Link to="/invigilator">Invigilator</Link></li> */}
                                <li><Link to='/reactlifecyclemethods' className="link">rct</Link></li>
                                
                            </ul>)}
                    </div>

                    <div className="dropdown">
                        <div  className="link" onClick={(toggleDropDown1)} onLeave={(toggleDropDown1)}>Memorization</div>
                        {dropdown1 &&(
                            <ul className="dropdown-menu">
                                <li><Link to='/memo' className="link">Memo</Link></li>
                                <li><Link to='/lazy' className="link">LazySuspense</Link></li>
                               
                        </ul>)}
                    </div>
                    
                 <li><Link to='/Signup' className="link">Signup</Link></li>
                 <li><Link to='/Login' className="link">Login</Link></li>
                 

             </ol>
         </nav>
     </header>
    ) 
 }
 export default Navbar