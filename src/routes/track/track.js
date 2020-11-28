"use strict"

const express = require("express");
const router = express.Router();
const trackServices = require("../../services/track/track");

router.get("/album/:album_id", async(req, res) => {
    try{
        let response = await trackServices.getTracksByAlbum(req.params.album_id);

        if(response[0] == null) return res.send({message: "Album não encontrado"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

module.exports = router;