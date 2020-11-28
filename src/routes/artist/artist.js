"use strict"

const express = require("express");
const router = express.Router();
const artistServices = require("../../services/artist/artist");
const artistGenreRoutes = require("../artistGenre/artistGenre");

router.get("/", async(req, res) => {
    try{
        let response = await artistServices.getArtists();

        if(response[0] == null) return res.send({message: `Nenhum artista encontrado`});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

router.get("/:artist_id", async(req, res) => {
    try{
        let response = await artistServices.getArtistById(req.params.artist_id);

        if(response == null ) return res.send({message: "Artista não econtrado"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

router.use("/artistGenre", artistGenreRoutes);

module.exports = router;