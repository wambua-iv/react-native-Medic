import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

const CovidHelp = () => {
    return (
        <View style = {styles.wrapping}>
            <Text style = {styles.title}>Covid Help</Text>
            <View style = {styles.btns}>
               
                <TouchableOpacity style = {styles.btn1}>
                    <Text style = {styles.text}> Schedule Vaccination</Text> 
                </TouchableOpacity>
                <TouchableOpacity style = {styles.btn2}>
                    <Text style = {styles.text}> Book Covid test</Text> 
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    wrapping: {
        margin: 10
    },
    title: {
        fontSize: 28,
        fontWeight: "400"
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16
    },
    btn1: {
        width: 195,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#e9e9e9'
    },
    btn2: {
        width: 195,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#0c4174a1'
    }, 
    text:{
        textAlign: 'center',
        paddingTop: 14,
        fontSize: 16,
        color : 'black',
        fontWeight: '400'
    }
})

export default CovidHelp
