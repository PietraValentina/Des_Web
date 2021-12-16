var n, cont, r 
n=parseInt(prompt("Entre com o valor da tabuada: "))
cont=0
while(cont<11){
    r=n*cont
    document.write("\n<t2>"+r+"</t2>")
    cont++
}
document.write("\n Usando FOR")
for(cont=0;cont<11;cont++)
{
    r=n*cont
    document.write("\n<t2>"+r+"</t2>")

}