"use strict"

const express = require("express");
const router = express.Router();
const artistServices = require("../../services/artist/artist");

router.get("/:genreName", async(req, res) => {
    try{
        let response = await artistServices.getArtistsByGenre(req.params.genreName);

        if(response[0] == null) return res.send({message: `Nenhum artista encontrado no gênero ${req.params.genreName}`});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

module.exports = router;