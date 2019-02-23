module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    startTime: DataTypes.DATE
  });
  User.associate = function(models) {
    models.User.hasMany(models.PastFast);
  };
  return User;
};
