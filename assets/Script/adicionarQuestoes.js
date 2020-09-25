
var quizzSelecionado = {};
var questoes = [];
var contQ = 0;

function abreQuiz(elemento) {
  selecionaQuizz(elemento);
    var elementoLogin = document.querySelector(".listaQuizzes");
    elementoLogin.style.display = "none";  
      
   var elementoLogin = document.querySelector(".interfaceQuizz");
   elementoLogin.style.display = "block";
   document.querySelector('.titulo-quizz-questao').innerText = quizzSelecionado.title;
   renderQuestao();
}

function selecionaQuizz(elemento){
  var titulo = elemento.querySelector('.texto-cards').innerText;
  for (quizz of quizzes) {
    if (quizz.title === titulo){
      quizzSelecionado = quizz;
      questoes = quizzSelecionado.data.perguntas;
    }
  }
}

// function pegaQuestoes (){
// }


function renderQuestao () {
  //var title = document.querySelector('.titulo-quizz-questao');

//   var questao = quizzSelecionado.data.perguntas[contQ];
}