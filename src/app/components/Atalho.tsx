import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState} from 'react';

export default function Atalho() {
    const [feedback, setFeedback] = useState('');
    const [atalho, setAtalho] = useState('');
    const [acao, setAcao] = useState('');

    let criar = () => {
        if (atalho !== '' && acao !== '') {
            parent.postMessage(
                {
                    pluginMessage: {
                        atalho: 'Descrever atalhos do teclado',
                        info: [
                            {
                                title: 'Atalho* (ex: Ctrl + R):',
                                text: atalho,
                            },
                            {
                                title: 'Ação do atalho*:',
                                text: acao,
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

    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Descrever atalhos do teclado"></TitleBar>

                <p className="regular">
                    Preencha os campos abaixo com as informações do atalho, mas lembre-se de criar comandos compostos
                    para não atrapalhar a navegação:
                </p>

                <Input placeholder="Atalho* (ex: Ctrl + R)" required={true} name="atalho" change={setAtalho}></Input>
                <Input placeholder="Ação do atalho*" required={true} name="acao" change={setAcao}></Input>

                {feedback && <p className="regular required">{feedback}</p>}
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
