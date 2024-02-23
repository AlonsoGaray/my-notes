const db = require("../models")
const Note = db.note
const Tag = db.tag;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Cant be emtpy"
    });
    return
  }

  const note = {
    title: req.body.title,
    content: req.body.content,
  };

  Note.create(note)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
};

exports.findAll = (req, res) => {
  Note.findAll({
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["id", "name"],
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

exports.update = (req, res) => {
  const id = req.params.id;

  Note.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Note updated."
        });
      } else {
        res.send({
          message: `Note with id=${id} not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Note.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Note deleted"
        });
      } else {
        res.send({
          message: `Note with id=${id} not found.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err
      });
    });
};

exports.removeTag = (req, res) => {
  const { tagId, noteId } = req.body;
  console.log("🚀 ~ file: note.controller.js ~ line 128 ~ tagId", tagId)

  Note.findOne({
    where: { id: noteId }
  })
    .then(note => {
      note.removeTag(tagId)
      res.send(note);
    })
    .catch(err => {
      res.status(500).send({
        message: err + 'hola'
      });
    })
}
