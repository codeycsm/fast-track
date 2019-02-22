module.exports = function(sequelize, DataTypes) {
  let Fast = sequelize.define("Fast", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  });
  return Fast;
};
