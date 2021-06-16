const { Sequelize, DataTypes } = require('sequelize');

const { conOpt } = require('./config/keys');

const PostModel = require('./models/Post');
const CategoryModel = require('./models/Category');

const sequelize = new Sequelize(conOpt.database, conOpt.user, conOpt.password, {
  dialect: conOpt.dialect,
  host: conOpt.host,
  port: conOpt.port,
});

const Post = PostModel(sequelize, DataTypes);
const Category = CategoryModel(sequelize, DataTypes);

Category.hasMany(Post);
Post.belongsTo(Category);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('\ndb connected\n');
    await sequelize.sync({ force: true });
    await Category.bulkCreate([
      { name: 'Programming' },
      { name: 'Music' },
      { name: 'Videogames' },
      { name: 'Travel' },
      { name: 'Food' },
    ]);
    console.log('\nsynchronized tables\n');
  } catch (err) {
    console.error(err);
  }
})();

module.exports = { Category, Post };
