const fs = require("fs");
const path = require("path");
const { sequelize } = require("../config/database");

const seedDatabase = async () => {
  try {
    console.log("Iniciando carga de datos de prueba...");

    const seedPath = path.join(__dirname, "../../database/seeds.sql");
    const sql = fs.readFileSync(seedPath, "utf8");

    // Ejecutar el SQL de forma masiva
    await sequelize.query(sql);

    console.log("Datos de prueba cargados exitosamente.");
    process.exit(0);
  } catch (error) {
    console.error("Error al cargar los datos de prueba:", error.message);
    process.exit(1);
  }
};

seedDatabase();
