"use strict"

const express = require("express");
const router = express.Router();
const userServices = require("../../services/user/user");
const tokenVerify = require("../../middlewares/tokenVerify");

router.put("/add", tokenVerify, async(req, res) => {
    try{
        let response = await userServices.addCoins(req.userId, req.body.new_coins);

        if(response == 0) return res.send({message: "Valor inválido"});
        if(response == 1) return res.send({message: "Não é possivel adicionar mais de 1000 moedas de uma vez"});
        if(response == 2) return res.send({message: "Usuário Inválido"});
        if(response == 3) return res.send({message: "Moedas adicionadas"});

    }catch(err){
        res.send({err});
    }
});

module.exports = router;