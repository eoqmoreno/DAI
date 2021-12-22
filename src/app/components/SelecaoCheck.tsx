import * as React from 'react';
import Checkbox from './Checkbox';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState} from 'react';

export default function SelecaoCheck() {
    const [nome, setNome] = useState('');
    const [required, setRequired] = useState('');
    const [label, setLabel] = useState('');
    const [title, setTitle] = useState('Não declarado');
    const [feedback, setFeedback] = useState('');

    let criar = () => {
        if (nome != '' && label != '' && required != '' && label != '') {
            parent.postMessage(
                {
                    pluginMessage: {
                        titulo: 'Checkbox e radiobutton',
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
                                title: 'Etiqueta* (label):',
                                text: label,
                            },
                            {
                                title: 'Título (title):',
                                text: title,
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
                <TitleBar text="Checkbox e radiobutton"></TitleBar>
                <p className="regular">Preencha os campos abaixo com as informações para o elemento:</p>

                <Input placeholder="Nome do elemento* (name)" required={true} name="nome" change={setNome}></Input>
                <Checkbox label="Campo obrigatório*" name="required" change={setRequired}></Checkbox>
                <Input placeholder="Etiqueta* (label)" required={true} name="label" change={setLabel}></Input>
                <Input placeholder="Título (title)" required={false} name="title" change={setTitle}></Input>

                {feedback && <p className="regular required">{feedback}</p>}
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
