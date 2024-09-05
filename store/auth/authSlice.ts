

import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import { InititalState, Role, UserData } from './type'
import { Status } from '../type.global'
import axios from 'axios'


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
        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer

function registerUser(data:UserData){
    return async function registerUserThunk(dispatch){
        try {
            const response = await axios.post("")
            if(response.status === 200){
                setUser(response.data.data)
            }
        } catch (error) {
            
        }
    }
}