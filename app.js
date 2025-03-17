// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre al array y limpiar el campo de texto
  amigos.push(nombre);
  input.value = "";

  // Actualizar la visualización de la lista
  actualizarLista();
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista

  // Recorrer el array y agregar cada nombre como un elemento <li>
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo de forma aleatoria
function sortearAmigo() {
  // Validar que exista al menos un nombre en la lista
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  // Seleccionar un índice aleatorio y obtener el nombre correspondiente
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];

  // Mostrar el resultado en el elemento con id "resultado"
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar resultados previos

  const li = document.createElement("li");
  li.textContent = amigoSeleccionado;
  resultado.appendChild(li);
}
