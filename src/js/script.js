function limpar() {
  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("desc").value = "";
}

// Pegando o Botão
const btnEnviar = document.querySelector("#enviar");

// Atribuir escutador de eventos ao botão
btnEnviar.addEventListener("click", () => {
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var email = document.getElementById("email").value;
  var desc = document.getElementById("desc").value;

  if (nome == "") {
    alert("O campo nome está vazio");
  } else if (sobrenome == "") {
    alert("O campo sobrenome está vazio");
  } else if (email == "") {
    alert("O campo email está vazio");
  } else if (desc == "") {
    alert("O campo descrição está vazio");
  } else {
    limpar();
    alert("Dados Enviados com Sucesso!");
  }
});

// function carregarPagina(url) {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("conteudo").innerHTML = this.responseText;

//       // Código de manipulação do gráfico
//       var graficoCanvas = document.getElementById("grafico");
//       var ctx = graficoCanvas.getContext("2d");
//       // ... código de manipulação do gráfico
//       // Obtenha a referência para o elemento <canvas>
//       var canvas = document.getElementById("grafico");
//       var ctx = canvas.getContext("2d");

//       // Defina os dados do gráfico
//       var dados = [10, 20, 30, 40, 50];

//       // Defina as configurações do gráfico
//       var larguraBarra = 50;
//       var alturaMaxima = 200;
//       var espacamento = 20;
//       var corBarra = "blue";

//       // Desenhe as barras do gráfico
//       for (var i = 0; i < dados.length; i++) {
//         var alturaBarra = (dados[i] / 100) * alturaMaxima;
//         var x = (larguraBarra + espacamento) * i;
//         var y = canvas.height - alturaBarra;

//         ctx.fillStyle = corBarra;
//         ctx.fillRect(x, y, larguraBarra, alturaBarra);
//       }
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }
// Requisição Ajax
function carregarPagina(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("conteudo").innerHTML = this.responseText;
  
        // Chame a função de manipulação do gráfico do arquivo graphic.js
        desenharGrafico();
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }