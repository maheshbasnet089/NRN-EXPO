import { Status } from "../type.global"


export enum Role{
    Customer = 'customer',
    Seller = 'seller'
}

export interface UserData{
    email : string, 
    username : string, 
    phoneNumber : string, 
    role : Role, 
    password : string
}

export interface InititalState{
    userData : UserData , 
    token : string | null, 
    status : Status
}