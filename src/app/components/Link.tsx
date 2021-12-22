import * as React from 'react';
import logo from '../assets/link.svg';

export default function Link(info) {
    let link = (e) => {
        window.open(e.local, '_blank');
    };
    return (
        <div
            onClick={() => {
                link(info);
            }}
            className="link"
        >
            <img src={logo} alt="Ícone em forma de corrente representando um link"></img>
            <span>{info.text}</span>
        </div>
    );
}
