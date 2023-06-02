function desenharGrafico() {
    // Obtenha a referência para o elemento <canvas>
    var canvas = document.getElementById("grafico");
    var ctx = canvas.getContext("2d");
  
    // Defina os dados do gráfico
    var dados = [10, 20, 30, 40, 50];
  
    // Defina as configurações do gráfico
    var larguraBarra = 50;
    var alturaMaxima = 200;
    var espacamento = 20;
    var corBarra = "blue";
  
    // Desenhe as barras do gráfico
    for (var i = 0; i < dados.length; i++) {
      var alturaBarra = (dados[i] / 100) * alturaMaxima;
      var x = (larguraBarra + espacamento) * i;
      var y = canvas.height - alturaBarra;
  
      ctx.fillStyle = corBarra;
      ctx.fillRect(x, y, larguraBarra, alturaBarra);
    }
  }