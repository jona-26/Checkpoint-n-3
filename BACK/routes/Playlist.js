const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config");

router.use(parser.json());
router.use(parser.urlencoded({
    extended:true
}));

router.post(
    "/playlist", 
    (req, res) => {
        const formData= req.body
        connection.query(
            "INSERT INTO Playlist SET ?", 
            formData, 
            (error, results, fields) => {
                if(error){
                    res.json(error);
                }
                else{
                    req.body.id = results.insertId;
                    res.json(formData);

                }
            }
        )
    }
);

router.put(
    "/Playlist/:id", 
    (req, res) => {
        connection.query(
            "UPDATE playlist SET date=?, pdf_id=?, type=? WHERE id=?", 
            [
                req.body.title, 
                req.body.genre, 
                req.params.id
            ], 
            (error, results, fields) => {
                if( error ){
                    res.json(error);
                }
                else{

                    connection.query(
                        "SELECT * FROM Playlist WHERE id=?", 
                        [
                            req.params.id
                        ], 
                        (error, results, fields) => {
                            if( error ){
                                res.json(error);
                            }
                            else{
                                res.json(results[0]);
                            }
                        }
                    )
                }
            }
        )
    }
);

router.get( 
    "/Playlist", 
    (req,res) => {
        connection.query(
            "SELECT * FROM Playlist",  
            (error, results, fields) => {
                if( error ){
                    res.json(error);
                }
                else if(results.length === 0 ){
                    res.status(404).json("invalid id");
                }
                else{
                    res.json(results[0]);const express = require("express");
                    const parser = require("body-parser");
                    const router = express();
                    
                }
            }
        )
    }
);

router.get( 
    "/Playlist/:id", 
    (req,res) => {
        connection.query(
            "SELECT * FROM Playlist WHERE id=?", 
            [req.params.id], 
            (error, results, fields) => {
                if( error ){
                    res.json(error);
                }
                else if(results.length === 0 ){
                    res.status(404).json("invalid id");
                }
                else{
                    res.json(results[0]);const express = require("express");
                    const parser = require("body-parser");
                    const router = express();
                    
                }
            }
        )
    }
);
                    

router.delete(
    "/Playlist/:id", 
    (req, res) => {
        connection.query(
            "SELECT * FROM Playlist WHERE id=?", 
            [req.params.id],
            (error, results, fields) => {

                if( error ){
                    res.json(error);
                }
                else if(results.length === 0 ){
                    res.status(404).json("invalid id");
                }
                else{
                    const output = results[0];
                    connection.query(
                        "DELETE FROM Playlist WHERE id=?", 
                        [req.params.id], 
                        (error, results, fields) => {
                            if( error ){
                                res.json(error);
                            }
                            else{
                                res.json(output);
                            }
                        }
                    )
                }

            }
        )
    }
);


module.exports = router;