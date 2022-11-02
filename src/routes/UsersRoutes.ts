import {Request, Response} from 'express';
var express = require('express');
var router = express.Router();


const UsersC = require('../controllers/UsersController');


router.get("/", async (req:Request, res:Response)=>{
    return res.status(200).json({msg:"Users"})
});

router.post("/Create", UsersC.Create);

router.get("/GetAll", UsersC.GetAll);
    
router.get("/GetById", UsersC.GetById);

router.get("/GetByEmail", UsersC.GetByEmail);

router.put("/ChangePassword", UsersC.ChangePassword);

router.put("/RestorePassword", UsersC.RestorePassword);

router.put("/UpdateImage", UsersC.UpdateImage);

router.delete("/Drop", UsersC.Drop);

module.exports = router;