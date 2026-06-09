// 1. BANCO DE DADOS MESTRE DE TODOS OS INGREDIENTES DA COZINHA
const bancoDadosIngredientes = {
    "Pão com Gergelim": { img: "images/ingredientes/pao_gergelim.png" },
    "Pão Brioche Batata": { img: "images/ingredientes/pao_brioche.png" },
    "Molho Especial": { img: "images/ingredientes/molho_especial.png" },
    "Molho Ranch": { img: "images/ingredientes/molho_ranch.png" },
    "Fatia Queijo Cheddar": { img: "images/ingredientes/queijo_cheddar.png" },
    "Carne 100% Bovina": { img: "images/ingredientes/carne_bovina.png" },
    "Frango Crispy": { img: "images/ingredientes/frango_crispy.png" },
    "Alface": { img: "images/ingredientes/alface.png" },
    "Tomate": { img: "images/ingredientes/tomate.png" },
    "Bacon": { img: "images/ingredientes/bacon.png" },
    "Picles": { img: "images/ingredientes/picles.png" }
};

// 2. BANCO DE DADOS DO MENU E RECEITAS
const bancoDadosMenu = {
    bovina: {
        titulo: "Sanduíches de Carne Bovina",
        imgCategoria: "images/categorias/cat_bovina.png",
        itens: {
            "big-mac": {
                nome: "Big Mac",
                img: "images/bovina/big_mac.png",
                descricao: "Dois hambúrgueres (100% carne bovina), alface americana, queijo cheddar, maionese Big Mac, cebola, picles e pão com gergelim.",
                receitaTampa: ["Pão com Gergelim", "Molho Especial", "Alface", "Picles"],
                receitaBase: ["Fatia Queijo Cheddar", "Carne 100% Bovina"]
            }
        }
    },
    tasty: {
        titulo: "Família Tasty",
        imgCategoria: "images/categorias/cat_tasty.png",
        itens: {
            "tasty-turbo-3": {
                nome: "Tasty Turbo Bacon 3 carnes",
                img: "images/tasty/tasty_3.png",
                descricao: "Três carnes bovinas, queijo e a inconfundível maionese Tasty com bacon cascudo.",
                receitaTampa: ["Pão com Gergelim", "Bacon"],
                receitaBase: ["Fatia Queijo Cheddar", "Carne 100% Bovina"]
            }
        }
    },
    frango: {
        titulo: "Sanduíches de Frango",
        imgCategoria: "images/categorias/cat_frango.png",
        itens: {
            "mccrispy-ranch": {
                nome: "McCrispy Chicken Bacon Ranch",
                img: "images/frango/mccrispy_ranch.png",
                descricao: "Composto por pão tipo brioche com batata, o novo molho Ranch, bacon em fatias, alface americana, tomate e carne 100% de peito de frango empanada.",
                receitaTampa: ["Pão Brioche Batata", "Molho Ranch", "Bacon", "Alface", "Tomate"],
                receitaBase: ["Frango Crispy"]
            }
        }
    }
};

// Variáveis de Estado Globais
let categoriaAtiva = "";
let lancheAtivoId = "";
let escolhasQuiz = [];
let escolhasTampa = [];
let escolhasFundo = [];
let caixaAtiva = "tampa";

function navegarPara(idTela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(idTela).classList.add('ativa');
}

function inicializarCategorias() {
    const imgsCategorias = document.querySelectorAll('.card-categoria img');
    if(imgsCategorias[0]) imgsCategorias[0].src = bancoDadosMenu.bovina.imgCategoria;
    if(imgsCategorias[1]) imgsCategorias[1].src = bancoDadosMenu.tasty.imgCategoria;
    if(imgsCategorias[2]) imgsCategorias[2].src = bancoDadosMenu.frango.imgCategoria;
}

