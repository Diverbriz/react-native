import React, {useState, useEffect} from "react";

import { Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, images } from "../constants";
const Loader = ({navigation}) =>{
    const [count, setCount] = useState(3);
  useEffect(() => {

  const countTimer = setTimeout(()=> {
  navigation.navigate('Auth');
  }, 2000);    
  countTimer;    
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.secondary}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 100}}>
       
        <Image 
        resizeMode="contain"
        source={images.logo_orange}
        style={{
          width: 200
        }}
        />
        </View>
    </View>
  );
}

export default Loader