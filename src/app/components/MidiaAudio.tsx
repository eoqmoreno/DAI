import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import Header from './Header';
import Link from './Link';
import TitleBar from './TitleBar';

export default function MidiaAudio() {
    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Mídia de áudio"></TitleBar>

                <p className="regular">
                    Os elementos de mídia de áudio não podem ser documentados para acessibilidade.
                </p>

                <p className="regular">
                    É recomendado que não utilize elementos de áudio para representar toda a informação, utilize a
                    transcrição do texto do áudio.
                </p>

                <Link local="https://google.com" text="ver mais informações"></Link>
            </div>

            <Footer></Footer>
        </div>
    );
}
