import * as React from 'react';
import '../styles/ui.css';

export default function SucessButton(info) {
    return (
        <button className="sucessButton" onClick={info.click}>
            {/* <img src={logo} alt="Ícone em flecha para voltar"></img> */}
            Criar
        </button>
    );
}
