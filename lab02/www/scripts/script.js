window.pratos = [];

function cabecalhoTabela (cabecalhos) {
    let resultado = "<tr>";
    for (let c of cabecalhos) {
        resultado += "<th>" + c + "</th>";
    }
    
    return resultado + "</tr>";
};

function linhaTabela (prato) {
    let resultado = "<tr>";
    for (let p of prato) { 
        resultado += "<td>" + p + "</td>";
    }
    resultado += "</tr>";
    return resultado;
}


function listarPratos () {
    let resultado = "<table border='1'>";
    let cabecalhos = ["Nome", "Tipo", "Preço"];
    resultado += "<tr>";
    for (let c of cabecalhos) {
        resultado += "<th>" + c + "</th>";
    }
    resultado += "</tr>";

    for (let prato of prato) {
        resultado += linhaTabela(prato);
    }
    resultado += "</table>";
    return resultado;
 

};


function apresentar () {
    document.getElementById("pratos").innerHTML = listarPratos();
};


function acrescentar() {
    let informacao = prompt("Por favor, insira os dados do prato no formato: Nome | Tipo (E, B, P ou S) | Preço. Exemplo: 'Choco Frito | P | 15.0'");

    if (informacao) {
        var campos = informacao.split("|");
        if (campos.length !== 3)
            alert("Ops! Os dados não foram inseridos corretamente.\nPor favor, insira os dados no seguinte formato:\nNome | Tipo (E para Entrada, B para Bebida, P para Prato Principal, S para Sobremesa) | Preço\nExemplo: Choco Frito | P | 15.0");
        else {
            pratos.push([campos[0], campos[1], parseFloat(campos[2])]);
            apresentar();
        }
    }
};


function remover () {
    let nome = prompt("Indique o prato a remover:");
    if (!nome) return;
   
    let tamanhoInicial = prato.length;
    pratos = pratos.filter(prato => prato[0].toLowerCase() !== nome.toLowerCase());

    if (prato.length === tamanhoInicial) {
        alert("Prato não encontrado!");
    } else {
        alert("Prato removido com sucesso!");
        apresentar();
    }
};


function procurar () {
    document.getElementById("pratos").innerHTML = listarPratos();
    let prato = prompt("Indique o nome do prato a procurar:");
    if (!prato) return;
    for (let i = 0; i < prato.length; i++) {
        if (prato[i][0].toLowerCase() === prato.toLowerCase()) {
            alert(prato[i][0] + " - " + pratos[i][2]);
            break;
        }
    }

};


pratos = [["Choco Frito", "P", 15.0],
["Mousse de Chocolate", "S", 2.5],
["Pão", "E", 0.8],
["JMF Reserva", "B", 5.2]
];
