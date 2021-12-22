import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState} from 'react';

export default function Intitular() {
    const [feedback, setFeedback] = useState('');
    const [titulo, setTitulo] = useState('0');

    let criar = () => {
        if (titulo !== '') {
            parent.postMessage(
                {
                    pluginMessage: {
                        renomear: titulo,
                    },
                },
                '*'
            );
        } else {
            setFeedback('Preencha os campos obrigatórios*');
        }
    };

    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Intitular página"></TitleBar>

                <p className="regular">Selecione o elemento correspondente a página e preencha o título da página:</p>

                <Input placeholder="Título da página*" required={true} name="posicao" change={setTitulo}></Input>

                {feedback && <p className="regular required">{feedback}</p>}
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
