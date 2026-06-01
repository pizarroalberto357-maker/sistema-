let usuarios = [];

function agregarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const rut = document.getElementById("rut").value;
    const telefono = document.getElementById("telefono").value;
    const tipo = document.getElementById("tipo").value;

    if (!nombre || !rut) {
        alert("Completa los campos");
        return;
    }

    const usuario = {
        nombre,
        rut,
        telefono,
        tipo
    };

    usuarios.push(usuario);
    mostrarUsuarios();
}

function mostrarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    usuarios.forEach(u => {
        const li = document.createElement("li");
        li.textContent = `${u.nombre} - ${u.rut} (${u.tipo})`;
        lista.appendChild(li);
    });
}