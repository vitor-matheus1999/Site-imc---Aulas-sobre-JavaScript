
var pacientes = document.querySelector(".paciente");


function calcularImc(altura, peso){

	return Math.round( peso/(altura * altura));
}

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdImc = document.querySelector(".info_imc");
	var imc = tdImc.textContent;

	var tdPeso = document.querySelector(".peso");
	var peso = tdPeso.textContent;

	var tdAltura = document.querySelector(".altura");
	var altura = tdAltura.textContent;

	var pesoValido = pesoEhValido(peso);

	var alturaValida = alturaEhValida(altura);


	if (!pesoValido){

		tdImc.textContent = "Peso inválido.";
		paciente.classList.add("paciente-invalido");
		pesoValido = false;
	}

	if (!alturaValida){

		tdAltura.textContent = "Altura inválida";
		paciente.classList.add("paciente-invalido");
		//paciente.style.backgroundColor = "red"; Mexe com o estilo pelo javascript.
		alturaValida = false;
	}

	if (pesoEhValido  && alturaEhValida ) {

		calcularImc();
		tdImc.textContent = imc;
	}

}

function pesoEhValido(peso){

	if(peso >= 0 && peso <= 1000){

		return true;
	
	}else{

		return false;
	}
}

function alturaEhValida(altura){

    if(altura >= 0 && altura <= 3.00){

        return true;

    }else{

        return false;
    }
}