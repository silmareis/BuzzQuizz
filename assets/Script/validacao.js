function validateStr (element) {
    return (element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()).trim();
}

function validateQuizz () {
    for (pergunta of perguntas){
        if (!validatedQuestion(pergunta.title))
            return false;
    }
    return true;
}
function validatedQuestion(string) {
    if(string.indexOf('?') === string.lastIndexOf('?')){
        if (string.indexOf('?') !== string.length-1)
            return false;
        else return true;
    }
    return false;
}