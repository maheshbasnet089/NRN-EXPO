import { registerUser } from '@/store/auth/authSlice'
import { useAppDispatch, useAppSelector } from '@/store/auth/hooks'
import { Role, UserData } from '@/store/auth/type'
import { Status } from '@/store/type.global'
import { Link } from 'expo-router'
import { useEffect, useState } from 'react'
import {Alert, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

function Register(){
  const dispatch = useAppDispatch()

  const {status} = useAppSelector((state)=>state.auth)
  const [data,setData] = useState<UserData>({
    firstName : "", 
    lastName : "", 
    address : "", 
    email : "", 
    password : ""
  })
  const [role,setRole] = useState<Role>(Role.Consumer)
  console.log(role)
  const handleChange = (name:string,value:string)=>{
    setData({
      ...data,
      [name] : value
    })
  }
  const handleSubmit = async ()=>{
    const dataWithRole = {
      ...data, 
      role 
    }
   const statuss  =  await dispatch(registerUser(dataWithRole))
   if(statuss === Status.Success){
    Alert.alert("User registered !!","The user was registered successfully",[
      {
        text : "Ok", 
        onPress : ()=>{
          console.log("Logged IN go")
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
              <Text className="text-green-600 font-bold tracking-wider text-4xl">Welcome</Text>
            </View>
            {/***************Form********************/}
            <View className="flex items-center mx-4 space-y-4">
              <View className="bg-gray-200 p-3 rounded-2xl w-full">
                <TextInput
                  placeholder='First Name'
                  placeholderTextColor={'gray'}
                onChangeText={(text)=>handleChange('firstName', text)}
    
                />
              </View>
              <View className="bg-gray-200 p-3 rounded-2xl w-full">
                <TextInput
                  placeholder='Last Name'
                  placeholderTextColor={'gray'}
    onChangeText={(text)=>handleChange('lastName', text)}
           
                />
              </View>
              <View className="bg-gray-200 p-3 rounded-2xl w-full">
                <TextInput
                  placeholder='Email'
                  placeholderTextColor={'gray'}
                  onChangeText={(text)=>handleChange('email', text)}
    
                />
              </View>
              <View className="bg-gray-200 p-3 rounded-2xl w-full">
                <TextInput
                  placeholder='Address'
                  placeholderTextColor={'gray'}
                  onChangeText={(text)=>handleChange('address', text)}
    
                />
              </View>
              <View className="bg-gray-200 p-3 rounded-2xl w-full">
                <TextInput
                  placeholder='Password'
                  placeholderTextColor={'gray'}
                  secureTextEntry
                  onChangeText={(text)=>handleChange('password', text)}
    
                />
              </View>
              <View className="flex flex-row items-center justify-between w-full">
                <Text className="font-semibold">Choose your role</Text>
                <View className="flex flex-row space-x-4">
                  <TouchableOpacity
                    className={`p-2 rounded-md ${role === Role.Seller ? 'bg-green-400' : 'bg-white'}`}
                    onPress={()=>setRole(Role.Seller)}
                  >
                    <Text className="font-semibold">Seller</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className={`p-2 rounded-md ${role === Role.Consumer ? 'bg-green-400' : 'bg-white'}`}
                    onPress={()=>setRole(Role.Consumer)}
                  >
                    <Text className="font-semibold">Consumer</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="w-full">
                <TouchableOpacity className="w-full bg-green-600 p-3 rounded-2xl mb-3" 
                  onPress={handleSubmit}
                >
                  <Text className="text-xl font-bold text-white text-center">Create Account</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-center">
                <Text>Already have an account?</Text>
                <Link href={
        {
          pathname :"/auth/login", 
          
        }
      }>
       
                <Text className="text-green-600 font-semibold"> Sign In</Text>
              
             </Link>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
}

export default Register