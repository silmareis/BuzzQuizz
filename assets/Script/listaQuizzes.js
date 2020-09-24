function listaQuizzes(response) {

  var requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', config)
  requisicao.then(quandoSucessoLista)
}
 
function quandoSucessoLista (response) {
  quizzes = [...response.data];
  renderNovoQuizz();
  for (quizz of quizzes) renderQuizz(quizz);
}

function renderNovoQuizz (){
  var div = document.querySelector(".adicionaQuiz");
  div.innerHTML =`<h3 class="Text-primeiroCard">Novo<br> Quizz</h3><ion-icon name="add-circle" onclick="adicionaQuizz()"></ion-icon>`
}

function renderQuizz(quizz) {
var elementoQuizz = document.querySelector(".container-lisa-novoQuizz");
var novoQuizz = document.createElement("div");
novoQuizz.setAttribute("class", "novoQuiz");
novoQuizz.setAttribute("onclick", "abreQuiz(this)");
var title = quizz.title
novoQuizz.innerHTML = `<p class="texto-cards">`+ title +`</p>`
elementoQuizz.appendChild(novoQuizz);
}

 function adicionaQuizz() {
  var elementoLogin = document.querySelector(".listaQuizzes");
  elementoLogin.style.display = "none";  
    
 var elementoLogin = document.querySelector(".criarQuizz");
 elementoLogin.style.display = "block";
  criarPergunta()
  criarNivel()
}
    

        