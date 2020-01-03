const express = require("express");
const parser = require("body-parser");
const router = express.Router();
const connection = require("../config");

router.use(parser.json());
router.use(parser.urlencoded({
    extended:true
}));

router.post(
    "/Track", 
    (req, res) => {
        const formData= req.body
        connection.query(
            "INSERT INTO Track SET ?", 
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
    "/Track/:id", 
    (req, res) => {
        connection.query(
            "UPDATE Track SET date=?, pdf_id=?, type=? WHERE id=?", 
            [
                req.body.playlist_id, 
                req.body.title, 
                req.body.artist,
                req.body.album_picture,
                Vreq.body.youtube_url,
                req.params.id
            ], 
            (error, results, fields) => {
                if( error ){
                    res.json(error);
                }
                else{

                    connection.query(
                        "SELECT * FROM Track WHERE id=?", 
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
    "/Track", 
    (req,res) => {
        connection.query(
            "SELECT * FROM Track",  
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
    "/Track/:id", 
    (req,res) => {
        connection.query(
            "SELECT * FROM Track WHERE id=?", 
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
    "/Track/:id", 
    (req, res) => {
        connection.query(
            "SELECT * FROM Track WHERE id=?", 
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
                        "DELETE FROM Track WHERE id=?", 
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