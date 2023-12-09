import express from "express";
import "./DB/database.js";
import router from "./router/routes.js";
import bodyParser from "body-parser";
import cors from "cors"
const app = express();


const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/material", router);

app.post("/", (req, res)=>{
    res.send("your request is processed")
})

app.listen(PORT ,()=>{
    console.log(`server is listining at port ${PORT}`);
})