import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from './pages/Sobre/Sobre';
import Habilidades from './pages/Habilidades/Habilidades';
import Contato from './pages/Contato/Contato';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/habilidade" element={<Habilidades />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}
