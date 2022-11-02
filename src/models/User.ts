import { jsonMember, jsonObject, TypedJSON } from "typedjson";

@jsonObject
export class UserRequest {
    @jsonMember
    id?:number;
    @jsonMember
    name: string;
    @jsonMember
    lastname: string;
    @jsonMember
    email: string;
    @jsonMember
    pwd: string; 
}
