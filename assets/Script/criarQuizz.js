
var perguntas = [];
var niveis = [];
var qtdPerguntas = 0;
var qtdNiveis = 0;


function processarQuizz() {
    buscarPerguntas();
    buscarNiveis();

    var quizz = {
        title: validateStr(document.querySelector('.titulo-Quizz').value),
        data: {
            questions: perguntas,
            levels: niveis
        }
    }

    publicarQuizz(quizz);
}


function buscarPerguntas () {
    var prePerguntas = Array.from(document.querySelectorAll('.pergunta-Quizz'));
    for (element of prePerguntas) {
        perguntas.push(renderizarPerguntas(element));
    }
}

function  buscarNiveis () {
    var preNiveis = Array.from(document.querySelectorAll('.nivel-Quizz'));
    for (element of preNiveis){
        niveis.push(renderizarNiveis(element));
    }
}


function renderizarPerguntas (prePerguntas) {
    var pergunta = {
        title: validateStr(prePerguntas.querySelector('.digita-pergunta').value),
        answers: buscarRespostas(prePerguntas)
    }
    return pergunta;
}

function renderizarNiveis (preNiveis) {
    var nivel = {
        title: validateStr(preNiveis.querySelector('#titulo-nivel').value),
        image: preNiveis.querySelector('input[type=url]'),
        description: validateStr(preNiveis.querySelector('#descricao-nivel').value),
        minPercent: preNiveis.querySelector('#minimo').value,
        maxPercent: preNiveis.querySelector('#maximo').value
    }
    return nivel;
}

function buscarRespostas (prePerguntas) {
    var respostas = [];
    var preRespostas = Array.from(prePerguntas.querySelectorAll('.container-resposta'));
    for (preResposta of preRespostas) {
        respostas.push(buscarResposta(preResposta));
    }
    return respostas;
}

function buscarResposta (preResposta) {
    var resposta = {
        value: validateStr(preResposta.querySelector('input[type=text]').value),
        image: validateStr(preResposta.querySelector('input[type=url]').value)
    }
    return resposta;
}



function publicarQuizz(quizz) {
    
        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', quizz, config);
        request.then(sucessoQuizz).catch(erroQuizz)
}

function sucessoQuizz() {
    var elementoLogin = document.querySelector(".listaQuizzes");
        elementoLogin.style.display = "block";  
    
        var elementoLogin = document.querySelector(".criarQuizz");
        elementoLogin.style.display = "none";
}

function erroQuizz() {
    alert ("Preencha todos os campos")
}



function criarPergunta() {
var elementoPergunta = document.querySelector(".conteiner-perguntas");
var novaPergunta = document.createElement("div");
novaPergunta.setAttribute("class", "pergunta-Quizz")
novaPergunta.innerHTML = `<p class='numeroPergunta'> Pergunta ${++qtdPerguntas}</p>`
novaPergunta.innerHTML += "<input  class='digita-pergunta texto-input' placeholder='Digite a sua pergunta'>"
novaPergunta.innerHTML += "<div class='container-resposta'>" + "<div class='respostas'>" + 
"<input type='text' class='resposta-correta texto-input' id='resposta-correta' placeholder='Digite a sua resposta correta'>" +
 "<input type='text' class='resposta-incorreta texto-input' id='resposta-incorreta1' placeholder='Digite a sua resposta errada 1'>" +
 "<input type='text' class='resposta-incorreta texto-input' id='resposta-incorreta2' placeholder='Digite a sua resposta errada 2'>" +
 "<input type='text' class='resposta-incorreta texto-input' id='resposta-incorreta3' placeholder='Digite a sua resposta errada 3'>" + "</div>" +
 "<div class='linkimagens'>" + "<input  class='resposta-correta texto-input' id='imagem-correta' placeholder='Link para a imagem correta'>" +
 "<input type='url' class='resposta-incorreta texto-input' id='imagem-incorreta1' placeholder='Link  para a imagem incorreta 1'>" +
 "<input type='url' class='resposta-incorreta texto-input' id='imagem-incorreta2' placeholder='Link para a imagem incorreta 2'>"+
 "<input type='url'class='resposta-incorreta texto-input'  id='imagem-incorreta3' placeholder='Link para a imagem incorreta 3'>" + "</div>" + "</div>";
elementoPergunta.appendChild(novaPergunta);
}


function criarNivel() {
    var elementoNivel = document.querySelector(".conteiner-niveis");
    var novoNivel = document.createElement("div");
    novoNivel.setAttribute("class", "nivel-Quizz")
    novoNivel.innerHTML = `<p class='numeroNivel'> Nivel ${++qtdNiveis}</p>`
    novoNivel.innerHTML += "<div class='qtdAcertos'>" + "<input  class='input-nivel texto-input' id='minimo' placeholder='% Minima de Acerto do Nivel'>" +
    "<input  class='input-nivel texto-input' id='maximo' placeholder='% Maxima de Acerto do Nivel'>" + "</div>" + 
    "<input type='text' class='dados-nivel texto-input' id='titulo-nivel' placeholder='Titulo do Nivel'>" + 
    "<input type='url' class='dados-nivel texto-input'  id='imagem-nivel' placeholder='Link da imagem do nivel'>" +
    "<input type='text'  class='dados-nivel texto-input descricao' id='descricao-nivel' placeholder='Descricao do nivel'></input>";
    elementoNivel.appendChild(novoNivel);
    }
    
    
    function adicionaQuizz() {
        var elementoLogin = document.querySelector(".listaQuizzes");
        elementoLogin.style.display = "none";  
    
        var elementoLogin = document.querySelector(".criarQuizz");
        elementoLogin.style.display = "block";
        criarPergunta()
        criarNivel()
    }
    

        