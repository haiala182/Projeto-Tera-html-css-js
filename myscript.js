function calcularNota(){
    var bim1 = parseFloat(document.getElementById("bim1").value);
       var bim2 = parseFloat(document.getElementById("bim2").value);
        var bim3 = parseFloat(document.getElementById("bim3").value);
        var bim4 = parseFloat(document.getElementById("bim4").value);
        var resultado = (bim1+bim2+bim3+bim4)/4;
      
        if (resultado >= 5) {
           texto = "Sua média é: " + resultado + " | Aprovado!";
   alert(texto);
       
        } else {
           texto = "Sua média é: " + resultado + " | Reprovado!";
   alert(texto);               

       
       
       }
   }
