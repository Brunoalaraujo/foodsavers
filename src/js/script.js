// Requisição Ajax
function carregarPagina(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("conteudo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

// Menu Hamburguer

// function toggleMenu() {
//   var menu = document.querySelector('.menu');
//   menu.classList.toggle('show');
// }

// function checkWidth() {
//   var menuToggle = document.querySelector('.menu-toggle');
//   var menu = document.querySelector('.menu');
  
//   if (window.innerWidth <= 870) {
//     menuToggle.style.display = 'block';
//     menu.classList.remove('show');
//   } else {
//     menuToggle.style.display = 'none';
//     menu.classList.add('show');
//   }
// }

// window.addEventListener('resize', checkWidth);
// checkWidth();


// asdsa
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
