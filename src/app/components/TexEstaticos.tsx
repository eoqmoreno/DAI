import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import Header from './Header';
import Link from './Link';
import TitleBar from './TitleBar';

export default function TexEstaticos() {
    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Textos estáticos"></TitleBar>

                <p className="regular">O componente estático não pode ser documentado para acessibilidade.</p>

                <p className="regular">
                    Uma forma para aumentar a acessibilidade desses componentes é utilizando elementos de vídeo e áudio
                    para auxiliar na representar da informação junto ao texto.
                </p>

                <Link local="https://google.com" text="ver mais informações"></Link>
            </div>

            <Footer></Footer>
        </div>
    );
}
