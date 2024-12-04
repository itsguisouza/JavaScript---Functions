//  1. Manipulação do DOM
// 1.1 document.querySelector()

const titulo = document.querySelector('h1');
titulo.textContent = 'Novo Título'; // Modifica o texto do elemento
// Uso principal: Buscar e modificar elementos HTML.

// 1.2 document.createElement()

const novoElemento = document.createElement('p'); novoElemento.textContent = 'Parágrafo Adicionado'; document.body.appendChild(novoElemento);
// Uso principal: Adicionar novos elementos ao DOM, enriquecendo a estrutura da página.

// 1.3 document.getElementById()

const elemento = document.getElementById('meuElemento');
// Uso principal: Buscar um elemento específico de forma direta quando se conhece o ID.

//  2. Eventos
// 2.1 addEventListener()

const botao = document.querySelector('button'); botao.addEventListener('click', () => {
    alert('Botão clicado!');
});
// Uso principal: Criar interatividade, como cliques ou movimento do mouse.

// 2.2 removeEventListener()
function mensagem() {
    console.log('Evento disparado');
}
botao.addEventListener('click', mensagem); botao.removeEventListener('click', mensagem);
// Uso principal: Remover eventos quando não são mais necessários.

//  3. Funções de Tempo
// 3.1 setTimeout()

setTimeout(() => {
    console.log('Executado após 2 segundos!');
}, 2000);
// Uso principal: Atrasar execuções ou criar temporizadores.

// 3.2 setInterval()

const intervalo = setInterval(() => {
    console.log('Executando a cada 1 segundo');
}, 1000);
// Para parar o intervalo
setTimeout(() => clearInterval(intervalo), 5000);
// Uso principal: Atualizações periódicas, como animações ou relógios.

//  4. Manipulação de Arrays
// 4.1 map()

const numeros = [1, 2, 3];
const dobrados = numeros.map(num => num * 2); console.log(dobrados); // [2, 4, 6]
// Uso principal: Transformar arrays.

// 4.2 filter()

const numeros = [10, 20, 30];
const maioresQue15 = numeros.filter(num => num > 15); console.log(maioresQue15); // [20, 30]
// Uso principal: Criar subarrays baseados em critérios.

// 4.3 reduce()

const numeros = [1, 2, 3];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0); console.log(soma); // 6
// Uso principal: Acumular valores, como somas ou concatenações.

// 4.4 forEach()

const frutas = ['maçã', 'banana', 'laranja']; frutas.forEach(fruta => console.log(fruta));
// Uso principal: Executar ações em cada item de uma lista.

//  5. JSON e APIs
// 5.1 JSON.parse() e JSON.stringify()

const json = '{"nome":"Ana","idade":30}'; const obj = JSON.parse(json); console.log(obj.nome); // "Ana"
const novoJson = JSON.stringify(obj); console.log(novoJson); // '{"nome":"Ana","idade":30}'
// Uso principal: Manipular dados enviados/recebidos por APIs.

// 5.2 fetch()

fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
// Uso principal: Obter ou enviar dados para servidores.

//  6. Controle de Fluxo
// 6.1 if/else

const idade = 18; if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
// Uso principal: Tomar decisões no código.

// 6.2 switch

const cor = 'vermelho'; switch (cor) {
    case 'vermelho':
        console.log('Pare!'); break;
    case 'amarelo': console.log('Atenção!'); break;
    case 'verde': console.log('Siga!'); break;
    default:
        console.log('Cor inválida');
}
// Uso principal: Substituir vários if/else aninhados.

//  7. Manipulação de Strings
// 7.1 toUpperCase()

const texto = 'olá'; console.log(texto.toUpperCase()); // 'OLÁ'
// Uso principal: Padronizar entrada de usuário.

// 7.2 toLowerCase()

const texto = 'OLÁ'; console.log(texto.toLowerCase()); // 'olá'
// Uso principal: Padronizar comparacões de strings.

// 7.3 includes()

const frase = 'JavaScript é incrível'; console.log(frase.includes('incrível')); // true
// Uso principal: Procurar substrings dentro de uma string.

//  8. Estruturas de Dados Modernas
// 8.1 Map

const mapa = new Map(); mapa.set('nome', 'João');
console.log(mapa.get('nome')); // 'João'
// Uso principal: Armazenar dados com chaves associadas.

// 8.2 Set

const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // Set { 1, 2, 3 }
// Uso principal: Garantir que não haja valores duplicados.

//  9. Outras Funções Utilitárias
// 9.1 Math.random()

const aleatorio = Math.random(); console.log(aleatorio);
// Uso principal: Geração de números aleatórios.

// 9.2 Math.floor()

const numero = 4.7; console.log(Math.floor(numero)); // 4
// Uso principal: Arredondar valores para inteiros.

// RA em hexadecimal: 39EFA   Nome: GUILHERME AUGUSTO ESTEFANI SOUZA 
