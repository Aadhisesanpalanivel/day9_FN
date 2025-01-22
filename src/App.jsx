import About from "./components/functional components/About"
import Home from "./components/functional components/Home";
import Gallery from "./components/functional components/Gallery";
import Contact from "./components/functional components/contact";
import Navbar from "./components/functional components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Signup from "./components/functional components/Signup";
import Login from "./components/functional components/Login";
import UseState from "./components/functional components/Hooks/UseEffect"
import UseEffect from "./components/functional components/Hooks/UseState"
import UseEffectAPI from "./components/functional components/Hooks/UseEffectAPI";
function App(){
  
  return (
    <Router>
    <Navbar/>
    
    
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Gallery' element={<Gallery img="SECE Logo" page="Gallery"/>}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/usestate' element={<UseState/>}></Route>
        <Route path='/useeffect' element={<UseEffect/>}></Route>
        <Route path='/useapi' element={<UseEffectAPI/>}></Route>
      </Routes>
     
    </Router>
  )
}
export default App;