

import express from "express";
import indexRouter from "./routes/indexRouter.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use("/", indexRouter)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
