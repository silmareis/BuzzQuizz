function adicionaQuizz() {
    var elementoLogin = document.querySelector(".listaQuizzes");
    elementoLogin.style.display = "none";  

    var elementoLogin = document.querySelector(".criarQuizz");
    elementoLogin.style.display = "block";
}

var perguntas = [];
var niveis = [];

function criarPergunta() {
var elementoPergunta = document.querySelector(".conteiner-perguntas");
var novaPergunta = document.createElement("div");
novaPergunta.setAttribute("class", "pergunta-Quizz")
novaPergunta.innerHTML = "<p class='numeroPergunta'> Pergunta 1</p>"
novaPergunta.innerHTML += "<input  class='digita-pergunta texto-input' placeholder='Digite a sua pergunta'>"
novaPergunta.innerHTML += "<div class='container-resposta'>" + "<div class='respostas'>" + 
"<input type='text' class='resposta-correta texto-input'   placeholder='Digite a sua resposta correta'>" +
 "<input type='text' class='resposta-incorreta texto-input' placeholder='Digite a sua resposta errada 1'>" +
 "<input type='text' class='resposta-incorreta texto-input' placeholder='Digite a sua resposta errada 2'>" +
 "<input type='text' class='resposta-incorreta texto-input' placeholder='Digite a sua resposta errada 3'>" + "</div>" +
 "<div class='linkimagens'>" + "<input  class='resposta-correta texto-input'   placeholder='Link para a imagem correta'>" +
 "<input  class='resposta-incorreta texto-input' placeholder='Link para a imagem incorreta 1'>" +
 "<input  class='resposta-incorreta texto-input' placeholder='Link para a imagem incorreta 2'>"+
 "<input  class='resposta-incorreta texto-input' placeholder='Link para a imagem incorreta 3'>" + "</div>" + "</div>";
elementoPergunta.appendChild(novaPergunta);
}


function criarNivel() {
    var elementoNivel = document.querySelector(".conteiner-niveis");
    var novoNivel = document.createElement("div");
    novoNivel.setAttribute("class", "nivel-Quizz")
    novoNivel.innerHTML = "<p class='numeroNivel'> Nivel 1</p>"
    novoNivel.innerHTML += "<div class='qtdAcertos'>" + "<input  class='input-nivel texto-input' placeholder='% Minima de Acerto do Nivel'>" +
    "<input  class='input-nivel texto-input' placeholder='% Maxima de Acerto do Nivel'>" + "</div>" + 
    "<input  class='dados-nivel texto-input' placeholder='Titulo do Nivel'>" + 
    "<input  class='dados-nivel texto-input' placeholder='Link da imagem do nivel'>" +
    "<input   class='dados-nivel texto-input descricao' placeholder='Descricao do nivel'></input>";
    elementoNivel.appendChild(novoNivel);
    }
    
            

        
        
            