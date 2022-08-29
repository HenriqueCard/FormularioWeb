function imprimir(){
const dados=[document.getElementById("nome").value,document.getElementById("email").value,document.getElementById("telefone").value,document.getElementById("endereço").value]
    for(var i=0;i<dados.length;i++){
        document.writeln(dados[i]+'<br>');
    }

}