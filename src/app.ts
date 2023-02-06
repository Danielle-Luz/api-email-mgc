import { sendDataToEmail } from "./callbacks";
import { middlewares } from "./middlewares";

const express = require("express");

const api = express();

api.use(express.json());

api.post(
  "/email",
  middlewares.checkEmailRequestKeys,
  middlewares.checkEmailRequestTypes,
  sendDataToEmail
);

api.listen(3000, () => console.log("The API is working :))"));
