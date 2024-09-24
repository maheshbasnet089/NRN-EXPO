

import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { InititalState, LoginUserData, Role, UserData } from './type'
import { Status } from '../type.global'
import api from '@/http'



const initialState:InititalState = {
   userData : {} as UserData, 
   token : null, 
   status : Status.Loading
}

const authSlice = createSlice({
    initialState : initialState, 
    name : "auth", 
    reducers : {
        setUser(state:InititalState,action:PayloadAction<UserData>){
            state.userData = action.payload
        }, 
        setStatus(state:InititalState,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

export const {setUser,setStatus} = authSlice.actions
export default authSlice.reducer

export function registerUser(data:UserData){
    return async function registerUserThunk(dispatch:any){
        try {
            const response = await api.post("/register",data)
            if(response.status === 200){
                setUser(response.data.data)
                setStatus(Status.Success)
            }else{
                setStatus(Status.Error)
            }
        } catch (error) {
            console.log(error)
            setStatus(Status.Error)
        }
    }
}

export function loginUser(data:LoginUserData){
    return async function loginUserThunk(dispatch:any){
        try {
            const response = await api.post("/login",data)
            if(response.status === 200){
                setUser(response.data.data)
                setStatus(Status.Success)
            }else{
                setStatus(Status.Error)
            }
        } catch (error) {
            console.log(error)
            setStatus(Status.Error)
        }
    }
}
