from usuario import insertar_usuario, listar_usuarios
from libro import insertar_libro, listar_libros
from prestamo import crear_prestamo, ver_prestamos
from devolucion import registrar_devolucion
from multa import generar_multa

# PRUEBAS

insertar_usuario("Juan", "Perez", "12.345.678-9", "987654321", "juan@gmail.com", "1234")
insertar_libro("Libro X", "Novela", "Autor X", "Editorial X", 2020, "Disponible")

crear_prestamo(1, 1)

ver_prestamos()

registrar_devolucion("Bueno")

generar_multa(2000, 2, 1, 1)