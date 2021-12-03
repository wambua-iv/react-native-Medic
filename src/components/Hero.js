import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import blueBg from '../../images/blueBg.png';
import whiteBg from '../../images/whiteBg.jpeg'
import Icon  from 'react-native-vector-icons/FontAwesome';

const Hero = () => {
    return (
      <View style ={styles.hero}>
            <ImageBackground source={blueBg} style = {styles.img} >
                    <View style = {styles.iconWrapping}>
                        <Icon name = 'plus' color= 'blue' size = {30} />
                    </View>
                    <View style = {styles.textStyling}>  
                        <Text > Clinic Visit</Text>
                        <Text>Make an appointment</Text>
                    </View>
            </ImageBackground>
          <ImageBackground source={whiteBg} style = {styles.img} >
          <View style = {styles.iconWrapping}>
                <Icon name = 'home' color = 'blue' size = {30}  />
        </View>
            <View style = {styles.textStyling}>  
                        <Text style = {{color: 'black'}}> Home Visit</Text>
                        <Text style = {{color: 'black'}}>Call the doctor home</Text>
            </View>
          </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    hero: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginLeft: 10, 
    },
    wrapping: {
        borderRadius: 45,
        height: 50
    },
    img: {
        width: 195,
        height : 150,
        borderRadius: 15,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    iconWrapping: {
        width: 50,
        height: 50,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyling:{
        margin: 16
    }
})
export default Hero
