
function entrarLogin() {
var email = document.querySelector(".input-email").value;
var senha = document.querySelector(".input-senha").value;   

if (email === "" || senha ==="") {
    alert("Preencha todos os campos"); 
}

else {
    //var desabilitar = document.querySelector("button").disabled

var dados = {
    
        "email": email,
        "password": senha
  };

  var requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/users', dados);
  requisicao.then(quandoSucessoLogin).catch(quandoErroLogin);
}
}


function quandoSucessoLogin(response) {
 var token = response.data
 console.log(token);
}

function quandoErroLogin(erro) {
alert ("E-mail e senha incorretos")
}