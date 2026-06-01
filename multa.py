from conexion import conectar

def generar_multa(monto, dias, idusuario, idprestamo):
    conexion = conectar()
    cursor = conexion.cursor()

    sql = """INSERT INTO multa 
    (monto, dias_atraso, estado, fecha_generacion, usuario_idusuario, prestamo_idprestamo) 
    VALUES (%s, %s, 'Pendiente', CURDATE(), %s, %s)"""

    cursor.execute(sql, (monto, dias, idusuario, idprestamo))
    conexion.commit()
    conexion.close()