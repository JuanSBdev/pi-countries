const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    continente:{
      type: DataTypes.STRING,
      allowNull: true,

    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    poblacion:{
      type: DataTypes.STRING,
      allowNull: false,

    },
  });
};