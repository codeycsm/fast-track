module.exports = function(sequelize, DataTypes) {
  let CurrentFast = sequelize.define("CurrentFast", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    startTime: DataTypes.DATE
  });
  CurrentFast.associate = function(models) {
    models.CurrentFast.hasMany(models.PastFast);
  };
  return CurrentFast;
};
