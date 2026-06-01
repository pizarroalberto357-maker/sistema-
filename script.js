let usuarios = [];

// 🔄 CAMBIAR SECCIONES
function mostrarSeccion(seccion) {
    document.querySelectorAll(".seccion").forEach(s => {
        s.classList.add("oculto");
    });

    document.getElementById(seccion).classList.remove("oculto");
}

// ➕ AGREGAR USUARIO
function agregarUsuario() {
    const nombre = document.getElementById("nombre").value;
    const rut = document.getElementById("rut").value;
    const telefono = document.getElementById("telefono").value;
    const tipo = document.getElementById("tipo").value;

    if (!nombre || !rut) {
        alert("Completa los campos");
        return;
    }

    const usuario = { nombre, rut, telefono, tipo };
    usuarios.push(usuario);

    mostrarUsuarios();
    limpiarFormulario();
}

// 🧹 LIMPIAR FORM
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("rut").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("contrasena").value = "";
}

// 📋 MOSTRAR EN TABLA (IMPORTANTE 🔥)
function mostrarUsuarios() {
    const tabla = document.getElementById("tablaUsuarios");
    tabla.innerHTML = "";

    usuarios.forEach((u, index) => {
        const fila = `
            <tr>
                <td>${u.nombre}</td>
                <td>${u.rut}</td>
                <td>${u.telefono}</td>
                <td>
                    <button onclick="eliminarUsuario(${index})">❌</button>
                </td>
            </tr>
        `;
        tabla.innerHTML += fila;
    });
}

// ❌ ELIMINAR USUARIO (PRO 🔥)
function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    mostrarUsuarios();
}
