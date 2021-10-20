module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  { timestamps: false, tableName: 'Categories' });

  return Category;
};

// https://sequelize.org/master/manual/model-basics.html