import mysql.connector

def conectar():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="123456",  # 🔥 ESTA ES LA CLAVE
        database="biblioteca"
    ) 
