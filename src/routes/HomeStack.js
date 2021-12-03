import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';;
import Icons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Messages from '../screens/Messages';
import Home from '../screens/Home';



const Tabs = createBottomTabNavigator();


const HomeStack = () => {
    return (
      <Tabs.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Feed') {
            iconName = focused
              ? 'home'
              :   "home-variant";
              
              return <Material name={iconName} size={size} color={color} />
          } else if (route.name === 'Messages') {
            iconName = focused ? 'message' : "message-bulleted";
            return <Material name={iconName} size={size} color={color} />;
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
          <Tabs.Screen name="Feed" 
          component={Home}
          options={{ headerShown: false }} />
          <Tabs.Screen name="Messages" 
          component={Messages} />
              <Tabs.Screen name="Schedule" 
          component={Messages} />
              <Tabs.Screen name="Settings" 
          component={Messages} />
      </Tabs.Navigator>
    )
}

export default HomeStack
