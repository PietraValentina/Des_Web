var nota, media, cont, total
    nota=0.0
    media=0.0
    cont=1
    total=0.0
    while (cont<=4) {
        nota=prompt("Digite a nota do "+ cont+ " bimenstre: ")
        total= parseFloat(nota)+parseFloat(total)
        cont++
    }
    media= parseFloat(total)/4
    if (media>10) {
        alert("ERRO")
    }
    else if (media>=9) {
        alert("Parabéns! Seu conceito é A! \n Sua média final foi: "+media)
    }
    else if (media>=8) {
        alert("Seu conceito é B!\n Sua média final foi: "+media)
    }
    else if(media>=7){
        alert("Seu conceito é C!\n Sua média final foi: "+media)
    }
    else if(media<7) {
        alert("Seu conceito é D.\n Sua média final foi: "+media)

    }
