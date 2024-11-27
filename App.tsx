// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';

// Define the screen components
const HomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

const DetailsScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Details Screen</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

const SettingScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Settings Screen</Text>
      <Button title="Go to profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const ProfileScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View>
      <Text>This is the Profile Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

// Create a Stack Navigator
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
