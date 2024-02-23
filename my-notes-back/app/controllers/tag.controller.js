const db = require("../models");
const Note = db.note;
const Tag = db.tag;

exports.create = (req, res) => {
  const tag = {
    name: req.body.name,
  };

  Tag.create(tag)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err
      })
    })
};

exports.findAll = (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Note,
        as: "notes",
        attributes: ["id", "title", "content"],
        through: {
          attributes: [],
        }
      },
    ],
  })
    .then(data => {
      res.send(data);
      })
    .catch(err => {
      res.status(500).send({
        message: err
      });
    });
};

exports.addNote = (req, res) => {
  console.log(req.body)

  Tag.findByPk(req.body.tagId)
    .then((tag) => {
      if (!tag) {
        console.log("Tag not found!");
        return null;
      }
      Note.findByPk(req.body.noteId).then((note) => {
        if (!note) {
          console.log("Note not found!");
          return null;
        }
        tag.addNote(note);
        res.send(tag);
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err
      });
    });
};
