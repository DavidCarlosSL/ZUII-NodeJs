"use strict"

const express = require("express");
const router = express.Router();
const library_albumServices = require("../../services/library_album/library_album");
const library_trackServices = require("../../services/library_track/library_track");
const tokenVerify = require("../../middlewares/tokenVerify");

router.get("/my-library", tokenVerify, async(req, res) => {
    try{
        let response = await library_albumServices.getAlbumsLibrary_album(req.userId);

        if(response[0] == null) return res.send({message: "Você não possui albuns comprados"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

router.get("/my-library/album/:albumId", tokenVerify, async(req, res) => {
    try{
        let response = await library_trackServices.getTracksLibrary_tracks(req.userId, req.params.albumId);

        if(response[0] == null) return res.send({message: "Você não possui músicas neste album"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

router.get("/my-library/track/", tokenVerify, async(req, res) => {
    try{
        let response = await library_trackServices.getTracksByLibrary(req.userId);

        if(response[0] == null) return res.send({message: "Você não possui músicas compradas"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

module.exports = router;