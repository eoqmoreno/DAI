import * as React from 'react';
import logo from '../assets/logoDAI.svg';
import '../styles/ui.css';

export default function Header() {
    return (
        <div id="logo">
            <img
                src={logo}
                className="h-center"
                alt="Logo do plugin DAI - Documentação de acessibilidade para interfaces"
                width="100px"
            ></img>
        </div>
    );
}
