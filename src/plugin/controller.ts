figma.showUI(__html__);
figma.ui.resize(200, 500);

declare module '*.svg?inline' {
    const content: any;
    export default content;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

let criarFrame = (title: string, x: number, y: number) => {
    let frame = figma.createFrame();
    frame.layoutMode = 'VERTICAL';
    frame.counterAxisSizingMode = 'AUTO';
    frame.itemSpacing = 8;
    frame.paddingBottom = 8;
    frame.paddingTop = 8;
    frame.paddingRight = 8;
    frame.paddingLeft = 8;
    frame.name = title;
    frame.x = x;
    frame.y = y;
    return frame;
};

let criarTitulo = (title: string) => {
    let titulo = figma.createText();
    titulo.characters = title;
    titulo.fontSize = 16;
    titulo.fontName = {family: 'Roboto', style: 'Bold'};
    titulo.fills = [{type: 'SOLID', color: {r: 0.33, g: 0.33, b: 0.33}}];
    return titulo;
};

let criarLinha = () => {
    let line = figma.createLine();
    line.strokeWeight = 1;
    line.strokes = [{type: 'SOLID', color: {r: 0.86, g: 0.86, b: 0.86}}];
    line.layoutAlign = 'STRETCH';
    return line;
};

let criarInformacao = (title, text) => {
    let frame = figma.createFrame();
    frame.layoutMode = 'VERTICAL';
    frame.layoutAlign = 'STRETCH';
    frame.itemSpacing = 4;

    let cabecalho = figma.createText();
    cabecalho.characters = title;
    cabecalho.fontSize = 8;
    cabecalho.fills = [{type: 'SOLID', color: {r: 0.33, g: 0.33, b: 0.33}}];

    let texto = figma.createText();
    texto.characters = text;
    texto.fontSize = 12;

    frame.appendChild(cabecalho);
    frame.appendChild(texto);

    return frame;
};

let criarImagem = () => {
    let frame = figma.createFrame();
    frame.layoutMode = 'VERTICAL';
    frame.layoutAlign = 'STRETCH';
    frame.counterAxisAlignItems = 'CENTER';

    let svg =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.17 182.8"><defs><style>.cls-1{fill:#0fa958;}.cls-2{fill:#ffc700;}.cls-3{fill:#f24e1e;}.cls-4{fill:#545454;}</style></defs><title>Logo horizontal</title><g id="Camada_2" data-name="Camada 2"><g id="Camada_1-2" data-name="Camada 1"><path class="cls-1" d="M0,132V33.56A15.21,15.21,0,0,1,11.26,18.89L81.75,0V37.5H73.67v-27L13.35,26.69a7.14,7.14,0,0,0-5.27,6.87v87.86L28.42,116l2.09,7.8Z"/><path class="cls-2" d="M25.42,157.38V59A15.21,15.21,0,0,1,36.68,44.31l70.49-18.89v37.5H99.09V36L38.77,52.12A7.12,7.12,0,0,0,33.5,59v87.87l20.34-5.45,2.09,7.81Z"/><path class="cls-3" d="M50.84,182.8V84.4A15.21,15.21,0,0,1,62.1,69.73l70.49-18.89v98.4a15.21,15.21,0,0,1-11.26,14.67ZM124.51,61.38,64.19,77.54a7.11,7.11,0,0,0-5.26,6.86v87.87l60.31-16.16a7.14,7.14,0,0,0,5.27-6.87Z"/><path class="cls-4" d="M193.84,50c26.79,0,41.21,20.31,41.21,41.7.37,21.51-14.06,42.3-41.21,42.3H162.59V50Zm-.24,67.77c15.5,0,23.55-12.5,23.55-25.95s-8.29-25.6-23.55-25.6H180.5v51.55Z"/><path class="cls-4" d="M262.33,120.1,255.85,134H237.1v-2.41L275.79,49.2h8.3l38.45,82.43V134H303.91L297.3,120.1ZM268.22,105h23.32L279.88,77.2Z"/><path class="cls-4" d="M369.17,119.74V134H327.35v-14.3h11.89V63.86H328.31V49.92h39.9V63.86H357.27v55.88Z"/></g></g></svg>';
    let image = figma.createNodeFromSvg(svg);
    image.rescale(0.1);
    frame.appendChild(image);
    return frame;
};

let criarCirculo = (x, y, position) => {
    let circle = figma.createFrame();
    circle.layoutMode = 'VERTICAL';
    circle.primaryAxisSizingMode = 'FIXED';
    circle.primaryAxisAlignItems = 'CENTER';
    circle.counterAxisSizingMode = 'FIXED';
    circle.counterAxisAlignItems = 'CENTER';
    circle.resizeWithoutConstraints(50, 50);
    circle.strokes = [{type: 'SOLID', color: {r: 0.86, g: 0.86, b: 0.86}}];
    circle.strokeWeight = 5;
    circle.cornerRadius = 100;
    circle.name = 'Ordenador';
    circle.x = x;
    circle.y = y;

    let texto = figma.createText();
    texto.characters = String(position);
    texto.fontSize = 12;

    circle.appendChild(texto);
};

let enviarLista = (lista) => {
    figma.ui.postMessage(lista);
};

let selections = [];
let list = [];

figma.ui.onmessage = async (msg) => {
    await figma.loadFontAsync({family: 'Roboto', style: 'Regular'});
    await figma.loadFontAsync({family: 'Roboto', style: 'Bold'});

    if (figma.currentPage.selection.length > 0 && msg.titulo) {
        let x;
        let y;
        let nome;

        x = figma.currentPage.selection[0].x + figma.currentPage.selection[0].width + 40;
        y = figma.currentPage.selection[0].y;
        nome = figma.currentPage.selection[0].name;

        let frame = criarFrame(msg.titulo, x, y);
        let nomeElemento = criarInformacao('Elemento:', nome);
        let titulo = criarTitulo(msg.titulo);
        let line = criarLinha();
        let imagem = criarImagem();

        frame.appendChild(titulo);
        frame.appendChild(line);

        frame.appendChild(nomeElemento);

        msg.info.forEach((element) => {
            let info = criarInformacao(element.title, element.text);
            frame.appendChild(info);
        });

        frame.appendChild(imagem);
    } else {
        figma.ui.postMessage('Selecione um elemento da página!');
    }

    if (msg.posicao) {
        let init = parseInt(msg.posicao);

        for (let i = 0; i < selections.length; i++) {
            let res = selections[i];
            criarCirculo(res.x + res.width - 25, res.y - 25, init);
            init++;
        }
    }

    if (msg.acao) {
        figma.on('selectionchange', () => {
            if (figma.currentPage.selection[0] !== undefined) {
                selections.push(figma.currentPage.selection[0]);
                list.push(figma.currentPage.selection[0].name);
            } else {
                selections = [];
                list = [];
            }
            enviarLista(list);
        });
    }

    if (figma.currentPage.selection.length > 0 && msg.renomear) {
        figma.currentPage.selection[0].name = msg.renomear;
    } else {
        figma.ui.postMessage('Selecione um elemento da página!');
    }

    if (figma.currentPage.selection.length > 0 && msg.atalho) {
        let x;
        let y;

        x = figma.currentPage.selection[0].x + figma.currentPage.selection[0].width + 40;
        y = figma.currentPage.selection[0].y;

        let frame = criarFrame(msg.atalho, x, y);
        let titulo = criarTitulo(msg.atalho);
        let line = criarLinha();
        let imagem = criarImagem();

        frame.appendChild(titulo);
        frame.appendChild(line);

        msg.info.forEach((element) => {
            let info = criarInformacao(element.title, element.text);
            frame.appendChild(info);
        });

        frame.appendChild(imagem);
    } else {
        figma.ui.postMessage('Selecione um elemento da página!');
    }
};
