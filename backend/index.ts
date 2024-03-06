import { connectDb } from "./db/database";
import express from "express";
import cors from "cors";
import { router } from "./router";

const app = express();
app.use(cors());
app.use(express.json());

connectDb();
app.use(router);
app.listen(8000, () => {
  console.log("running on port 8000");
});
