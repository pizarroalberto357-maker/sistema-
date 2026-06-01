from conexion import conectar

def crear_prestamo(idusuario, idlibro):
    conexion = conectar()
    cursor = conexion.cursor()

    sql = """INSERT INTO prestamo 
    (prestamo, usuario_idusuario, Libro_idLibro) 
    VALUES (CURDATE(), %s, %s)"""

    cursor.execute(sql, (idusuario, idlibro))
    conexion.commit()
    conexion.close()


def ver_prestamos():
    conexion = conectar()
    cursor = conexion.cursor()

    sql = """
    SELECT p.idprestamo, u.nombre, l.titulo, p.prestamo
    FROM prestamo p
    JOIN usuario u ON p.usuario_idusuario = u.idusuario
    JOIN libro l ON p.Libro_idLibro = l.idLibro
    """

    cursor.execute(sql)

    for fila in cursor.fetchall():
        print(fila)

    conexion.close()