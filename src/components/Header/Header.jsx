import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    function navegarPara(rota) {
        navigate(rota);
    }

    return (
        <header>
            <div className="navigation">
                <button onClick={() => navegarPara("/")}>
                    <h1>Sobre</h1>
                </button>
                <button onClick={() => navegarPara("/habilidades")}>
                    <h1>Habilidades</h1>
                </button>
                <button onClick={() => navegarPara("/contato")}>
                    <h1>Contato</h1>
                </button>
            </div>
        </header>
    )
}