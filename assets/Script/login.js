
var config = { headers: {}};

function entrarLogin() {

var email = document.querySelector(".input-email").value;
var senha = document.querySelector(".input-senha").value;   

if (email === "" || senha ==="") {
    alert("Preencha todos os campos"); 
}

else {
    document.querySelector(".entrar-login").disabled = true;

var dados = {
    
        "email": email,
        "password": senha
  };

  var requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/users', dados);
  requisicao.then(quandoSucessoLogin).catch(quandoErroLogin);
}
}


function quandoSucessoLogin(response) {
 config.headers['User-Token'] = response.data.token;
 var elementoLogin = document.querySelector(".login");
 elementoLogin.style.display = "none";  

 var elementoLogin = document.querySelector(".listaQuizzes");
 elementoLogin.style.display = "block";
 listaQuizzes(); 
}

function quandoErroLogin(erro) {
alert ("E-mail e senha incorretos")
document.querySelector(".entrar-login").disabled = false;
}

