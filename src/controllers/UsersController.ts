import {Request, Response} from 'express';
import { UsersBusiness } from '../business/UsersBusiness';
import { UserRequest } from '../models/User';

let UsersB = new UsersBusiness();

class UsersController{
    async Create(req:Request, res:Response){
        try {
            let user:UserRequest = req.body.user;
            if(!user){
                throw "Wrong User";
            }
            let data = await UsersB.Create(user);
            return res.status(200).json({msg:"Create", data});
        } catch (error) {
            console.log(error);
            return res.status(404).json({msg:"Createn´t", data: error});
        }
    }
    
    async GetAll(req:Request, res:Response){
        let data = await UsersB.GetAll();
        return res.status(200).json({msg:"GetAll", data});
    }
    
    async GetById(req:Request, res:Response){
        let id = req.query.id;
        console.log("GetById");
        let data = await UsersB.GetById(`${id}`);
        return res.status(200).json({msg:"GetById", data});
    }
    
    async GetByEmail(req:Request, res:Response){
        let email = req.query.email;
        console.log("GetByEmail");
        let data = await UsersB.GetByEmail(`${email}`);
        return res.status(200).json({msg:"GetByEmail",data});
    }
    
    async ChangePassword(req:Request, res:Response){
        console.log("ChangePassword");
        return res.status(200).json({msg:"ChangePassword"});
    }
    
    async RestorePassword(req:Request, res:Response){
        console.log("RestorePassword");
        return res.status(200).json({msg:"RestorePassword"});
    }
    
    async UpdateImage(req:Request, res:Response){
        console.log("UpdateImage");
        return res.status(200).json({msg:"UpdateImage"});
    }
    
    async Drop(req:Request, res:Response){
        console.log("Drop");
        return res.status(200).json({msg:"Drop"});
    }
}

module.exports = new UsersController();