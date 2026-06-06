// ===== MENU =====
function toggleMenu()
    document.getElementById("menu").classList.toggle("active");
} 

function show(id){
    document.querySelectorAll(".sec").forEach(s=>s.style.display="none");
    document.getElementById(id).style.display="block";
}

// ===== STORAGE =====
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let libros = JSON.parse(localStorage.getItem("libros")) || [];
let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];
let devoluciones = JSON.parse(localStorage.getItem("devoluciones")) || [];
let multas = JSON.parse(localStorage.getItem("multas")) || [];

function save(){
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("libros", JSON.stringify(libros));
    localStorage.setItem("prestamos", JSON.stringify(prestamos));
    localStorage.setItem("devoluciones", JSON.stringify(devoluciones));
    localStorage.setItem("multas", JSON.stringify(multas));
}

//// ================= USUARIOS =================
function addUsuario(){
    usuarios.push({
        id: Date.now(),
        nombre: nombre.value,
        apellido: apellido.value,
        rut: rut.value,
        telefono: telefono.value,
        correo: correo.value,
        password: password.value
    });
    save();
    renderUsuarios();
}

function renderUsuarios(){
    tablaUsuarios.innerHTML="";
    usuarios.forEach(u=>{
        tablaUsuarios.innerHTML += `
        <tr>
            <td>${u.id}</td>
            <td>${u.nombre}</td>
            <td>${u.apellido}</td>
            <td>
                <button onclick="editUsuario(${u.id})">✏️</button>
                <button onclick="delUsuario(${u.id})">❌</button>
            </td>
        </tr>`;
    });
}

function delUsuario(id){
    usuarios = usuarios.filter(u => u.id !== id);
    save();
    renderUsuarios();
}

function editUsuario(id){
    let u = usuarios.find(x=>x.id===id);

    let nombreNuevo = prompt("Nombre:", u.nombre);
    let apellidoNuevo = prompt("Apellido:", u.apellido);

    if(nombreNuevo && apellidoNuevo){
        u.nombre = nombreNuevo;
        u.apellido = apellidoNuevo;
        save();
        renderUsuarios();
    }
}

//// ================= LIBROS =================
function addLibro(){
    libros.push({
        id: Date.now(),
        titulo: titulo.value,
        autor: autor.value,
        categoria: categoria.value,
        editorial: editorial.value,
        anio: anio.value,
        estado: "Disponible"
    });
    save();
    renderLibros();
}

function renderLibros(){
    tablaLibros.innerHTML="";
    libros.forEach(l=>{
        tablaLibros.innerHTML += `
        <tr>
            <td>${l.id}</td>
            <td>${l.titulo}</td>
            <td>${l.estado}</td>
            <td>
                <button onclick="editLibro(${l.id})">✏️</button>
                <button onclick="delLibro(${l.id})">❌</button>
            </td>
        </tr>`;
    });
}

function delLibro(id){
    libros = libros.filter(l => l.id !== id);
    save();
    renderLibros();
}

function editLibro(id){
    let l = libros.find(x=>x.id===id);

    let nuevoTitulo = prompt("Título:", l.titulo);

    if(nuevoTitulo){
        l.titulo = nuevoTitulo;
        save();
        renderLibros();
    }
}

//// ================= PRESTAMOS =================
function addPrestamo(){
    prestamos.push({
        id: Date.now(),
        usuario: p_usuario.value,
        libro: p_libro.value
    });
    save();
    renderPrestamos();
}

function renderPrestamos(){
    listaPrestamos.innerHTML="";
    prestamos.forEach(p=>{
        listaPrestamos.innerHTML += `
        <li>
            Usuario ${p.usuario} → Libro ${p.libro}
            <button onclick="delPrestamo(${p.id})">❌</button>
        </li>`;
    });
}

function delPrestamo(id){
    prestamos = prestamos.filter(p=>p.id!==id);
    save();
    renderPrestamos();
}

//// ================= DEVOLUCIONES =================
function addDevolucion(){
    devoluciones.push({
        id: Date.now(),
        condicion: d_condicion.value
    });
    save();
    renderDevoluciones();
}

function renderDevoluciones(){
    listaDevoluciones.innerHTML="";
    devoluciones.forEach(d=>{
        listaDevoluciones.innerHTML += `
        <li>
            ${d.condicion}
            <button onclick="delDevolucion(${d.id})">❌</button>
        </li>`;
    });
}

function delDevolucion(id){
    devoluciones = devoluciones.filter(d=>d.id!==id);
    save();
    renderDevoluciones();
}

//// ================= MULTAS =================
function addMulta(){
    multas.push({
        id: Date.now(),
        monto: m_monto.value,
        dias: m_dias.value
    });
    save();
    renderMultas();
}

function renderMultas(){
    listaMultas.innerHTML="";
    multas.forEach(m=>{
        listaMultas.innerHTML += `
        <li>
            $${m.monto} - ${m.dias} días
            <button onclick="editMulta(${m.id})">✏️</button>
            <button onclick="delMulta(${m.id})">❌</button>
        </li>`;
    });
}

function delMulta(id){
    multas = multas.filter(m=>m.id!==id);
    save();
    renderMultas();
}

function editMulta(id){
    let m = multas.find(x=>x.id===id);

    let nuevoMonto = prompt("Monto:", m.monto);

    if(nuevoMonto){
        m.monto = nuevoMonto;
        save();
        renderMultas();
    }
}

// ===== INIT =====
window.onload = ()=>{
    renderUsuarios();
    renderLibros();
    renderPrestamos();
    renderDevoluciones();
    renderMultas();
}
