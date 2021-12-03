import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";
import IconMale from '../../images/icon-male.png'


const Header = ({userName}) => {
    return (
        <View style = {styles.header}>
            <Text style = {styles.user}>{userName}</Text>
           <Image source={IconMale} style = {styles.img} />
        </View>
    )
        
}

const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 15
    },
    user: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 10
    },
    img: {
        width: 50,
        height: 50,
    }
})

export default Header
