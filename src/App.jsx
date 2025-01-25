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
import UseReducer from "./components/functional components/Hooks/UseReducer";
import UseRef from "./components/functional components/Hooks/UseRef";
import UseMemo from "./components/functional components/Hooks/UseMemo";
import UseCallback from "./components/functional components/Hooks/UseCallback";
import ReactLifeCycleMethods from "./components/class components/ReactLifeCycleMethods";
import Student from "./components/functional components/Hooks/Student";
import CoE from "./components/functional components/ContextComponents/CoE";
import ExamResults from "./components/functional components/ContextComponents/ExamResults";
import Faculty from "./components/functional components/ContextComponents/Faculty";
import Invigilator from "./components/functional components/ContextComponents/Invigilator";
import Memo from "./components/functional components/Memoization/Memo";
import LazyloadingWithsuspense from "./components/functional components/Memoization/LazyloadingWithsuspense";
import UseLocalStorage from "./components/functional components/Hooks/UseLocalStorage";
import HoC from "./components/functional components/HoC/Hoc";
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
        <Route path='/reactlifecyclemethods' element={<ReactLifeCycleMethods />}></Route>
        <Route path='/usestate' element={<UseState/>}></Route>
        <Route path='/useeffect' element={<UseEffect/>}></Route>
        <Route path='/useapi' element={<UseEffectAPI/>}></Route>
        <Route path='/usereducer' element={<UseReducer/>}></Route>
        <Route path='/useref' element={<UseRef/>}></Route>
        <Route path='/usememo' element={<UseMemo/>}></Route>
        <Route path='/usecallback' element={<UseCallback/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        {/* <Route path='/Coe' element={<CoE/>}></Route>
        <Route path='/examresults' element={<ExamResults/>}></Route>
        <Route path='/faculty' element={<Faculty/>}></Route>
        <Route path='/invigilator' element={<Invigilator/>}></Route> */}
        <Route path='/memo' element={<Memo/>}></Route>
        <Route path='/lazy' element={<LazyloadingWithsuspense/>}></Route>
        <Route path='/usecustom' element={<UseLocalStorage/>}></Route>
        <Route path='/hoc' element={<HoC/>}></Route>
      </Routes>
     
    </Router>
  )
}
export default App;