import React from 'react';
import { ScrollView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CovidHelp from '../components/CovidHelp';
import Hospitals from '../components/Hospitals';

const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}) => {
  return (
      <ScrollView>
        <Header userName='Messy Wambua'/>
        <Hero />
        <CovidHelp />
        <Hospitals navigate = {navigation}/>
      </ScrollView>
  )
}

const Home = () =>(
  <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" 
            component={HomeScreen} 
            options={{ headerShown: false }}/>
  </Stack.Navigator>
)

export default Home
