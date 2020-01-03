const express = require("express");
const parser = require("body-parser");
const app = express();

const Playlist = require("./routes/Playlist");
const Track = require("./routes/Track");


app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use("/", Playlist);
app.use("/", Track);


// home page
app.get("/",
    (req, res) => {
        res.send("hello world");

    });


const server = app.listen(
    3000,
    () => {

        console.log("server is listening on port 3000");
    }
);

module.exports = server;