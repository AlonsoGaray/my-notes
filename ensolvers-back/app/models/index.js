const Sequelize = require("sequelize");
const sequelize = new Sequelize('notesdb', 'root', '123456', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.note = require("./note.model.js")(sequelize, Sequelize);
db.tag = require("./tag.model.js")(sequelize, Sequelize);
db.tag.belongsToMany(db.note, {
  through: "note_tag"
});
db.note.belongsToMany(db.tag, {
  through: "note_tag",
})
module.exports = db;
