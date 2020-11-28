"use strict"

const express = require("express");
const router = express.Router();
const albumServices = require("../../services/album/album");
const albumGenreRoutes = require("../albumGenre/albumGenre");
const artistRoutes = require("../artist/artist");

router.get("/", async(req, res) => {
    try{
        let response = await albumServices.getAlbums();

        if(response[0] == null) return res.send({message: "Nenhum album encontrado"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

router.get("/artist/:artist_id", async(req, res) => {
    try{
        let response = await albumServices.getAlbumsByArtist(req.params.artist_id);

        if(response[0] == null) return res.send({message: "Artista não encontrado"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

router.use("/albumGenre", albumGenreRoutes);

module.exports = router;