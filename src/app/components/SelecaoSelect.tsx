import * as React from 'react';
import Checkbox from './Checkbox';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState} from 'react';

export default function SelecaoSelect() {
    const [nome, setNome] = useState('');
    const [required, setRequired] = useState('');
    const [value, setValue] = useState('');
    const [feedback, setFeedback] = useState('');

    let criar = () => {
        if (nome != '' && required != '' && value != '') {
            parent.postMessage(
                {
                    pluginMessage: {
                        titulo: 'Select',
                        info: [
                            {
                                title: 'Nome do elemento* (name):',
                                text: nome,
                            },
                            {
                                title: 'Campo obrigatório*:',
                                text: required,
                            },
                            {
                                title: 'Etiqueta* (defaultValue):',
                                text: value,
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
                <TitleBar text="Select"></TitleBar>
                <p className="regular">Preencha os campos abaixo com as informações para o elemento:</p>

                <Input placeholder="Nome do elemento* (name)" required={true} name="nome" change={setNome}></Input>
                <Checkbox label="Campo obrigatório" name="required" change={setRequired}></Checkbox>
                <Input placeholder="Etiqueta* (defaultValue)" required={true} name="value" change={setValue}></Input>

                {feedback && <p className="regular required">{feedback}</p>}
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
