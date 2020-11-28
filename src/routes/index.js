"use strict"

const express = require("express");
const router = express.Router();
const userRoutes = require("./user/user");
const albumRoutes = require("./album/album");
const artistRoutes = require("./artist/artist");
const purchaseRoutes = require("./purchase/purchase");
const libraryRoutes = require("./library/library");
const trackRoutes = require("./track/track");

router.get("/", (req, res) => {
    res.send({messsage: "API's Index"});
})

router.use("/user", userRoutes);

router.use("/album", albumRoutes);

router.use("/artist", artistRoutes);

router.use("/purchase", purchaseRoutes);

router.use("/library", libraryRoutes);

router.use("/track", trackRoutes);

module.exports = router;