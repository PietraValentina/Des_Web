/* */
var data, resp
data=prompt("Digite o ano do seu nascimento: ")
if(data<=2003){
    resp=prompt("Você foi aprovado da prova prática de direção: (Sim ou Não) ")
    if(resp=='Sim'){
        alert("Parabéns! Você está apto a receber a CNH ")
    }
    else if(resp=='Não'){
        alert("Não está apto por não ter passado na prova prática!")
    }
}
else if(data>2003){
    alert("Não está apto por não possuir idade suficiente!")
}

