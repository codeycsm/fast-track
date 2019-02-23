module.exports = function(sequelize, DataTypes) {
  "use strict";
  let PastFast = sequelize.define("PastFast", {
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    totalTime: DataTypes.DECIMAL
  });
  PastFast.associate = function(models) {
    models.PastFast.belongsTo(models.CurrentFast, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return PastFast;
};
