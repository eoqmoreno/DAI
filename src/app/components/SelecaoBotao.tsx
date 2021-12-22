import * as React from 'react';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState} from 'react';

export default function SelecaoBotao() {
    const [id, setId] = useState('');
    const [alt, setAlt] = useState('');
    const [tipo, setTipo] = useState('');

    let criar = () => {
        parent.postMessage(
            {
                pluginMessage: {
                    titulo: 'Botão',
                    info: [
                        {
                            title: 'Nome do elemento (id):',
                            text: id,
                        },
                        {
                            title: 'Valor apresentado (value):',
                            text: alt,
                        },
                        {
                            title: 'Tipo de botão (type):',
                            text: tipo,
                        },
                    ],
                },
            },
            '*'
        );
    };

    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Botão"></TitleBar>
                <p className="regular">Preencha os campos abaixo com as informações para o elemento:</p>

                <Input placeholder="Nome do elemento (id)" required={true} name="nome" change={setId}></Input>
                <Input placeholder="Valor apresentado (value)" required={true} name="alt" change={setAlt}></Input>

                <select
                    onChange={(a) => {
                        setTipo(a.target.value);
                    }}
                >
                    <option defaultValue="true" hidden>
                        Tipo de botão (type)
                    </option>
                    <option value="Padrão">Padrão</option>
                    <option value="Submeter/enviar">Submeter/enviar</option>
                    <option value="Limpar">Limpar</option>
                </select>
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
