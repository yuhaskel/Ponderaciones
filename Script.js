const categorias = [
  "Comprensión Lectora",
  "Matemática M1",
  "Matemática M2",
  "Historia",
  "Ciencias",
  "Notas",
  "Ranking"
];

const camposContainer = document.getElementById("campos");
const resultado = document.getElementById("resultado");
const acumulado = document.getElementById("acumulado");

function crearCampos() {
  categorias.forEach((categoria, index) => {
    const row = document.createElement("div");
    row.className = "row";

    const label = document.createElement("label");
    label.textContent = categoria;

    const inputPuntaje = document.createElement("input");
    inputPuntaje.type = "number";
    inputPuntaje.min = 0;
    inputPuntaje.max = 1000;
    inputPuntaje.placeholder = "puntaje";
    inputPuntaje.id = `puntaje${index}`;

    const inputPorcentaje = document.createElement("input");
    inputPorcentaje.type = "number";
    inputPorcentaje.min = 0;
    inputPorcentaje.max = 100;
    inputPorcentaje.placeholder = "%";
    inputPorcentaje.id = `porcentaje${index}`;

    inputPuntaje.addEventListener("input", calcular);
    inputPorcentaje.addEventListener("input", calcular);

    row.appendChild(label);
    row.appendChild(inputPuntaje);
    row.appendChild(inputPorcentaje);
    camposContainer.appendChild(row);
  });
}

function calcular() {
  let total = 0;
  let sumaPorcentajes = 0;

  categorias.forEach((_, index) => {
    const puntaje = parseFloat(document.getElementById(`puntaje${index}`).value) || 0;
    const porcentaje = parseFloat(document.getElementById(`porcentaje${index}`).value) || 0;

    sumaPorcentajes += porcentaje;
    total += (puntaje * porcentaje) / 100;
  });

  resultado.textContent = Math.round(total);
  acumulado.textContent = `${sumaPorcentajes}%`;
}

crearCampos();
