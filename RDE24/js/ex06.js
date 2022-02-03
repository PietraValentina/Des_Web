var maior, menor, i, aux

for(i=0;i<5;i++){
    aux=prompt("Insira um valor: ")
    if (i==0){
        maior=aux
        menor=aux
    }
    else{
        if(aux<menor){
            menor=aux
        }
        if(aux>maior){
            maior=aux
        }
    }
}

alert("O maior valor inserido: "+maior+" \nO menor valor inserido: "+menor)