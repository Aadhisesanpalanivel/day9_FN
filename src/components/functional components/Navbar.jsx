import { Link } from "react-router-dom"
import "../../CSS/Navbar.css"
import {useState} from "react"
const Navbar=()=>{
    var [dropdown,showDropdown]=useState(false)
    const toggleDropDown=()=>{
        showDropdown((dropdown)=>!dropdown)
    }
    return(
     <header>
         <nav>
             <ol>
                 <li><Link to='/Home' className="link">Home</Link></li>
                 <li><Link to='/About' className="link">About</Link></li>
                 <li><Link to='/Gallery' className="link">Gallery</Link></li>
                 <li><Link to='/Contact' className="link">Contact</Link></li>
                 <div>
                        <span onMouseEnter={(toggleDropDown)} onMouseLeave={(toggleDropDown) }>Hooks</span>
                        {dropdown &&(
                            <ul>
                                <li><Link to="/usestate" >UseState</Link></li>
                                <li><Link to="/useeffect">UseEffect</Link></li>
                            </ul>)}
                    </div>
                 <li><Link to='/Signup' className="link">Signup</Link></li>
                 <li><Link to='/Login' className="link">Login</Link></li>
                 <li><Link to='/usestate' className="link">UseState</Link></li>
                 <li><Link to='/useeffect' className="link">UseEffect</Link></li>
             </ol>
         </nav>
     </header>
    ) 
 }
 export default Navbar