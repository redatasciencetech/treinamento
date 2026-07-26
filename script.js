// 🔑 CREDENCIAIS FIXAS MASTER DO SISTEMA
const bancoDadosUsuariosFixos = {
    "admin": "1234",       
    "rogerio": "7654"  
};

// 1. DESPENSA MESTRE DE INGREDIENTES DA COZINHA (Contém os novos insumos mapeados)
const bancoDadosIngredientes = {
    "Pão com Gergelim": { img: "images/ingredientes/pao_gergelim.png" },
    "Pão Regular": { img: "images/ingredientes/pao_regular.png" },
    "Pão Escuro com Gergelim": { img: "images/ingredientes/pao_escuro.png" },
    "Pão Tasty": { img: "images/ingredientes/pao_tasty.png" },
    "Pão tipo Brioche": { img: "images/ingredientes/pao_brioche.png" },
    "Pão tipo Brioche com Batata": { img: "images/ingredientes/pao_brioche_batata.png" },
    "Pão de Big Mac": { img: "images/ingredientes/pao_bigmac.png" },
    "Molho Especial": { img: "images/ingredientes/molho_especial.png" },
    "Molho Tasty": { img: "images/ingredientes/molho_tasty.png" },
    "Molho do CBO": { img: "images/ingredientes/molho_cbo.png" },
    "Molho Ranch": { img: "images/ingredientes/molho_ranch.png" },
    "Molho lácteo com queijo tipo cheddar": { img: "images/ingredientes/molho_cheddar.png" },
    "Mostarda": { img: "images/ingredientes/mostarda.png" },
    "Ketchup": { img: "images/ingredientes/ketchup.png" },
    "Maionese": { img: "images/ingredientes/maionese.png" },
    "Mequinese": { img: "images/ingredientes/mequinese.png" },
    "Geleia Agridoce Defumada": { img: "images/ingredientes/geleia_defumada.png" },
    "Alface": { img: "images/ingredientes/alface.png" },
    "Tomate": { img: "images/ingredientes/tomate.png" },
    "Bacon": { img: "images/ingredientes/bacon.png" },
    "Bacon Triturado": { img: "images/ingredientes/bacon_triturado.png" },
    "Picles": { img: "images/ingredientes/picles.png" },
    "Cebola Reidratada": { img: "images/ingredientes/cebola_reidratada.png" },
    "Cebola Fresca": { img: "images/ingredientes/cebola_fresca.png" },
    "Cebola Shoyu": { img: "images/ingredientes/cebola_shoyu.png" },
    "Cebola Crispy": { img: "images/ingredientes/cebola_crispy.png" },
    "Fatia Queijo Cheddar": { img: "images/ingredientes/queijo_cheddar.png" },
    "Queijo sabor Emental": { img: "images/ingredientes/queijo_emental.png" },
    "Carne Bovina [10:1]": { img: "images/ingredientes/carne_bovina101.png" },
    "Carne Bovina [4:1]": { img: "images/ingredientes/carne_bovina41.png" },
    "Carne Chicken Junior": { img: "images/ingredientes/frango_jr.png" },
    "Carne Chicken": { img: "images/ingredientes/frango_mc.png" },
    "Frango Crispy": { img: "images/ingredientes/frango_crispy.png" }
};

