from conexion import conectar

def insertar_libro(titulo, categoria, autor, editorial, anio, estado):
    conexion = conectar()
    cursor = conexion.cursor()

    sql = """INSERT INTO libro 
    (titulo, categoria, autor, editorial, anio_publicacion, estado) 
    VALUES (%s, %s, %s, %s, %s, %s)"""

    cursor.execute(sql, (titulo, categoria, autor, editorial, anio, estado))
    conexion.commit()
    conexion.close()


def listar_libros():
    conexion = conectar()
    cursor = conexion.cursor()

    cursor.execute("SELECT * FROM libro")
    for fila in cursor.fetchall():
        print(fila)

    conexion.close()