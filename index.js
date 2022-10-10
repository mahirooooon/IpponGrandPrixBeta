const express = require("express");
const app =  express();
const odaiRoute = require("./routes/odai");
const pointRoute = require("./routes/point");
const connectDB = require("./db/connect");
app.use(express.json());
app.use(express.static("./public"));

const PORT = 5000;

//ルーティング設計
app.use("/api/v1/odai", odaiRoute);
app.use("/api/v1/point", pointRoute);

//データベースと接続
const start = async () => {
    try{
        await connectDB(
            "mongodb+srv://mahirooooon:8040tigers@cluster0.dtsqigh.mongodb.net/ippon?retryWrites=true&w=majority"
        );
        app.listen(PORT, ()=> console.log("サーバーが起動しました")); 
    } catch (err){
        console.log(err);
    }
};

start();