// Carrega o Grid de Lanches com AÇÃO DUPLA (Estudar vs Treinar)
function carregarGridLanches(keyCategoria) {
    categoriaAtiva = keyCategoria;
    const dadosCategoria = bancoDadosMenu[keyCategoria];
    
    document.getElementById("titulo-categoria-atual").innerText = dadosCategoria.titulo;
    const gridContainer = document.getElementById("container-grid-lanches");
    gridContainer.innerHTML = "";

    Object.keys(dadosCategoria.itens).forEach(keyLanche => {
        const lanche = dadosCategoria.itens[keyLanche];
        
        const card = document.createElement("div");
        card.className = "card-lanche";
        
        card.innerHTML = `
            <img src="${lanche.img}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\' viewBox=\'0 0 24 24\'><text x=\'2\' y=\'18\' font-size=\'14\'>🍔</text></svg>'">
            <span>${lanche.nome}</span>
            <div class="lanche-botoes-flex">
                <button class="btn-acao-lanche btn-estudar" onclick="carregarFichaReceita('${keyLanche}')">Estudar</button>
                <button class="btn-acao-lanche btn-treinar" onclick="iniciarMóduloQuiz('${keyLanche}')">Treinar</button>
            </div>
        `;
        gridContainer.appendChild(card);
    });

    navegarPara('tela-grid-lanches');
}

// MÓDULO 1: MODO DE ESTUDO (Exibe receita completa com imagem)
function carregarFichaReceita(keyLanche) {
    lancheAtivoId = keyLanche;
    const lanche = bancoDadosMenu[categoriaAtiva].itens[keyLanche];

    document.getElementById("receita-nome").innerText = lanche.nome;
    document.getElementById("receita-descricao").innerText = lanche.descricao;
    document.getElementById("receita-imagem").src = lanche.img;

    const listaIngredientesContainer = document.getElementById("receita-lista-ingredientes");
    listaIngredientesContainer.innerHTML = "";

    const todosIngredientes = [...lanche.receitaTampa, ...lanche.receitaBase];
    todosIngredientes.forEach(nomeIngrediente => {
        const dadosDoItem = bancoDadosIngredientes[nomeIngrediente];
        const linha = document.createElement("div");
        linha.className = "ingrediente-linha";
        linha.innerHTML = `
            <img src="${dadosDoItem ? dadosDoItem.img : ''}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 24 24\'><circle cx=\'12\' cy=\'12\' r=\'6\' fill=\'%23ffbc0d\'/></svg>'" alt="ingrediente">
            <span>${nomeIngrediente}</span>
        `;
        listaIngredientesContainer.appendChild(linha);
    });

    navegarPara('tela-receita');
}

// =========================================================================
// MÓDULO 2: TREINAMENTO ÀS CEGAS (ETAPA 1: ADIVINHAR INGREDIENTES DA DESPENSA)
// =========================================================================

function iniciarMóduloQuiz(keyLanche) {
    lancheAtivoId = keyLanche;
    const lanche = bancoDadosMenu[categoriaAtiva].itens[keyLanche];
    
    document.getElementById("quiz-lanche-titulo").innerText = lanche.nome;
    reiniciarQuiz();

    const containerGrid = document.getElementById("quiz-container-ingredientes");
    containerGrid.innerHTML = "";

    // Puxa TODOS os ingredientes cadastrados na loja para testar o funcionário
    Object.keys(bancoDadosIngredientes).forEach(nomeIngrediente => {
        const itemObj = bancoDadosIngredientes[nomeIngrediente];
        
        const cardItem = document.createElement("div");
        cardItem.className = "card-ingrediente-quiz";
        cardItem.onclick = () => selecionarIngredienteQuiz(nomeIngrediente, cardItem);
        
        cardItem.innerHTML = `
            <img src="${itemObj.img}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 24 24\'><rect width=\'24\' height=\'24\' fill=\'%23f2f2f2\'/></svg>'">
            <span>${nomeIngrediente}</span>
        `;
        containerGrid.appendChild(cardItem);
    });

    navegarPara('tela-quiz');
}

function selecionarIngredienteQuiz(nome, elementoHTML) {
    const posicao = escolhasQuiz.indexOf(nome);
    if (posicao > -1) {
        escolhasQuiz.splice(posicao, 1);
        elementoHTML.classList.remove("selecionado");
    } else {
        escolhasQuiz.push(nome);
        elementoHTML.classList.add("selecionado");
    }
}

