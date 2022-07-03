import React from "react";
import { View, Text, Button } from "react-native"
  
const SettingScreen = ({navigation, route}) => {
    const homePress = () =>{
        console.log("SettingScreen")
    }
    const age = route.params.age
    console.log(age)
    return (
        <View style={{flex: 1,flexDirection: 'row',  width: '100%', backgroundColor: '#fff', justifyContent: 'space-around', paddingTop: 40}}>
            <View>
               <Text>Hi my name is {route.params.name} I'm {route.params.age} years old</Text>
                <Button title="Back" onPress={() => {
                    console.log("Back")
                }}/>
            </View>
        </View>
    )
} 

export default SettingScreen;