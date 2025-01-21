import About from "./components/functional components/About"
import Home from "./components/functional components/home";
import ClassCompEG from "./components/class components/ClassCompEg";
import Gallery from "./components/functional components/Gallery";
import Contact from "./components/functional components/contact";
import Navbar from "./components/functional components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Signup from "./components/functional components/Signup";
import Login from "./components/functional components/Login";
function App(){
  
  return (
    <Router>
    <Navbar/>
    
    
      <Routes>
      <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Gallery' element={<Gallery img="SECE Logo" page="Gallery"/>}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
     
    </Router>
  )
}
export default App;