function verificarRespostasQuiz() {
    const lanche = bancoDadosMenu[categoriaAtiva].itens[lancheAtivoId];
    const receitaOficialUnificada = [...lanche.receitaTampa, ...lanche.receitaBase];
    
    let acertos = 0;
    let erros = 0;

    escolhasQuiz.forEach(itemEscolhido => {
        if (receitaOficialUnificada.includes(itemEscolhido)) {
            acertos++;
        } else {
            erros++;
        }
    });

    const totalItensReceita = receitaOficialUnificada.length;
    
    // Fórmula matemática do Score: desconta erros de marcação indevida para evitar fraudes (clicar em tudo)
    let porcentagemAcerto = Math.round(((acertos - erros) / totalItensReceita) * 100);
    if (porcentagemAcerto < 0) porcentagemAcerto = 0;

    const completouComSucesso = (acertos === totalItensReceita && erros === 0);

    document.getElementById("quiz-resultado-container").style.display = "block";
    const divTexto = document.getElementById("quiz-resultado-texto");

    if (completouComSucesso) {
        divTexto.innerHTML = `
            <h3 style="color: #007a33; margin: 0 0 4px 0;">🎉 Ingredientes 100% Corretos!</h3>
            <p style="margin: 0; font-size: 14px; color: #333;">Você domina a receita deste lanche. A esteira de produção foi desbloqueada!</p>
        `;
        document.getElementById("btn-quiz-verificar").style.display = "none";
        document.getElementById("btn-quiz-reiniciar").style.display = "none";
        document.getElementById("btn-quiz-avancar").style.display = "block";
    } else {
        divTexto.innerHTML = `
            <h3 style="color: #c8102e; margin: 0 0 4px 0;">❌ Receita Incorreta</h3>
            <p style="margin: 0; font-size: 14px; color: #333;">Desempenho atual: <strong>${porcentagemAcerto}% de acerto</strong>.</p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #666;">Você esqueceu componentes obrigatórios ou adicionou ingredientes extras. Tente outra vez!</p>
        `;
        document.getElementById("btn-quiz-verificar").style.display = "none";
        document.getElementById("btn-quiz-reiniciar").style.display = "block";
        document.getElementById("btn-quiz-avancar").style.display = "none";
    }
}

function reiniciarQuiz() {
    escolhasQuiz = [];
    document.getElementById("quiz-resultado-container").style.display = "none";
    document.getElementById("btn-quiz-verificar").style.display = "block";
    document.getElementById("btn-quiz-reiniciar").style.display = "none";
    document.getElementById("btn-quiz-avancar").style.display = "none";
    document.querySelectorAll('.card-ingrediente-quiz').forEach(el => el.classList.remove("selecionado"));
}

// =========================================================================
// MÓDULO 3: MESA DE PREPARAÇÃO (SÓ ACESSÍVEL VIA CÓDIGO APÓS OS 100%)
// =========================================================================

