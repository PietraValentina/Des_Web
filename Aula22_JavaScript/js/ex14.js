function Enviar(){
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var ok
    if(nome.value!="" && nome.value.indexOF("")!=-1) {
        if(email.value.indexOF("@")!=-1){
            alert(nome.value+"Agredecemos o seu contato!")
            ok=true
        }
        else{
            alert("Digite um email válido!")
            ok=false
        }
      

    }
    else{
        alert("Preencha o seu nome!")
        ok=false

    }
    return ok


}