import express from "express";
import indexRouter from "./routes/index.js";
const app = express();

app.use(express.json());

//Routing
app.use(indexRouter);

app.listen(8000);

//method:
// - get
// - post
// - put
// - patch
// - delete