function irParaCozinha() {
    const lanche = bancoDadosMenu[categoriaAtiva].itens[lancheAtivoId];
    document.getElementById("cozinha-lanche-titulo").innerText = `Mesa de Preparação: ${lanche.nome}`;
    
    limparMesaCozinha();
    
    // Carrega apenas os ingredientes válidos daquele lanche e os embaralha para o teste de sequência
    const ingredientesDoLanche = [...lanche.receitaTampa, ...lanche.receitaBase];
    const listaEmbaralhada = ingredientesDoLanche.sort(() => Math.random() - 0.5);

    const containerLista = document.getElementById("cozinha-lista-ingredientes");
    containerLista.innerHTML = "";

    listaEmbaralhada.forEach(ingrediente => {
        const button = document.createElement("button");
        button.className = "ingrediente-row-cozinha";
        button.onclick = () => adicionarIngredienteNaCaixa(ingrediente);

        const img = document.createElement("img");
        img.src = bancoDadosIngredientes[ingrediente].img;
        img.onerror = () => { img.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'><rect width='24' height='24' fill='%23f2f2f2'/></svg>"; };

        const span = document.createElement("span");
        span.innerText = ingrediente;

        button.appendChild(img);
        button.appendChild(span);
        containerLista.appendChild(button);
    });

    navegarPara('tela-cozinha');
}

function mudarCaixaAtiva(caixa) {
    caixaAtiva = caixa;
    document.getElementById("caixa-tampa").classList.toggle("ativa", caixa === "tampa");
    document.getElementById("caixa-fundo").classList.toggle("ativa", caixa === "fundo");
}

function adicionarIngredienteNaCaixa(ingrediente) {
    if (caixaAtiva === "tampa") {
        escolhasTampa.push(ingrediente);
    } else {
        escolhasFundo.push(ingrediente);
    }
    atualizarVisualMesaCozinha();
}

function atualizarVisualMesaCozinha() {
    const divTampa = document.getElementById("caixa-tampa");
    divTampa.innerHTML = `<div class="caixa-tag">Tampa (Esquerda)</div>`;
    escolhasTampa.forEach(item => divTampa.appendChild(criarTagItemCozinha(item)));

    const divFundo = document.getElementById("caixa-fundo");
    divFundo.innerHTML = `<div class="caixa-tag">Base (Direita)</div>`;
    escolhasFundo.forEach(item => divFundo.appendChild(criarTagItemCozinha(item)));
}

function criarTagItemCozinha(nomeItem) {
    const div = document.createElement("div");
    div.className = "item-na-caixa";
    const img = document.createElement("img");
    img.src = bancoDadosIngredientes[nomeItem].img;
    img.onerror = () => { img.style.display = 'none'; };
    const text = document.createElement("span");
    text.innerText = nomeItem;
    div.appendChild(img);
    div.appendChild(text);
    return div;
}

function limparMesaCozinha() {
    escolhasTampa = [];
    escolhasFundo = [];
    mudarCaixaAtiva("tampa");
    atualizarVisualMesaCozinha();
    document.getElementById("resultado-container").style.display = "none";
}

// Lógica de cálculo matemático de acertos modificada para ocultar a imagem em caso de erro
function confirmarMontagemCozinha() {
    const lanche = bancoDadosMenu[categoriaAtiva].itens[lancheAtivoId];
    let acertosSequencia = 0;
    const totalItensReceita = lanche.receitaTampa.length + lanche.receitaBase.length;

    lanche.receitaTampa.forEach((ingrediente, i) => {
        if (escolhasTampa[i] === ingrediente) acertosSequencia++;
    });

    lanche.receitaBase.forEach((ingrediente, i) => {
        if (escolhasFundo[i] === ingrediente) acertosSequencia++;
    });

    const pctSequencia = Math.round((acertosSequencia / totalItensReceita) * 100);

    // Exibe o container de resultados
    document.getElementById("resultado-container").style.display = "block";
    
    // 📍 AJUSTE AQUI: Seleciona a tag da imagem
    const imgLanche = document.getElementById("resultado-lanche-img");
    
    // Só exibe a imagem se o padrão operacional for perfeito (100%)
    if (pctSequencia === 100) {
        imgLanche.src = lanche.img;
        imgLanche.style.display = "block"; // Mostra a imagem
    } else {
        imgLanche.style.display = "none";  // Esconde a imagem completamente
    }
    
    const divTexto = document.getElementById("resultado-texto-div");
    divTexto.innerHTML = `
        <h3>📋 Resultado da Montagem:</h3>
        <p><strong>Padrão Operacional:</strong> ${pctSequencia}%</p>
        <p style="font-size:12px; color: ${pctSequencia === 100 ? '#007a33' : '#c8102e'}; font-weight:bold; margin-top:5px;">
            ${pctSequencia === 100 ? "🎉 Padrão Méqui Perfeito!" : "❌ Ordem incorreta ou item fora da caixa."}
        </p>
    `;
}

inicializarCategorias();