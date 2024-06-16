import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from './pages/Sobre/Sobre';
import Habilidades from './pages/Habilidades/Habilidades';
import Contato from './pages/Contato/Contato';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}