// 2. BANCO DE DADOS ATUALIZADO COM O CARDÁPIO COMPLETO DO MEQUI
const bancoDadosMenu = {
    bovina: {
        titulo: "Sanduíches de Carne Bovina",
        imgCategoria: "images/categorias/cat_bovina.png",
        itens: {
            "hamburger": {
                nome: "Hamburger",
                img: "images/bovina/hamburger.png",
                descricao: "Um hambúrguer 100% carne bovina, cebola reidratada, picles, ketchup, mostarda e pão regular sem gergelim.",
                receitaTampa: ["Pão Regular", "Mostarda", "Ketchup", "Picles"],
                receitaBase: ["Carne Bovina [10:1]", "Cebola Reidratada"]
            },
            "cheeseburguer": {
                nome: "Cheeseburger",
                img: "images/bovina/cheeseburguer.png",
                descricao: "Um hambúrguer 100% carne bovina, queijo cheddar fatiado, cebola reidratada, picles, ketchup, mostarda e pão regular.",
                receitaTampa: ["Pão Regular", "Mostarda", "Ketchup", "Picles", "Fatia Queijo Cheddar"],
                receitaBase: ["Carne Bovina [10:1]", "Cebola Reidratada"]
            },
            "duplo-burger-bacon": {
                nome: "Duplo Burger Bacon",
                img: "images/bovina/duplo_bacon.png",
                descricao: "Dois hambúrgueres 100% carne bovina, queijo cheddar fatiado, fatias de bacon crocante, picles, cebola reidratada, ketchup, mostarda e pão com gergelim.",
                receitaTampa: ["Pão com Gergelim", "Mostarda", "Ketchup", "Picles", "Bacon"],
                receitaBase: ["Carne Bovina [10:1]", "Fatia Queijo Cheddar", "Cebola Reidratada"]
            },
            "quarterao": {
                nome: "Quarterão com Queijo",
                img: "images/bovina/quarterao.png",
                descricao: "Um hambúrguer 100% carne bovina feito com carne 4:1 (mais grossa), duas fatias de queijo cheddar, picles, cebola fresca, ketchup e mostarda no pão com gergelim.",
                receitaTampa: ["Pão com Gergelim", "Mostarda", "Ketchup", "Picles", "Cebola Fresca"],
                receitaBase: ["Carne Bovina [4:1]", "Fatia Queijo Cheddar"]
            },
            "mcnifico-bacon": {
                nome: "McNífico Bacon",
                img: "images/bovina/mcnifico.png",
                descricao: "Hambúrguer de carne bovina 4:1, queijo cheddar fatiado, bacon, tomate, alface americana, cebola fresca, ketchup, mostarda e maionese no pão com gergelim.",
                receitaTampa: ["Pão com Gergelim", "Mostarda", "Ketchup", "Maionese", "Alface Americana", "Tomate", "Bacon"],
                receitaBase: ["Carne Bovina [4:1]", "Fatia Queijo Cheddar", "Cebola Fresca"]
            },
            "cheddar-mcmelt": {
                nome: "Cheddar McMelt",
                img: "images/bovina/cheddar_mcmelt.png",
                descricao: "Um hambúrguer bovino 4:1, molho lácteo cremoso com queijo tipo cheddar, cebola caramelizada ao molho shoyu no pão escuro com gergelim.",
                receitaTampa: ["Pão Escuro com Gergelim", "Cebola Shoyu"],
                receitaBase: ["Carne Bovina [4:1]", "Molho lácteo com queijo tipo cheddar"]
            },
            "big-mac": {
                nome: "Big Mac",
                img: "images/bovina/big_mac.png",
                descricao: "Dois hambúrgueres 100% carne bovina, alface americana, queijo cheddar, o inconfundível molho especial, cebola reidratada, picles e pão de Big Mac.",
                receitaTampa: ["Pão de Big Mac", "Molho Especial", "Alface", "Picles"],
                receitaBase: ["Carne Bovina [10:1]", "Fatia Queijo Cheddar", "Cebola Reidratada"]
            }
        }
    },
    tasty: {
        titulo: "Família Tasty & Brabo",
        imgCategoria: "images/categorias/cat_tasty.png",
        itens: {
            "tasty-turbo-1": {
                nome: "Tasty Turbo 1 Carne",
                img: "images/tasty/tasty_1.png",
                descricao: "Um hambúrguer de carne bovina 4:1, o icônico molho Tasty, três fatias de queijo sabor emental, tomate fresco, alface americana e cebola fresca no pão Tasty.",
                receitaTampa: ["Pão Tasty", "Molho Tasty", "Alface", "Tomate", "Cebola Fresca"],
                receitaBase: ["Carne Bovina [4:1]", "Queijo sabor Emental"]
            },
            "brabo-brabissimo-carne": {
                nome: "Brabo Brabíssimo Carne",
                img: "images/tasty/brabo_carne.png",
                descricao: "Dois hambúrgueres bovinos 4:1, a exclusiva Mequinese sabor carne defumada, molho do CBO, alface, fatias de bacon, queijo cheddar e cebola crispy no pão tipo brioche.",
                receitaTampa: ["Pão tipo Brioche", "Molho do CBO", "Mequinese", "Alface", "Bacon", "Cebola Crispy"],
                receitaBase: ["Carne Bovina [4:1]", "Fatia Queijo Cheddar"]
            },
            "brabo-smokehouse": {
                nome: "Brabo SmokeHouse",
                img: "images/tasty/brabo_smoke.png",
                descricao: "Dois hambúrgueres bovinos 4:1, Mequinese, cebola crispy, bacon em fatias, queijo cheddar, bacon triturado e a nova geleia agridoce defumada no pão brioche.",
                receitaTampa: ["Pão tipo Brioche", "Geleia Agridoce Defumada", "Mequinese", "Bacon Triturado", "Bacon", "Cebola Crispy"],
                receitaBase: ["Carne Bovina [4:1]", "Fatia Queijo Cheddar"]
            }
        }
    },
    frango: {
        titulo: "Sanduíches de Frango",
        imgCategoria: "images/categorias/cat_frango.png",
        itens: {
            "chicken-jr": {
                nome: "Chicken Jr",
                img: "images/frango/chicken_jr.png",
                descricao: "Frango empanado crocante, maionese tradicional e alface fresquinha no pão regular.",
                receitaTampa: ["Pão Regular", "Maionese", "Alface"],
                receitaBase: ["Carne Chicken Junior"]
            },
            "mcchicken": {
                nome: "McChicken",
                img: "images/frango/mcchicken.png",
                descricao: "Frango empanado dourado, maionese tradicional e alface americana crocante no pão com gergelim.",
                receitaTampa: ["Pão com Gergelim", "Maionese", "Alface"],
                receitaBase: ["Carne Chicken"]
            },
            "mcchicken-bacon": {
                nome: "McChicken Bacon",
                img: "images/frango/mcchicken_bacon.png",
                descricao: "Frango empanado, fatias de bacon crocante, maionese e alface americana no pão com gergelim.",
                receitaTampa: ["Pão com Gergelim", "Maionese", "Alface", "Bacon"],
                receitaBase: ["Carne Chicken"]
            },
            "mcchicken-duplo": {
                nome: "McChicken Duplo",
                img: "images/frango/mcchicken_duplo.png",
                descricao: "Dois empanados de frango estruturados, maionese e alface americana no pão com gergelim.",
                receitaTampa: ["Pão com Gergelim", "Maionese", "Alface"],
                receitaBase: ["Carne Chicken"]
            },
            "mccrispy-deluxe": {
                nome: "McCrispy Chicken Deluxe",
                img: "images/frango/mccrispy_deluxe.png",
                descricao: "Peito de frango temperado e empanado, maionese, alface e tomate fatiado no pão tipo brioche com batata.",
                receitaTampa: ["Pão tipo Brioche com Batata", "Maionese", "Alface", "Tomate"],
                receitaBase: ["Frango Crispy"]
            },
            "mccrispy-bacon-ranch": {
                nome: "McCrispy Chicken Bacon Ranch",
                img: "images/frango/mccrispy_ranch.png",
                descricao: "Pão brioche com batata, molho Ranch cremoso, bacon em fatias, alface americana, tomate fresco e peito de frango empanado.",
                receitaTampa: ["Pão tipo Brioche com Batata", "Molho Ranch", "Alface", "Tomate", "Bacon"],
                receitaBase: ["Frango Crispy"]
            },
            "mccrispy-legend": {
                nome: "McCrispy Chicken Legend",
                img: "images/frango/mccrispy_legend.png",
                descricao: "Frango empanado premium, molho emulsionado do CBO, cebola crispy, fatias de bacon, alface americana e queijo sabor cheddar no pão brioche com batata.",
                receitaTampa: ["Pão tipo Brioche com Batata", "Molho do CBO", "Alface", "Bacon", "Cebola Crispy"],
                receitaBase: ["Frango Crispy", "Fatia Queijo Cheddar"]
            },
            "brabo-brabissimo-frango": {
                nome: "Brabo Brabíssimo Frango",
                img: "images/frango/brabo_frango.png",
                descricao: "Dois empanados de frango, a exclusiva Mequinese defumada, molho do CBO, alface, fatias de bacon, queijo processado sabor cheddar e cebola crispy no pão brioche.",
                receitaTampa: ["Pão tipo Brioche", "Molho do CBO", "Mequinese", "Alface", "Bacon", "Cebola Crispy"],
                receitaBase: ["Carne Chicken", "Fatia Queijo Cheddar"]
            }
        }
    }
};

