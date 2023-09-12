import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigacija from "./komponente/Navigacija";
import Naruci from "./stranice/Naruci";
//import preporuka from "./stranice/Preporuke";
import Preporuka from './stranice/Preporuke';

function App() {
  return (
    <>
     <BrowserRouter>
         <Navigacija />
         <Routes>
             <Route path="/" element={<Naruci />} />
             <Route path="/preporuka" element={<Preporuka />} />
         </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
