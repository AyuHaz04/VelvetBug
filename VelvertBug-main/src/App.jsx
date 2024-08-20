import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'
import Anniversary from "./pages/Anniversary"
import BabyName from "./pages/BabyName"
import BabyShower from "./pages/BabyShower"
import Birthday from "./pages/Birthday"
import Dhoti from "./pages/Dhoti"
import HalfSaree from "./pages/HalfSaree"
import Housewarming from "./pages/Housewarming"
import Lovestory from "./pages/Lovestory"
import Roka from "./pages/Roka"
import SaveTheDate from "./pages/SaveTheDate"
import Wedding from "./pages/Wedding"
import CardEdit from "./pages/CardEdit"
import CardCustomize from "./pages/CardCustomize"
import CardShow from "./pages/CardShow"

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Anniversary" element={<Anniversary/>}></Route>
        <Route path="/BabyName" element={<BabyName/>}></Route>
        <Route path="/BabyShower" element={<BabyShower/>}></Route>
        <Route path="/Birthday" element={<Birthday/>}></Route>
        <Route path="/Dhoti" element={<Dhoti/>}></Route>
        <Route path="/HalfSaree" element={<HalfSaree/>}></Route>
        <Route path="/Housewarming" element={<Housewarming/>}></Route>
        <Route path="/Lovestory" element={<Lovestory/>}></Route>
        <Route path="/Roka" element={<Roka/>}></Route>
        <Route path="/SaveTheDate" element={<SaveTheDate/>}></Route>
        <Route path="/Wedding" element={<Wedding/>}></Route>
        <Route path="/CardEdit" element={<CardEdit/>}></Route>
        <Route path="/CardCustomize" element={<CardCustomize/>}></Route>
        <Route path="/CardShow" element={<CardShow/>}></Route>
        
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
