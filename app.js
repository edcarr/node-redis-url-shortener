import express from "express";
import bodyParser from "body-parser";
import api from "./routes/api";

const app = express();

app.set("port", process.env.PORT || 1337);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", api);

app.listen(app.get("port"), () => {
    console.log(`Express server listening on port: ${app.get("port")}`);
});
