"use strict"

const express = require("express");
const router = express.Router();
const tokenVerify = require("../../middlewares/tokenVerify");
const purchaseServices = require("../../services/purchase/purchase");

router.post("/:trackId", tokenVerify, async(req, res) => {
    try{
        let response = await purchaseServices.createPurchase(req.userId, req.params.trackId);

        if(response == 0) return res.send({message: "Usuário inválido"});
        if(response == 1) return res.send({message: "Música não encontrada"});
        if(response == 2) return res.send({message: "Moedas insuficientes"});
        if(response == 3) return res.send({message: "Música já adquirida"});

        res.send({message: "Música adquirida"});
    }catch(err){
        res.send({err});
    }
});

router.get("/my-purchases", tokenVerify, async(req, res) => {
    try{
        let response = await purchaseServices.getPurchasesByUser(req.userId);

        if(response[0] == null) return res.send({message: "Você não possui compras"});

        res.send({response});
    }catch(err){
        res.send({err});
    }
});

module.exports = router;