"use strict"

const express = require("express");
const router = express.Router();
const userServices = require("../../services/user/user");
const jwt = require("jsonwebtoken");
const config = require("../../../config/globalConfig");
const coinsRoutes = require("../coins/coins");

router.get("/", async(req, res) => {
    res.send({message: "User's index"});
});

router.post("/signin", async(req, res) => {
    try{
        let response = await userServices.authUser(req.body.user_email, req.body.user_password);

        if(response == null) return res.send({auth: false, message: "Email e/ou senha incorretos"});

        let token = jwt.sign({userId: response.dataValues.id}, config.secret_key_token, {expiresIn: 3600});

        let user = await userServices.transformUser(response.dataValues, token);

        res.send({user, auth: true});
    }catch(err){
        res.send(err);
    }
});

router.post("/signup", async(req, res) => {
    try{
        let response = await userServices.createUser(
            req.body.user_name,
            req.body.user_email,
            req.body.user_password
        );

        if(response == 1) return res.send({message: "Email já cadastrado"});

        res.send({message: "Cadastrado com sucesso"});
    }catch(err){
        res.send({err});
    }
});

router.use("/coins", coinsRoutes);

module.exports = router;