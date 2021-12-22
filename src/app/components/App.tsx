import * as React from 'react';
import {MemoryRouter as Router, Route, Routes} from 'react-router-dom';
import '../styles/ui.css';

import Home from './Home';
import ComEntrada from './ComEntrada';
import TexEstaticos from './TexEstaticos';
import ComMidia from './ComMidia';
import ComSelecao from './ComSelecao';
import ComNavegacao from './ComNavegacao';
import EntradaArquivo from './EntradaArquivo';
import EntradaData from './EntradaData';
import EntradaNumero from './EntradaNumero';
import EntradaTexto from './EntradaTexto';
import MidiaAudio from './MidiaAudio';
import MidiaImagem from './MidiaImagem';
import MidiaVideo from './MidiaVideo';
import SelecaoBotao from './SelecaoBotao';
import SelecaoCheck from './SelecaoCheck';
import SelecaoSelect from './SelecaoSelect';
import Ordenador from './Ordenador';
import Intitular from './Intitular';
import Atalho from './Atalho';

declare function require(path: string): any;

const App = ({}) => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/texestatico" element={<TexEstaticos></TexEstaticos>} />

                    <Route path="/comentrada" element={<ComEntrada></ComEntrada>} />
                    <Route path="/entradaarquivo" element={<EntradaArquivo></EntradaArquivo>} />
                    <Route path="/entradadata" element={<EntradaData></EntradaData>} />
                    <Route path="/entradanumero" element={<EntradaNumero></EntradaNumero>} />
                    <Route path="/entradatexto" element={<EntradaTexto></EntradaTexto>} />

                    <Route path="/commidia" element={<ComMidia></ComMidia>} />
                    <Route path="/midiaaudio" element={<MidiaAudio></MidiaAudio>} />
                    <Route path="/midiaimagem" element={<MidiaImagem></MidiaImagem>} />
                    <Route path="/midiavideo" element={<MidiaVideo></MidiaVideo>} />

                    <Route path="/comselecao" element={<ComSelecao></ComSelecao>} />
                    <Route path="/selecaobotao" element={<SelecaoBotao></SelecaoBotao>} />
                    <Route path="/selecaocheck" element={<SelecaoCheck></SelecaoCheck>} />
                    <Route path="/selecaoselect" element={<SelecaoSelect></SelecaoSelect>} />

                    <Route path="/comnavegacao" element={<ComNavegacao></ComNavegacao>} />
                    <Route path="/ordenador" element={<Ordenador></Ordenador>} />
                    <Route path="/intitular" element={<Intitular></Intitular>} />
                    <Route path="/atalhos" element={<Atalho></Atalho>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

// const textbox = React.useRef<HTMLInputElement>(undefined);

// const countRef = React.useCallback((element: HTMLInputElement) => {
//     if (element) element.value = '5';
//     textbox.current = element;
// }, []);

// const onCreate = () => {
//     const count = parseInt(textbox.current.value, 10);
//     parent.postMessage({pluginMessage: {type: 'create-rectangles', count}}, '*');
// };

// const onCancel = () => {
//     parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
// };

// React.useEffect(() => {
//     // This is how we read messages sent from the plugin controller
//     window.onmessage = (event) => {
//         const {type, message} = event.data.pluginMessage;
//         if (type === 'create-rectangles') {
//             console.log(`Figma Says: ${message}`);
//         }
//     };
// }, []);
