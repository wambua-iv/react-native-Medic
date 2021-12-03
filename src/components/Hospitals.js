import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import hospitals from '../hospitals.json';
import Stethoscope from '../../images/stethoscope.png';

const Hospitals = ({navigate}) => {
    return (
        <View style = {styles.wrapper}>
            <Text style = {{fontSize: 34, fontWeight: '600', color: 'black'}}> Affliated Hospitals</Text>
            <View style = {styles.flex}>
            {hospitals.map(hospital =>(
            <TouchableOpacity  onPress={() => navigate.push(`${hospital.name}`)}>
                <View style = {styles.card} key={hospital.name}>
                    <Image source={Stethoscope}  style = {styles.img}/>
                    <View style = {styles.grid}>
                    <Text style = {{fontSize: 22}}>{hospital.name}</Text>
                    <Text style = {{fontSize: 18}}>Location: {hospital.Location}</Text>
                    <View style ={{display: 'flex', flexDirection: 'row'}}><Icon color='yellow' size ={16} name='star'/><Text>{hospital.rating}</Text></View>
                    </View>
                </View>
            </TouchableOpacity>
            ))}
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    wrapper: {
        display : 'flex'
    },
    grid : {
        marginLeft: 15,
        lineHeight: 2,
    },
    img: {
        width: 60,
        height: 60,
        marginRight: 15,
        marginTop: 24,
        marginBottom: 32
    },
    card: {
        width: 195,
        height: 220,
        display: 'flex',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#9997',
        borderRadius: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginRight:10
    }
})
export default Hospitals
