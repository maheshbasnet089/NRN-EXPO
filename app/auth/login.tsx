
import { loginUser } from '@/store/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/store/auth/hooks'
import { Status } from '@/store/type.global'
import { useNavigation } from '@react-navigation/native'
import { Link } from 'expo-router'
import AsyncStorage from "@react-native-async-storage/async-storage"

import { useState } from 'react'
import {Alert, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'


function Login(){
  const {token} = useAppSelector((state)=>state.auth)
  const dispatch = useAppDispatch()
  const [data,setData] = useState<{
    email : string, 
    password : string
  }>({
    email : "", 
    password : ""
  })

  const handleChange = (name:string,value:string)=>{
      setData({
        ...data, 
        [name] : value
      })
  }

  const handleSubmit = async ()=>{
    const status = await dispatch(loginUser(data))
    if(status === Status.Success){
      Alert.alert("User logged !!","The user was logged in successfully",[
        {
          text : "Ok", 
          onPress : ()=>{
           AsyncStorage.setItem("token",token as string)
          }
        }
      ])
    }
  }
    return ( 
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View className="bg-white-300 h-full w-full flex justify-center items-center">
        {/***********************Title and form******************/}
        <View className="h-full w-full flex justify-around pt-10 pb-10">
          {/***************Title********************/}
          <View className="flex items-center mb-6">
            <Text className="text-green-600 font-bold tracking-wider text-4xl">Login</Text>
          </View>
          {/***************Form********************/}
          <View className="flex items-center mx-4 space-y-4">
            <View className="bg-gray-200 p-3 rounded-2xl w-full">
              <TextInput
                placeholder='Email'
                placeholderTextColor={'gray'}
                keyboardType='email-address'
                onChangeText={(text)=>handleChange('email',text)}
              />
            </View>
            <View className="bg-gray-200 p-3 rounded-2xl w-full">
              <TextInput
                placeholder='Password'
                placeholderTextColor={'gray'}
                secureTextEntry
                onChangeText={(text)=>handleChange('password',text)}
              />
            </View>
            <View className="w-full">
              <TouchableOpacity className="w-full bg-green-600 p-3 rounded-2xl mb-3" onPress={handleSubmit} >
                <Text className="text-xl font-bold text-white text-center">Login</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Text>Don't have an account?</Text>
             <Link href={
        {
          pathname :"/auth/register", 
          
        }
      }>
       
                <Text className="text-green-600 font-semibold"> Sign Up</Text>
              
             </Link>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    )
}

export default Login