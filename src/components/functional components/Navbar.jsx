import { Link } from "react-router-dom"
import "../../CSS/Navbar.css"
class Hello
{

}
var obj=new Hello()
const Navbar=()=>{
    return(
     <header>
         <nav>
             <ol>
                 <li><Link to='/Home' className="link">Home</Link></li>
                 <li><Link to='/About' className="link">About</Link></li>
                 <li><Link to='/Gallery' className="link">Gallery</Link></li>
                 <li><Link to='/Contact' className="link">Contact</Link></li>
                 <li><Link to='/Signup' className="link">Signup</Link></li>
                 <li><Link to='/Login' className="link">Login</Link></li>
             </ol>
         </nav>
     </header>
    ) 
 }
 export default Navbar