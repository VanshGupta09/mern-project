import express from "express";

const app = express();
const PORT = 4000;

app.listen(()=>{
    console.log(`server is running at https://localhost:${PORT}`);    
})