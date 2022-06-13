

var pacientes = document.querySelector(".paciente");


var botao = document.querySelector(".botao-enviar");

	
	 botao.addEventListener("click", function(event){

		event.preventDefault();

		var form = document.querySelector("#formulario-tabela");

		 
		var paciente = obtemPacienteDoFormulario(form);


		var erros = validaPaciente(paciente);

		if (erros.length> 0){

       		exibeMensagemDeErro(erros);
        	return;
		}

		adicionarPacientes(paciente);
	
		form.reset();

		var mensagemErro = document.querySelector("#mensagem-erro")
		mensagemErro.innerHTML="";
	});


function exibeMensagemDeErro(erros){

	var ul = document.querySelector("#mensagem-erro");
		
		ul . innerHTML="";
	
	erros.forEach(function(erro) {

		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);

	});



}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calcularImc(form.altura.value, form.peso.value),
    }

    return paciente;
}

function criarTd(dado, classe){


	var criarTd = document.createElement("td");
		criarTd.textContent = dado;
		criarTd.classList.add (classe);

	return criarTd;
}

function criarTr(paciente){

	var pacienteTr = document.createElement("tr");
		pacienteTr.classList.add("paciente");
		
		pacienteTr.appendChild(criarTd(paciente.nome, "nome"));
		pacienteTr.appendChild(criarTd(paciente.altura, "altura"));
		pacienteTr.appendChild(criarTd(paciente.peso, "peso"));
		pacienteTr.appendChild(criarTd(paciente.imc, "info_imc"));

	return pacienteTr;
}

function adicionarPacientes(paciente){

	var dadosDoPaciente = criarTr(paciente);

	var tabela = document.querySelector("#tabela-corpo");

		tabela.appendChild(dadosDoPaciente);
	
}


function validaPaciente(paciente){

	var mensagemDeErros = [];

	if(paciente.nome.length == 0 && paciente.peso.length == 0 && paciente.altura.length == 0){

		mensagemDeErros.push("Por favor, insira as informações do paciente.");
		
		return mensagemDeErros;
	}

	
	if(!pesoEhValido(paciente.peso)){

		mensagemDeErros.push("Peso é inválido ");
		
	}
	
	if(!alturaEhValida(paciente.altura)){

		mensagemDeErros.push(" Altura é inválida");
	}
	
	if(paciente.nome.length == 0 ){

		mensagemDeErros.push("Nome em branco.")
	}

	if(paciente.peso.length == 0 ){

		mensagemDeErros.push("Peso em branco.")
	}

	if(paciente.altura.length == 0){

		mensagemDeErros.push("Altura em branco.")
	}

	return mensagemDeErros;
}
