
var aux, valor
aux=prompt("Dolar para Real: digite 1 \n Real para dolar: digite 2")
switch (aux) {
    case '1':{
        valor=prompt("Digite o valor a ser convertido: ")
        real=parseFloat(valor)*5.45
        alert("Total: " + valor + "dolares convertidos darão  " + real + " reais.")
        break;
    }
    case '2':{
        valor=prompt("Digite o valor a ser convertido: ")
        dolar=parseFloat(valor)/5.45
        alert("Total: " + valor + " reais convertidos darão  " + dolar + " dolares.")
        break;
    }
}