import * as React from 'react';
import '../styles/ui.css';
import logo from '../assets/arrow_back.svg';
import {useNavigate} from 'react-router-dom';

export default function BackButton() {
    let navigate = useNavigate();
    return (
        <button
            className="voltarButton"
            onClick={() => {
                navigate(-1);
            }}
        >
            <img src={logo} alt="Ícone em flecha para voltar"></img>
            Voltar
        </button>
    );
}
