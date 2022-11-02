import {Request, Response} from 'express';
var express = require('express');
var router = express.Router();

var UserRotes = require('./UsersRoutes');

router.get("/", async (req:Request, res:Response)=>{
    res.status(200).json({msg:"Buenas"})
});

router.use("/Users", UserRotes);

module.exports = router;