// Variáveis de Estado Globais
let usuarioAtivo = "";
let tempoInicio = 0;
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

function realizarLogin() {
    const inputNome = document.getElementById("input-colaborador").value.trim();
    const inputSenha = document.getElementById("input-senha").value.trim();

    if (!inputNome || !inputSenha) {
        alert("Por favor, preencha o Usuário e a Senha!");
        return;
    }

    const usuarioChave = inputNome.toLowerCase();
    const usuariosCadastrados = JSON.parse(localStorage.getItem("mequi_usuarios")) || {};
    const senhaValida = bancoDadosUsuariosFixos[usuarioChave] || usuariosCadastrados[usuarioChave];

    if (senhaValida && senhaValida === inputSenha) {
        usuarioAtivo = inputNome;
        
        document.getElementById("input-colaborador").value = "";
        document.getElementById("input-senha").value = "";

        if (usuarioChave === "admin") {
            carregarDashboardAdmin();
        } else {
            document.getElementById("boas-vindas-usuario").innerText = `Olá, ${usuarioAtivo}! Escolha uma Linha de Sanduíches`;
            navegarPara('tela-categorias');
        }
    } else {
        alert("❌ Usuário ou senha incorretos!");
    }
}

function executarAutoCadastro() {
    const nome = document.getElementById("cadastro-nome").value.trim();
    const senha = document.getElementById("cadastro-senha").value.trim();

    if (!nome || !senha) {
        alert("Por favor, preencha todos os campos para se cadastrar!");
        return;
    }

    const usuarioChave = nome.toLowerCase();
    const usuariosCadastrados = JSON.parse(localStorage.getItem("mequi_usuarios")) || {};

    if (bancoDadosUsuariosFixos[usuarioChave] || usuariosCadastrados[usuarioChave]) {
        alert("❌ Este nome de usuário já está cadastrado no sistema!");
        return;
    }

    usuariosCadastrados[usuarioChave] = senha;
    localStorage.setItem("mequi_usuarios", JSON.stringify(usuariosCadastrados));

    alert(`🎉 Perfil de "${nome}" criado com sucesso! Use suas credenciais para fazer login.`);
    
    document.getElementById("cadastro-nome").value = "";
    document.getElementById("cadastro-senha").value = "";
    navegarPara('tela-apresentacao');
}

