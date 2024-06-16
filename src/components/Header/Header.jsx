import "./Header.css";

export default function Header() {

    return (
        <header>
            <div className="navigation">
                <a href="/">
                    <h1>Sobre</h1>
                </a>
                <a href="/habilidade">
                    <h1>Habilidades</h1>
                </a>
                <a href="/contato">
                    <h1>Contato</h1>
                </a>
            </div>
        </header>
    )
}