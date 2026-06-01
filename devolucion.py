from conexion import conectar

def registrar_devolucion(condicion):
    conexion = conectar()
    cursor = conexion.cursor()

    sql = """INSERT INTO devolucion 
    (fecha_devolucion, condicion) 
    VALUES (CURDATE(), %s)"""

    cursor.execute(sql, (condicion,))
    conexion.commit()
    conexion.close()