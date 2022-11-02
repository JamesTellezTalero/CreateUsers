import {PgConnect} from '../libs/postgres';
import { UserRequest } from '../models/User';
import md5 from 'crypto-js/md5';
const generator = require('generate-password');
let pgConnect = new PgConnect();

export class UsersBusiness{
    async Create(user:UserRequest){
        let client = await pgConnect.connect();
        try {
            user.pwd = md5(user.pwd).toString().toUpperCase();
            console.log(user.pwd);
            let query = 'INSERT INTO users (name, lastname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING * ';
            let values = [user.name, user.lastname, user.email, user.pwd];
            const res = await client.query(query, values)
            console.log(res.rows);
            return res.rows;
        } catch (err) {
            console.log(err);
            throw err;
        } finally {
            client.release()
        }
    }

    async GetAll(){
        let client = await pgConnect.connect();
        try {
            const res = await client.query('SELECT * FROM users ');
            console.log(res.rows)
            return res.rows;
        } catch (err) {
            console.log(err)
        } finally {
            client.release()
        }
    }
    
    async GetById(id:string){
        let client = await pgConnect.connect();
        try {
            const res = await client.query('SELECT * FROM users WHERE users.id = $1', [id]);
            return res.rows[0];
        } catch (err) {
            console.log(err)
            throw err;
        } finally {
            client.release()
        }
    }
    
    async GetByEmail(email:string){
        let client = await pgConnect.connect();
        try {
            const res = await client.query('SELECT * FROM users WHERE users.email = $1', [email]);
            return res.rows[0];
        } catch (err) {
            console.log(err)
            throw err;
        } finally {
            client.release()
        }
    }
    
    async ChangePassword(user:UserRequest, newPass:string, oldPass:string){
        let client = await pgConnect.connect();
        try {
            if(user.pwd != oldPass){
                throw "La contraseña enviada no coincide con la actual";
            }
            user.pwd = newPass;
            const res = await client.query('UPDATE users SET "pwd" = $1  WHERE "id" = $2 RETURNING * ', [user.pwd, user.id]);
            return res.rows[0];
        } catch (err) {
            console.log(err)
            throw err;
        } finally {
            client.release()
        }
    }
    
    async RestorePassword(user:UserRequest){
        let client = await pgConnect.connect();
        try {
            let password = generator.generate({
                length: 10,
                numbers: true
            });
            user.pwd = md5(password).toString().toUpperCase();
            const res = await client.query('UPDATE users SET "pwd" = $1  WHERE "id" = $2 RETURNING * ', [user.pwd, user.id]);
            return res.rows[0];
        } catch (err) {
            console.log(err)
            throw err;
        } finally {
            client.release()
        }
    }
    
    async UpdateImage(){
    }
    
    async Drop(){
    }
}
