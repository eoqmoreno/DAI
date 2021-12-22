import * as React from 'react';
import Checkbox from './Checkbox';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState} from 'react';

export default function EntradaNumero() {
    const [nome, setNome] = useState('');
    const [required, setRequired] = useState('');
    const [label, setLabel] = useState('');
    const [title, setTitle] = useState('Não declarado');
    const [min, setMin] = useState('Não declarado');
    const [max, setMax] = useState('Não declarado');
    const [pattern, setPattern] = useState('Não declarado');
    const [feedback, setFeedback] = useState('');

    let criar = () => {
        if (nome != '' && label != '' && required != '' && label != '') {
            parent.postMessage(
                {
                    pluginMessage: {
                        titulo: 'Entrada de número',
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
                            {
                                title: 'Valor mínimo (min):',
                                text: min,
                            },
                            {
                                title: 'Valor máximo (max):',
                                text: max,
                            },
                            {
                                title: 'Formato (pattern):',
                                text: pattern,
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
                <TitleBar text="Entrada de número"></TitleBar>
                <p className="regular">Preencha os campos abaixo com as informações para o elemento:</p>

                <Input placeholder="Nome do elemento* (name)" required={true} name="nome" change={setNome}></Input>
                <Checkbox label="Campo obrigatório*" name="required" change={setRequired}></Checkbox>
                <Input placeholder="Etiqueta* (label)" required={true} name="label" change={setLabel}></Input>
                <Input placeholder="Título (title)" required={false} name="title" change={setTitle}></Input>
                <Input placeholder="Valor mínimo (min-length)" required={false} name="min" change={setMin}></Input>
                <Input placeholder="Valor máximo (max-length)" required={false} name="max" change={setMax}></Input>
                <Input placeholder="Formato (pattern)" required={false} name="pattern" change={setPattern}></Input>

                {feedback && <p className="regular required">{feedback}</p>}
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
