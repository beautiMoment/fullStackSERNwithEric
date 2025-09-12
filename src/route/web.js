import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

// all route which will write code in here
let initWebRoutes = (app) => {
  // REST API
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);

  return app.use("/", router);
};

module.exports = initWebRoutes;
