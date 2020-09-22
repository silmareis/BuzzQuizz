function listaQuizzes(response) {

  var res = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', {headers: {"User-Token": token}})

  res.then(console.log)
}
 
