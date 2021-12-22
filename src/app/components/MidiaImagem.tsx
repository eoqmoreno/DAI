import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState} from 'react';

export default function MidiaImagem() {
    const [nome, setNome] = useState('');
    const [alt, setAlt] = useState('');
    const [role, setRole] = useState('');
    const [feedback, setFeedback] = useState('');

    let criar = () => {
        if (nome != '' && alt != '') {
            parent.postMessage(
                {
                    pluginMessage: {
                        titulo: 'Mídia de imagem',
                        info: [
                            {
                                title: 'Nome do elemento* (name):',
                                text: nome,
                            },
                            {
                                title: 'Texto alternativo* (alt):',
                                text: alt,
                            },
                            {
                                title: 'Papel do elemento (role):',
                                text: role,
                            },
                        ],
                    },
                },
                '*'
            );
        } else {
            setFeedback('Preencha os campos obrigatórios*');
        }
    };

    onmessage = (event) => {
        setFeedback(event.data.pluginMessage);
    };

    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Mídia de imagem"></TitleBar>
                <p className="regular">Preencha os campos abaixo com as informações para o elemento:</p>

                <Input placeholder="Nome do elemento* (name)" required={true} name="nome" change={setNome}></Input>
                <Input placeholder="Texto alternativo* (alt)" required={true} name="alt" change={setAlt}></Input>
                <Input placeholder="Papel do elemento (role)" required={false} name="role" change={setRole}></Input>

                {feedback && <p className="regular required">{feedback}</p>}
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
