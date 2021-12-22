import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import TitleBar from './TitleBar';
import {useNavigate} from 'react-router-dom';
import Header from './Header';

export default function ComEntrada() {
    let navigate = useNavigate();
    let navi = (value) => {
        navigate(value.target.value);
    };

    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Componente de entrada"></TitleBar>

                <p className="regular">Escolha qual o elemento que deseja documentar:</p>

                <select
                    onChange={(e) => {
                        navi(e);
                    }}
                >
                    <option defaultValue="true" hidden>
                        Elemento
                    </option>
                    <option value="/entradaarquivo">Entrada de arquivo</option>
                    <option value="/entradadata">Entrada de data</option>
                    <option value="/entradanumero">Entrada de número</option>
                    <option value="/entradatexto">Entrada de texto</option>
                </select>
            </div>

            <Footer></Footer>
        </div>
    );
}
