import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DialPadScreen from './screens/DialPadScreen';
import CallHistoryScreen from './screens/CallHistoryScreen';
import ContactsScreen from './screens/ContactsScreen';
import AppContextProvider from './context/AppContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <AppContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                switch (route.name) {
                  case 'Dial Pad':
                    iconName = 'dialpad';
                    break;
                  case 'Call History':
                    iconName = 'history';
                    break;
                  case 'Contacts':
                    iconName = 'contacts';
                    break;
                  default:
                    iconName = 'help-circle';
                }

                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Dial Pad" component={DialPadScreen} />
            <Tab.Screen name="Call History" component={CallHistoryScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </AppContextProvider>
    </PaperProvider>
  );
}