module.exports = (sequelize, Sequelize) => {
  const Note = sequelize.define("note", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.STRING,
    },
    archived: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return Note;
};
