import * as React from 'react';
import '../styles/ui.css';
import Footer from './Footer';
import Header from './Header';
import Input from './Input';
import TitleBar from './TitleBar';
import {useState, useEffect} from 'react';

export default function Ordenador() {
    const [posi, setPosicao] = useState('0');
    const [list, setList] = useState([]);

    useEffect(() => {
        parent.postMessage(
            {
                pluginMessage: {
                    acao: 'inicar',
                },
            },
            '*'
        );
    }, []);

    let criar = () => {
        parent.postMessage(
            {
                pluginMessage: {
                    posicao: posi,
                },
            },
            '*'
        );
    };

    onmessage = (event) => {
        if (event.data.pluginMessage !== 'Selecione um elemento da página!') {
            setList(event.data.pluginMessage);
        }
    };

    return (
        <div className="container">
            <Header></Header>

            <div className="content">
                <TitleBar text="Ordenar leitura"></TitleBar>

                <p className="regular">
                    Selecione um elemento por vez de acordo com a ordem que deseja e informe qual o valor inicial.
                </p>

                <Input
                    placeholder="Posição inicial (padrão: 0)"
                    required={false}
                    name="posicao"
                    change={setPosicao}
                ></Input>

                <dl>
                    <dt className="regular">Lista dos elementos:</dt>
                    {list.map((a, key) => (
                        <dt key={key} className="regular">
                            - {a}
                        </dt>
                    ))}
                </dl>
            </div>

            <Footer complete={true} click={criar}></Footer>
        </div>
    );
}
