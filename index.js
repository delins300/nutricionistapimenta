var paciente = document.querySelectorAll(".paciente");

for (i = 0; i < paciente.length; i++) {
    var aux = paciente[i];
    var tdPeso = aux.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = aux.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var imc = peso / (altura * altura);
    var tdImc = aux.querySelector(".info-imc");
    tdImc.textContent = imc.toFixed(2)
}
