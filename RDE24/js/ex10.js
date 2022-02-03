var num, nome
nome=prompt("Olá! Qual o seu nome? ")
num=prompt("Digite um número: \nTente adivinhar!")
if (8<num<10) {
    alert("Opa! Você começou bem, continue...")
    num=prompt("Digite outro número: ")
    if(2<num<8){
        alert("Esta quase, continue...")
        num=prompt("Digite outro número: ")
        if (5<num<8) {
            alert("Esta foi sua última dica, pense bem!")
            num=prompt("Digite outro número: ")
            if (num==7) {
                alert("Parabéns você acertou!")
            }
            else{
                alert("Tente outra vez!")
            }
        }
        else{
            alert("O número está entre 5 e 8!")
            num=prompt("Digite outro número: ")
            if (5<num<8) {
                alert("Esta foi sua última dica, pense bem!")
                num=prompt("Digite outro número: ")
                if (num==7) {
                    alert("Parabéns você acertou!")
                }
                else{
                    alert("Tente outra vez!")
                }
            }
        }

    } 
    alert("Você errou, o número está entre 2 e 8!")
    num=prompt("Digite outro número: ")
    if(2<num<8){
        alert("Esta no caminho certo, continue...")
        num=prompt("Digite outro número: ")
        if (5<num<8) {
            alert("Esta foi sua última dica, pense bem!")
            num=prompt("Digite outro número: ")
            if (num==7) {
                alert("Parabéns você acertou!")
            }
            else{
                alert("Tente outra vez!")
            }
        }
        else{
            alert("O número está entre 5 e 8!")
            num=prompt("Digite outro número: ")
            if (5<num<8) {
                alert("Esta foi sua última dica, pense bem!")
                num=prompt("Digite outro número: ")
                if (num==7) {
                    alert("Parabéns você acertou!")
                }
                else{
                    alert("Tente outra vez!")
                }
            }
            else{
                alert("Tente outra vez")
            }
        }
    }
    else{
        alert("Tente outra vez")
    }
    
}
else {
    alert("Você errou, o número está entre 2 e 10!")
    num=prompt("Digite outro número: ")
    if(2<num<10){
        alert("Esta no caminho certo, continue...")
        num=prompt("Digite outro número: ")
        if (2<num<8) {
            alert("Esta quase, continue...")
            num=prompt("Digite outro número: ")
            if (5<num<8) {
                alert("Esta foi sua última dica, pense bem!")
                num=prompt("Digite outro número: ")
                if (num==7) {
                    alert("Parabéns você acertou!")
                }
                else{
                    alert("Tente outra vez!")
                }
            }
        }
        else{
            alert("O número está entre 2 e 8!")
            num=prompt("Digite outro número: ")
            if (2<num<8) {
                alert("Esta quase, continue...")
                num=prompt("Digite outro número: ")
                if (5<num<8) {
                    alert("Esta foi sua última dica, pense bem!")
                    num=prompt("Digite outro número: ")
                    if (num==7) {
                        alert("Parabéns você acertou!")
                    }
                    else{
                        alert("Tente outra vez!")
                    }
                }
                else{
                    alert("O número está entre 5 e 8!")
                    num=prompt("Digite outro número: ")
                    if (5<num<8) {
                        alert("Esta foi sua última dica, pense bem!")
                        num=prompt("Digite outro número: ")
                        if (num==7) {
                            alert("Parabéns você acertou!")
                        }
                        else{
                            alert("Tente outra vez!")
                        }
                    }
                    else{
                        alert("Tente outra vez")
                    }
                }
            }
            else{
                alert("Tente outra vez")
            }
        }
    }
    else{
        
            alert("Você errou!")
            
        }

    
}