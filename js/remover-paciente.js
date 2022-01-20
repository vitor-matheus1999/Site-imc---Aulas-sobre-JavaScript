var tabela = document.querySelector(".container");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("efeito-FadeOut");
    
   setTimeout(function(){
    
    event.target.parentNode.remove();

   },500);
});











//var pacientes = document.querySelectorAll(".paciente");
//
//pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){
//
//        console.log("Fui clicado");
//        this.remove();
//    });
//
//});