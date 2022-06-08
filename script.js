function save(){
  var nome = document.getElementById("e-mail").value
  var texto = document.getElementById("senha").value
  localStorage.setItem("user", nome)
  localStorage.setItem("content", texto)
}
  

function load(){
  if("user" in localStorage){
    document.getElementById("n").value = localStorage.getItem("user")
  }
  if("content" in localStorage){
    document.getElementById("texto").value = localStorage.getItem("content")
  }
}

function verificar() { 
  var email = document.getElementById("e-mail").value
  var senha = document.getElementById("senha").value
  if(email.length==0||senha.length==0){
    alert("Insira o e-mail e a senha")
  }
}


