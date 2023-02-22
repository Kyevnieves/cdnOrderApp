const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes"));
app.set("port", 80);
app.use(cors());
app.use(morgan("dev"));

app.listen(app.get("port"), () => {
  console.log(`Servidor en puerto ${app.get("port")}`);
});
