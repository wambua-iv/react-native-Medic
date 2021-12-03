import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { BtnWithoutBackground } from '../UI/CustomButton';

const Auth = () => {
    const [isLogin, setLogin] = useState(true)
    return (
       isLogin ? (
           <View style = {styles.wrapper}>
               <Text>Sign in</Text>
               <TextInput
                placeholder='Email'
               />
               <TextInput 
                placeholder='password'
               />
               <View style = {styles.btnDisplay}>  
                    <Text>Not yet a registered user?  </Text>
                    <BtnWithoutBackground>Sign up</BtnWithoutBackground>
               </View>
               
           </View>
       ) : (
           <View>
               <Text>Sign Up</Text>
               <TextInput />
               <TextInput />
               <TextInput />
              <View style = {styles.btnDisplay}>
                  <Text>Already a registered user</Text>
                  <BtnWithoutBackground>Sign in</BtnWithoutBackground>
                </View> 
           </View>
       )
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnDisplay: {
        display: 'flex',
        flexDirection: 'row'
    }
})
export default Auth
