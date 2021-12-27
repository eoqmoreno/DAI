import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import Header from './Header';
import Link from './Link';
import TitleBar from './TitleBar';

export default function MidiaVideo() {
    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Mídia de vídeo"></TitleBar>

                <p className="regular">
                    Os elementos de mídia de vídeo não podem ser documentados para acessibilidade.
                </p>

                <p className="regular">
                    É recomendado que não utilize elementos de vídeo para representar toda a informação, utilize a
                    transcrição do texto do áudio e legendas no vídeo.
                </p>

                <p className="regular">
                    Quando colocar elementos de mídia lembre-se de adicionar os botões de controle da mídia (avançar,
                    voltar, pausar, continuar...).
                </p>

                <Link local="https://google.com" text="ver mais informações"></Link>
            </div>

            <Footer></Footer>
        </div>
    );
}
