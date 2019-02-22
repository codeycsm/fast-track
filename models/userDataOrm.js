module.exports = function(sequelize, DataTypes) {
  let pastFast = sequelize.define("pastFast", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    totalTime: DataTypes.DECIMAL
  });
};
