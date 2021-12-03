import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import Auth from './src/screens/Auth';

function App() {
  const user = true
  return (
    <NavigationContainer>
      {user ? (<Routes />) : (<Auth />)}
    </NavigationContainer>
   
  );
}

export default App
