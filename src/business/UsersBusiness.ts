import {PgConnect} from '../libs/postgres';
import { UserRequest } from '../models/User';
let pgConnect = new PgConnect();

export class UsersBusiness{
    async Create(user:UserRequest){
        let client = await pgConnect.connect();
        try {
            let query = 'INSERT INTO users (name, lastname, email, pwd) VALUES ($1, $2, $3, $4) RETURNING * ';
            let values = [user.name, user.lastname, user.email, user.pwd];
            const res = await client.query(query, values)
            console.log(res);
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
            console.log(res.rows)
            return res.rows;
        } catch (err) {
            console.log(err)
        } finally {
            client.release()
        }
    }
    
    async GetByEmail(email:string){
        let client = await pgConnect.connect();
        try {
            const res = await client.query('SELECT * FROM users WHERE users.email = $1', [email]);
            console.log(res.rows)
            return res.rows;
        } catch (err) {
            console.log(err)
        } finally {
            client.release()
        }
    }
    
    async ChangePassword(){
    }
    
    async RestorePassword(){
    }
    
    async UpdateImage(){
    }
    
    async Drop(){
    }
}
