const categorias = [
  "Lenguaje",
  "M1",
  "M2",
  "Ciencias",
  "Historia",
  "NEM",
  "Ranking"
];

const camposDiv = document.getElementById("campos");
const resultadoDiv = document.getElementById("resultado");
const acumuladoSpan = document.getElementById("acumulado");

function crearCampos() {
  categorias.forEach(categoria => {
    const fila = document.createElement("div");
    fila.className = "input-row";

    const nombre = document.createElement("span");
    nombre.textContent = categoria;
    nombre.style.flex = "1";
    nombre.style.textAlign = "center";

    const puntaje = document.createElement("input");
    puntaje.type = "number";
    puntaje.min = 0;
    puntaje.max = 1000;
    puntaje.placeholder = "Puntaje";

    const ponderacion = document.createElement("input");
    ponderacion.type = "number";
    ponderacion.min = 0;
    ponderacion.max = 100;
    ponderacion.placeholder = "%";

    [puntaje, ponderacion].forEach(input => {
      input.addEventListener("input", calcular);
    });

    fila.appendChild(nombre);
    fila.appendChild(puntaje);
    fila.appendChild(ponderacion);
    camposDiv.appendChild(fila);
  });
}

function calcular() {
  let total = 0;
  let sumaPonderaciones = 0;

  camposDiv.querySelectorAll(".input-row").forEach(fila => {
    const inputs = fila.querySelectorAll("input");
    const puntaje = parseFloat(inputs[0].value) || 0;
    const ponderacion = parseFloat(inputs[1].value) || 0;

    total += (puntaje * ponderacion) / 100;
    sumaPonderaciones += ponderacion;
  });

  resultadoDiv.textContent = `Puntaje: ${Math.round(total)}`;
  acumuladoSpan.textContent = `${sumaPonderaciones}%`;
}

crearCampos();
