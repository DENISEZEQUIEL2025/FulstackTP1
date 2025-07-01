function agregarTarea() {
  const nombre = document.getElementById("nombre").value.trim();
  const comentario = document.getElementById("comentario").value.trim();

  if (!nombre || !comentario) {
    alert("Completar todos los campos");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <strong>Nombre:</strong> ${nombre} <br>
    <strong>Comentario:</strong> ${comentario}
  `;

  // Botón eliminar
  const eliminarBtn = document.createElement("button");
  eliminarBtn.textContent = "Eliminar";
  eliminarBtn.onclick = () => li.remove();
  li.appendChild(eliminarBtn);
  // Inserta en la pagina
  const taskList = document.getElementById("taskList");
  taskList.insertBefore(li, taskList.firstChild);
  // Borrar el comentario
  document.getElementById("nombre").value = "";
  document.getElementById("comentario").value = "";
}