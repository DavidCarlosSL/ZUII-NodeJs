"use strict"

const express = require("express");
const router = express.Router();
const albumServices = require("../../services/album/album");

router.get("/:genreName", async(req, res) => {
    try{
        let response = await albumServices.getAlbumsByGenre(req.params.genreName);

        if(response[0] == null) return res.send({message: `Nenhum album encontrado no gênero ${req.params.genreName}`});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

module.exports = router;