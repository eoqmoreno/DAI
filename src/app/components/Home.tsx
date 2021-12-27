import * as React from 'react';
import TitleBar from './TitleBar';
import {useNavigate} from 'react-router-dom';
import Header from './Header';

export default function Home() {
    let navigate = useNavigate();

    let navi = (value) => {
        navigate(value.target.value);
    };

    return (
        <div className="container">
            <Header></Header>
            <div className="content">
                <TitleBar text="Tipo do elemento"></TitleBar>
                <p className="regular">
                    Para começar, escolha o tipo de elemento que deseja documentar a acessibilidade:
                </p>

                <select
                    onChange={(e) => {
                        navi(e);
                    }}
                >
                    <option defaultValue="false" hidden>
                        Tipo de elemento
                    </option>
                    <option value="/comentrada">Componentes de entrada</option>
                    <option value="/commidia">Componentes de mídia</option>
                    <option value="/comselecao">Componentes de seleção</option>
                    <option value="/comnavegacao">Navegação do sistema</option>
                    <option value="/texestatico">Textos estáticos</option>
                </select>
            </div>
        </div>
    );
}
