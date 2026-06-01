from conexion import conectar

def insertar_usuario(nombre, apellido, rut, telefono, correo, password):
    conexion = conectar()
    cursor = conexion.cursor()

    sql = """INSERT INTO usuario 
    (nombre, apellido, rut, telefono, correo, password) 
    VALUES (%s, %s, %s, %s, %s, %s)"""

    cursor.execute(sql, (nombre, apellido, rut, telefono, correo, password))
    conexion.commit()
    conexion.close()


def listar_usuarios():
    conexion = conectar()
    cursor = conexion.cursor()

    cursor.execute("SELECT * FROM usuario")
    for fila in cursor.fetchall():
        print(fila)

    conexion.close()