const router = require("express").Router();
const tags = require("../controllers/tag.controller.js");

module.exports = app => {
  router.get("/", tags.findAll);
  router.post("/", tags.create);
  router.post("/tag/add", tags.addNote);

  app.use('/api/tags', router);
};
