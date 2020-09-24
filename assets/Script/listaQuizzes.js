function listaQuizzes(response) {

  var requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', config)
  requisicao.then(quandoSucessoLista).catch(quandoErroLista);
}
 

function quandoSucessoLista(sucessoLista) {

}

function quandoErroLista(erroLista) {

}