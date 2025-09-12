import express from "express";
import bodyParser from "body-parser";
// body-parser: get parameter from client
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

let app = express();
// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
let port = process.env.PORT || 6969;
// Port equal undefined then port = 6969
app.listen(port, () => {
  // call back
  console.log("backend nodejs is running on the port:", port);
});
