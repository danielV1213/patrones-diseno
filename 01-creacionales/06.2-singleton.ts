/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 */

import { COLORS } from "../helpers/colors.ts";

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connected: boolean;

  // Constructor privado para evitar instancias directas
  private constructor() {
    this.connected = false;
  }

  // Método estático para obtener la instancia única
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
      console.log("%cLa Base de Datos ha sido creada!", COLORS.green);
    }

    return DatabaseConnection.instance;
  }

  // Método para conectar a la base de datos
  public connect(): void {
    if (this.connected) {
      console.log("Ya hay una conexión activa a la Base de Datos.");
      return;
    }

    this.connected = true;
    console.log("Te has conectado con éxito a la Base de Datos!");
  }

  // Método para desconectar de la base de datos
  public disconnect(): void {
    if (this.connected) {
      this.connected = false;
      console.log("Te has desconectado de la Base de Datos!");
      return;
    }

    console.log("No hay una conexión activa.");
  }
}

// Pruebas
function main() {
  const db1 = DatabaseConnection.getInstance();
  db1.connect(); // Debería conectar a la base de datos

  const db2 = DatabaseConnection.getInstance();
  db2.connect(); // Debería mostrar que ya existe una conexión activa

  console.log("Son iguales:", db1 === db2); // Debería mostrar true

  db1.disconnect(); // Debería cerrar la conexión

  db2.connect(); // Ahora debería conectar de nuevo, ya que se cerró la anterior
}

main();
