import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import { HomeScreen, AuthScreen, SettingScreen, LoaderScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, SIZES,icons } from './constants';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
    "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

  })
  
  if(!loaded){
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loader' screenOptions={{
                      statusBarHidden: true,
                      headerBackVisible: false,
                      headerStyle: {
                        backgroundColor: 'black'
                        
                      },
                      // headerTransparent: true, 
                      // headerSearchBarOptions: true,
                      
                      headerTintColor: COLORS.primary,
                      headerRight: ()=>{
                        <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Pressed")}
                            >
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                    }}
                                />
                            </TouchableOpacity>
                      }
                  }}>
        <Stack.Screen 
          name='Home'
          component={ HomeScreen }
          options={ { title: "Home",
          
        } }
          
        />
        <Stack.Screen 
          name='Auth'
          component={ AuthScreen }
          options={ { title: "AuthScreen",
         } }
        />
        <Stack.Screen 
          name='Setting'
          component={ SettingScreen }
          options={ { title: "SettingScreen",
        
        } }
        />
         <Stack.Screen 
          name='Loader'
          component={ LoaderScreen }
          options={ { 
            title: "Loader",
            headerShown: false   
        }}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  textInput: {
    width: 300,
    padding: 20, 
    backgroundColor: '#fff',
    marginLeft: 20,
    
  },
});
