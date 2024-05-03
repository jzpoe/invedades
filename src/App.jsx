import './App.css'
import Navbar from './components/navbar/Navbar';
import { Novedades } from './components/novedades/Novedades'
import {  Routes, Route, BrowserRouter } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
          <Navbar/>

    <Routes>
      <Route>
      <Route path="/novedades" element={<Novedades/>} />
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
