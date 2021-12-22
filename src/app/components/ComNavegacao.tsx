import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import Header from './Header';
import TitleBar from './TitleBar';
import {useNavigate} from 'react-router-dom';

export default function ComNavegacao() {
    let navigate = useNavigate();
    let navi = (value) => {
        navigate(value.target.value);
    };

    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Componente de navegação"></TitleBar>

                <p className="regular">Escolha qual o elemento que deseja documentar:</p>

                <select
                    onChange={(e) => {
                        navi(e);
                    }}
                >
                    <option defaultValue="true" hidden>
                        Elemento
                    </option>
                    <option value="/ordenador">Ordenar de leitura</option>
                    <option value="/intitular">Intitular página</option>
                    <option value="/atalhos">Descrever atalhos do teclado</option>
                </select>
            </div>

            <Footer></Footer>
        </div>
    );
}
