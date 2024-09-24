import { Status } from "../type.global"


export enum Role{
    Customer = 'customer',
    Seller = 'seller'
}

export interface UserData{
    email : string,  
    role : Role, 
    password : string, 
    firstName : string, 
    lastName : string, 
    address : string
}

export interface InititalState{
    userData : UserData , 
    token : string | null, 
    status : Status
}

export interface LoginUserData{
    email : string, 
    password : string
}