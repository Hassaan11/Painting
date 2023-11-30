import React from 'react';
import {
  SafeAreaView,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import Painting from './screens/Painting/Painting';

const Stack = createStackNavigator();


const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: Platform.OS === 'android' && 30}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Painting" component={Painting} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
