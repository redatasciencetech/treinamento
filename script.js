// 🔑 CREDENCIAIS FIXAS MASTER DO SISTEMA
const bancoDadosUsuariosFixos = {
    "admin": "4321",       // Senha Master da Gerente
    "rogério": "eu2026"  // Sua senha de Desenvolvedor
};

// 1. BANCO DE DADOS MESTRE DE TODOS OS INGREDIENTES DA COZINHA (Atualizado com novos itens!)
const bancoDadosIngredientes = {
    "Pão com Gergelim": { img: "images/ingredientes/pao_gergelim.png" },
    "Pão Regular": { img: "images/ingredientes/pao_regular.png" }, // Novo!
    "Pão Brioche Batata": { img: "images/ingredientes/pao_brioche.png" },
    "Molho Especial": { img: "images/ingredientes/molho_especial.png" },
    "Molho Ranch": { img: "images/ingredientes/molho_ranch.png" },
    "Mostarda": { img: "images/ingredientes/mostarda.png" }, // Novo!
    "Ketchup": { img: "images/ingredientes/ketchup.png" }, // Novo!
    "Fatia Queijo Cheddar": { img: "images/ingredientes/queijo_cheddar.png" },
    "Carne 100% Bovina": { img: "images/ingredientes/carne_bovina.png" },
    "Carne 10:1 100% Bovina": { img: "images/ingredientes/carne_101.png" }, // Novo!
    "Frango Crispy": { img: "images/ingredientes/frango_crispy.png" },
    "Alface": { img: "images/ingredientes/alface.png" },
    "Tomate": { img: "images/ingredientes/tomate.png" },
    "Bacon": { img: "images/ingredientes/bacon.png" },
    "Picles": { img: "images/ingredientes/picles.png" },
    "Cebola Reidratada": { img: "images/ingredientes/cebola_reidratada.png" } // Novo!
};

// 2. BANCO DE DADOS DO MENU E RECEITAS (Com o Cheeseburger incluso!)
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
            },
            "cheeseburguer": {
                nome: "Cheeseburger",
                img: "images/bovina/cheeseburguer.png",
                descricao: "Um hamburguer (100% carne bovina), queijo cheddar, cebola, picles, ketchup, mostarda e pão sem gergelim (pão regular).",
                receitaTampa: ["Pão Regular", "Mostarda", "Ketchup", "Picles", "Queijo Cheddar"],
                receitaBase: ["Carne 10:1 100% Bovina", "Cebola Reidratada"]
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
    caixaAtiva = box = caixa;
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

    alert(`✅ Credenciais de "${nomeFinalExibicao}" updated com sucesso pela gerência!`);

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