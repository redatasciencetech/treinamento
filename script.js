// 1. BANCO DE DADOS MESTRE DE TODOS OS INGREDIENTES DA COZINHA
// Todos apontam para a pasta "images/ingredientes/"
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

// 2. BANCO DE DADOS DO MENU E RECEITAS (Apontando para suas respectivas pastas de categoria)
const bancoDadosMenu = {
    bovina: {
        titulo: "Sanduíches de Carne Bovina",
        imgCategoria: "images/categorias/cat_bovina.png",
        itens: {
            "big-mac": {
                nome: "Big Mac",
                img: "images/bovina/big_mac.png",
                descricao: "Dois hambúrgueres (100% carne bovina), alface americana, queijo cheddar, maionese Big Mac, cebola, picles e pão com gergelim.",
                // A lógica do sistema lerá estes textos e buscará as fotos certas no banco de ingredientes acima!
                ingredientes: ["Pão com Gergelim", "Molho Especial", "Fatia Queijo Cheddar", "Carne 100% Bovina", "Picles", "Alface"]
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
                ingredientes: ["Pão com Gergelim", "Bacon", "Fatia Queijo Cheddar", "Carne 100% Bovina"]
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
                ingredientes: ["Pão Brioche Batata", "Molho Ranch", "Frango Crispy", "Bacon", "Alface", "Tomate"]
            }
        }
    }
};

let categoriaAtiva = "";
let lancheAtivoId = "";

// Gerenciador global de navegação de telas
function navegarPara(idTela) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(idTela).classList.add('ativa');
}

// Carrega as Categorias Principais (Atualizado para ler a imagem da pasta certa)
function inicializarCategorias() {
    // Atualiza as imagens das tags originais do HTML para usar os novos caminhos de pastas
    const imgsCategorias = document.querySelectorAll('.card-categoria img');
    if(imgsCategorias[0]) imgsCategorias[0].src = bancoDadosMenu.bovina.imgCategoria;
    if(imgsCategorias[1]) imgsCategorias[1].src = bancoDadosMenu.tasty.imgCategoria;
    if(imgsCategorias[2]) imgsCategorias[2].src = bancoDadosMenu.frango.imgCategoria;
}

// Carrega o Grid de Lanches dinamicamente
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
        card.onclick = () => carregarFichaReceita(keyLanche);
        
        card.innerHTML = `
            <img src="${lanche.img}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'50\' height=\'50\' viewBox=\'0 0 24 24\'><text x=\'2\' y=\'18\' font-size=\'14\'>🍔</text></svg>'">
            <span>${lanche.nome}</span>
        `;
        gridContainer.appendChild(card);
    });

    navegarPara('tela-grid-lanches');
}

// Carrega a Ficha Técnica cruzando os textos com a pasta de ingredientes
function carregarFichaReceita(keyLanche) {
    lancheAtivoId = keyLanche;
    const lanche = bancoDadosMenu[categoriaAtiva].itens[keyLanche];

    document.getElementById("receita-nome").innerText = lanche.nome;
    document.getElementById("receita-descricao").innerText = lanche.descricao;
    document.getElementById("receita-imagem").src = lanche.img;

    const listaIngredientesContainer = document.getElementById("receita-lista-ingredientes");
    listaIngredientesContainer.innerHTML = "";

    // MÁGICA DA LÓGICA: O loop lê o nome do ingrediente do lanche e puxa a imagem correspondente da pasta unificada de ingredientes
    lanche.ingredientes.forEach(nomeIngrediente => {
        const dadosDoItem = bancoDadosIngredientes[nomeIngrediente];
        const caminhoImagem = dadosDoItem ? dadosDoItem.img : "";

        const linha = document.createElement("div");
        linha.className = "ingrediente-linha";
        linha.innerHTML = `
            <img src="${caminhoImagem}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'30\' height=\'30\' viewBox=\'0 0 24 24\'><circle cx=\'12\' cy=\'12\' r=\'6\' fill=\'%23ffbc0d\'/></svg>'" alt="ingrediente">
            <span>${nomeIngrediente}</span>
        `;
        listaIngredientesContainer.appendChild(linha);
    });

    navegarPara('tela-receita');
}

function irParaCozinha() {
    alert(`Preparando os motores! A esteira vai ler que o lanche ativo é o "${bancoDadosMenu[categoriaAtiva].itens[lancheAtivoId].nome}" e carregará na tela de montagem apenas os ingredientes correspondentes.`);
}

// Inicializa os caminhos das pastas ao abrir
inicializarCategorias();