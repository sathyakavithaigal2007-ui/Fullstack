import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import Counter from "./counter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>



  )
}

export default App