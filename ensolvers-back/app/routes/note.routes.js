const router = require("express").Router();
const notes = require("../controllers/note.controller.js");

module.exports = app => {
  router.post("/", notes.create);
  router.put("/:id", notes.update);
  router.delete("/:id", notes.delete);
  router.get("/", notes.findAll);
  router.put("/tags/remove", notes.removeTag);

  app.use('/api/notes', router);
};