function inicializarCategorias() {
    const imgsCategorias = document.querySelectorAll('.card-categoria img');
    if(imgsCategorias[0]) imgsCategorias[0].src = bancoDadosMenu.bovina.imgCategoria;
    if(imgsCategorias[1]) imgsCategorias[1].src = bancoDadosMenu.tasty.imgCategoria;
    if(imgsCategorias[2]) imgsCategorias[2].src = bancoDadosMenu.frango.imgCategoria;
}

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

function carregarFichaReceita(keyLanche) {
    lancheAtivoId = keyLanche;
    const lanche = bancoDadosMenu[categoriaAtiva].itens[keyLanche];

    document.getElementById("receita-nome").innerText = lanche.nome;
    document.getElementById("receita-descricao").innerText = lanche.descricao;
    document.getElementById("receita-imagem").src = lanche.img;

    const listaIngredientesContainer = document.getElementById("receita-lista-ingredientes");
    listaIngredientesContainer.innerHTML = "";

    const receitaFundoFinal = lanche.receitaBase || lanche.receitaFundo;
    const todosIngredientes = [...lanche.receitaTampa, ...receitaFundoFinal];
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

function iniciarMóduloQuiz(keyLanche) {
    lancheAtivoId = keyLanche;
    const lanche = bancoDadosMenu[categoriaAtiva].itens[keyLanche];
    
    document.getElementById("quiz-lanche-titulo").innerText = lanche.nome;
    reiniciarQuiz();

    const containerGrid = document.getElementById("quiz-container-ingredientes");
    containerGrid.innerHTML = "";

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
    const receitaFundoFinal = lanche.receitaBase || lanche.receitaFundo;
    const receitaOficialUnificada = [...lanche.receitaTampa, ...receitaFundoFinal];
    
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

function dispararCronometroEAvancar() {
    tempoInicio = Date.now();
    irParaCozinha();
}

function irParaCozinha() {
    const lanche = bancoDadosMenu[categoriaAtiva].itens[lancheAtivoId];
    document.getElementById("cozinha-lanche-titulo").innerText = `Mesa de Preparação: ${lanche.nome}`;
    
    limparMesaCozinha();
    
    const receitaFundoFinal = lanche.receitaBase || lanche.receitaFundo;
    const ingredientesDoLanche = [...lanche.receitaTampa, ...receitaFundoFinal];
    const listaEmbaralhada = ingredientesDoLanche.sort(() => Math.random() - 0.5);

    const containerLista = document.getElementById("cozinha-lista-ingredientes");
    containerLista.innerHTML = "";

    listaEmbaralhada.forEach(ingrediente => {
        const button = document.createElement("button");
        button.className = "ingrediente-row-cozinha";
        button.onclick = () => adicionarIngredienteNaCaixa(ingrediente);

        const img = document.createElement("img");
        img.src = bancoDadosIngredientes[ingrediente] ? bancoDadosIngredientes[ingrediente].img : '';
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
    img.src = bancoDadosIngredientes[nomeItem] ? bancoDadosIngredientes[nomeItem].img : '';
    img.onerror = () => { 
        img.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'><circle cx='12' cy='12' r='6' fill='%23ffbc0d'/></svg>"; 
    };
    div.appendChild(img);
    return div;
}

function limparMesaCozinha() {
    escolhasTampa = [];
    escolhasFundo = [];
    mudarCaixaAtiva("tampa");
    atualizarVisualMesaCozinha();
    document.getElementById("resultado-container").style.display = "none";
}

function confirmarMontagemCozinha() {
    const tempoFim = Date.now();
    const tempoGastoSegundos = Math.round((tempoFim - tempoInicio) / 1000);

    const lanche = bancoDadosMenu[categoriaAtiva].itens[lancheAtivoId];
    let acertosSequencia = 0;
    
    const receitaFundoFinal = lanche.receitaBase || lanche.receitaFundo;
    const totalItensReceita = lanche.receitaTampa.length + receitaFundoFinal.length;

    lanche.receitaTampa.forEach((ingrediente, i) => {
        if (escolhasTampa[i] === ingrediente) acertosSequencia++;
    });

    receitaFundoFinal.forEach((ingrediente, i) => {
        if (escolhasFundo[i] === ingrediente) acertosSequencia++;
    });

    const pctSequencia = Math.round((acertosSequencia / totalItensReceita) * 100);
    const errosQuantidade = totalItensReceita - acertosSequencia;

    salvarRegistroTreino(lanche.nome, pctSequencia, acertosSequencia, errosQuantidade, tempoGastoSegundos);

    document.getElementById("resultado-container").style.display = "block";
    const imgLanche = document.getElementById("resultado-lanche-img");
    
    if (pctSequencia === 100) {
        imgLanche.src = lanche.img;
        imgLanche.style.display = "block";
    } else {
        imgLanche.style.display = "none";
    }
    
    const divTexto = document.getElementById("resultado-texto-div");
    divTexto.innerHTML = `
        <h3>📋 Resultado da Montagem:</h3>
        <p><strong>Padrão Operacional:</strong> ${pctSequencia}%</p>
        <p><strong>Tempo de Montagem:</strong> ${tempoGastoSegundos}s</p>
        <p><strong>Balanço:</strong> ${acertosSequencia} acertos / ${errosQuantidade} erros</p>
        <p style="font-size:12px; color: ${pctSequencia === 100 ? '#007a33' : '#c8102e'}; font-weight:bold; margin-top:5px;">
            ${pctSequencia === 100 ? "🎉 Padrão Méqui Perfeito!" : "❌ Ordem incorreta. Limpe e tente novamente!"}
        </p>
    `;
}

function salvarRegistroTreino(nomeLanche, nota, acertos, erros, segundos) {
    let historicoGeral = JSON.parse(localStorage.getItem("mequi_historico")) || [];
    const novoRegistro = {
        colaborador: usuarioAtivo,
        lanche: nomeLanche,
        porcentagem: nota,
        acertosErros: `${acertos}/${erros}`,
        tempo: `${segundos}s`,
        data: new Date().toLocaleDateString('pt-BR')
    };
    historicoGeral.unshift(novoRegistro);
    localStorage.setItem("mequi_historico", JSON.stringify(historicoGeral));
}

function carregarDashboardAdmin() {
    navegarPara('tela-admin');
    
    const tabelaCorpo = document.getElementById("admin-tabela-corpo");
    tabelaCorpo.innerHTML = "";
    const historicoGeral = JSON.parse(localStorage.getItem("mequi_historico")) || [];

    if (historicoGeral.length === 0) {
        tabelaCorpo.innerHTML = `<tr><td colspan="6" style="text-align:center; color:#666;">Nenhum colaborador realizou treinos ainda.</td></tr>`;
    } else {
        historicoGeral.forEach(reg => {
            const tr = document.createElement("tr");
            const classeBadge = reg.porcentagem === 100 ? "nota-alta" : "nota-baixa";
            tr.innerHTML = `
                <td><strong>${reg.colaborador}</strong></td>
                <td>${reg.lanche}</td>
                <td><span class="badge-nota ${classeBadge}">${reg.porcentagem}%</span></td>
                <td>${reg.acertosErros}</td>
                <td>${reg.tempo}</td>
                <td>${reg.data}</td>
            `;
            tabelaCorpo.appendChild(tr);
        });
    }

    const tabelaSenhasCorpo = document.getElementById("admin-tabela-senhas-corpo");
    tabelaSenhasCorpo.innerHTML = "";
    const usuariosCadastrados = JSON.parse(localStorage.getItem("mequi_usuarios")) || {};

    const trFixo = document.createElement("tr");
    trFixo.innerHTML = `<td><strong>Rogério</strong></td><td><code style="color:#007a33; font-weight:bold;">mequi2026</code></td>`;
    tabelaSenhasCorpo.appendChild(trFixo);

    const chavesEquipe = Object.keys(usuariosCadastrados);
    if (chavesEquipe.length === 0) {
        const trVazio = document.createElement("tr");
        trVazio.innerHTML = `<td colspan="2" style="text-align:center; color:#7d7d7d; font-size:12px;">Nenhum colaborador se auto-cadastrou ainda.</td>`;
        tabelaSenhasCorpo.appendChild(trVazio);
    } else {
        chavesEquipe.forEach(colaborador => {
            const tr = document.createElement("tr");
            const nomeFormatado = colaborador.charAt(0).toUpperCase() + colaborador.slice(1);
            tr.innerHTML = `
                <td><strong>${nomeFormatado}</strong></td>
                <td><code>${usuariosCadastrados[colaborador]}</code></td>
            `;
            tabelaSenhasCorpo.appendChild(tr);
        });
    }
}

function alterarCredenciaisPorAdmin() {
    const usuarioAtual = document.getElementById("admin-alt-usuario-atual").value.trim().toLowerCase();
    const usuarioNovo = document.getElementById("admin-alt-usuario-novo").value.trim();
    const senhaNova = document.getElementById("admin-alt-senha-nova").value.trim();

    if (!usuarioAtual) {
        alert("Por favor, digite o nome atual do colaborador cadastrado!");
        return;
    }

    if (!usuarioNovo && !senhaNova) {
        alert("Por favor, preencha o Novo Nome de Login ou a Nova Senha para salvar!");
        return;
    }

    let usuariosCadastrados = JSON.parse(localStorage.getItem("mequi_usuarios")) || {};

    if (!usuariosCadastrados[usuarioAtual]) {
        alert("❌ Colaborador não encontrado! Verifique a grafia exata na tabela ao lado.");
        return;
    }

    const senhaExistente = usuariosCadastrados[usuarioAtual];
    const senhaFinal = senhaNova ? senhaNova : senhaExistente;
    const nomeFinalExibicao = usuarioNovo ? usuarioNovo : usuarioAtual;
    const nomeFinalChave = nomeFinalExibicao.toLowerCase();

    if (usuarioNovo && nomeFinalChave !== usuarioAtual && (bancoDadosUsuariosFixos[nomeFinalChave] || usuariosCadastrados[nomeFinalChave])) {
        alert("❌ Erro: Este novo nome de usuário já está sendo utilizado por outro colaborador!");
        return;
    }

    if (usuarioNovo && nomeFinalChave !== usuarioAtual) {
        delete usuariosCadastrados[usuarioAtual];
        
        let historicoGeral = JSON.parse(localStorage.getItem("mequi_historico")) || [];
        historicoGeral.forEach(reg => {
            if (reg.colaborador.toLowerCase() === usuarioAtual) {
                reg.colaborador = nomeFinalExibicao;
            }
        });
        localStorage.setItem("mequi_historico", JSON.stringify(historicoGeral));
    }

    usuariosCadastrados[nomeFinalChave] = senhaFinal;
    localStorage.setItem("mequi_usuarios", JSON.stringify(usuariosCadastrados));

    alert(`✅ Credenciais de "${nomeFinalExibicao}" atualizadas com sucesso pela gerência!`);

    document.getElementById("admin-alt-usuario-atual").value = "";
    document.getElementById("admin-alt-usuario-novo").value = "";
    document.getElementById("admin-alt-senha-nova").value = "";

    carregarDashboardAdmin();
}

function verMeuHistóricoPessoal() {
    navegarPara('tela-historico-usuario');
    document.getElementById("titulo-historico-pessoal").innerText = `Desempenho de: ${usuarioAtivo}`;
    
    const tabelaCorpo = document.getElementById("usuario-tabela-corpo");
    tabelaCorpo.innerHTML = "";

    const historicoGeral = JSON.parse(localStorage.getItem("mequi_historico")) || [];
    const meusTreinos = historicoGeral.filter(reg => reg.colaborador.toLowerCase() === usuarioAtivo.toLowerCase());

    if (meusTreinos.length === 0) {
        tabelaCorpo.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#666;">Você ainda não completou nenhuma montagem.</td></tr>`;
        return;
    }

    meusTreinos.forEach(reg => {
        const tr = document.createElement("tr");
        const classeBadge = reg.porcentagem === 100 ? "nota-alta" : "nota-baixa";

        tr.innerHTML = `
            <td>${reg.lanche}</td>
            <td><span class="badge-nota ${classeBadge}">${reg.porcentagem}%</span></td>
            <td>${reg.acertosErros}</td>
            <td>${reg.tempo}</td>
            <td>${reg.data}</td>
        `;
        tabelaCorpo.appendChild(tr);
    });
}

inicializarCategorias();