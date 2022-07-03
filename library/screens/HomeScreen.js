import React, {useEffect, useState} from "react";
import { View, Text, Button, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal} from "react-native"
import { images,SIZES,COLORS,icons, FONTS } from "../constants";
import { auth, logout } from "../firebase";
import { BlurView } from "expo-blur";

  
const HomeScreen = ({navigation, route}) => {
    const [showAddToBagModal, setShowAddToBagModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [trending, setTrending] = useState([
        {
            id: 0,
            name: "Мастер и Маргарита",
            author: "М.А. Булгаков",
            img: images.dungeon,
            devider: images.devider,
            type: "FB2",
            price: "290р",
            size: "2.0 MB",
            bgcolor: "#212121",
            
        },
        {
            id: 1,
            name: "Голова профессора Доуэля",
            author: "А.Р. Беляев",
            img: images.head,
            devider: images.devider,
            type: "PDF",
            price: "320р",
            size: "2.0 MB",
            bgcolor: "#212121",
            
        },
        {
            id: 2,
            name: "Психология масс",
            author: "Гюстав Лебон",
            img: images.psyhology,
            devider: images.devider,
            type: "EPUB",
            price: "256р",
            size: "2.2 MB",
            bgcolor: "#212121",
            
        },
        {
            id: 3,
            name: "Москва Петушки",
            author: "В.В. Ерофеев",
            img: images.petushki,
            devider: images.devider,
            type: "FB2",
            price: "240р",
            size: "2.2 MB",
            bgcolor: "#212121",
            
        },
    ]);

    const [focus, setFocus] = useState(false)
    
    const homePress = () =>{
        console.log("Home")
    }

    function onAuthStateChanged(user) {
        if(!user){
            navigation.navigate("Auth")
        }
      }

    useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
   // unsubscribe on unmount
  }, []);

  function renderRecentlyViewed(item, index){
    return(
      <TouchableOpacity
      
      style = {{flex: 1, flexDirection: 'row', marginTop: 8,
      backgroundColor:COLORS.secondary,
      borderRadius: 10
    }}
      onPress = {() => {
        setSelectedItem(item)
        setShowAddToBagModal(true)
      }}
      >
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent:'center',
            paddingVertical: 9
           }}>
          <Image 
            source={item.img}
            resizeMode = 'contain'
            style = {{
              width: '82%',
              height: 200,
              marginLeft: 17
            }}
          /> 
        </View>
  
        <View style={{flex: 1.5, marginLeft: SIZES.radius, marginTop: 10}}>
            <Text style={{color: COLORS.white, ...FONTS.body2}}>{item.name}</Text>
            <Text style={{...FONTS.body3, color: COLORS.darkgray}}>{item.author}</Text>
            <Text style={{...FONTS.body3, color: COLORS.darkgray}}>{item.size}, {item.type}</Text>
           <Image 
                source={item.devider}
                resizeMode='contain'
                style={{
                    marginTop: 10,
                    height: 10,
                    width: '91%'
                }}
           />
           <View style={{
              flexDirection: 'row',
              width: '100%',
              height: 50,
              marginTop: 10,
              position: 'absolute',
              bottom: 10,
              paddingRight: 10,
              left: -6,
              backgroundColor: COLORS.secondary,
           }}>
            <TouchableOpacity 
            onPress={({item})=>{
              // setFocus
            }}
            onFocus={({item}) => {
              // setFocusBookmark(!focusBookmark)
            }}
            >
              <Image 
                source={icons.bookmark}
                resizeMode='contain'
                style={[styles.iconfirst_style, {marginRight: 15}]}
           />
            
            </TouchableOpacity>
           
            <TouchableOpacity
            >
            <Image 
                source={icons.star}
                resizeMode='contain'
                style={styles.icons_style}
           />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{
              // setFocusSearch(!focusSearch)
            }}
            >
            <Image 
                source={icons.search }
                resizeMode='contain'
                style={styles.icons_style}
           />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>{
              // setFocusSetting(!focusSettings)
            }}
            >
            <Image 
                source={icons.settings}
                resizeMode='contain'
                
                style={[styles.iconfirst_style,{marginLeft: 15}]}
           />
            </TouchableOpacity>
              
           
           
           
           </View>
        </View>
      </TouchableOpacity>
    )
  }
  

    return (
    <View style={{flex: 1,}}>
        <View style={[styles.container, {backgroundColor: 'black'}]}>
            <FlatList 
             contentInsetAdjustmentBehavior="automatic" 
            showsVerticalScrollIndicator = {false}
            data = {trending}
            keyExtractor = {item => item.id.toString()}
            renderItem={({item, index}) => renderRecentlyViewed(item, index)}
            />
        </View>
        {selectedItem && 
        <Modal 
        style={{width: 240, height: 240, backgroundColor: "#000"}}
        animationType='slide'
                    transparent={true}
                    visible={showAddToBagModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
        >
            <BlurView intensity={90} tint="dark" style={[styles.blurContainer, {flexDirection: 'column'}]}>
                <TouchableOpacity onPress={() => {
                    setShowAddToBagModal(false)
                    setSelectedItem(null)
                }}
                style={{
                    alignItems:'flex-end',
                }}
                >
                    <Image 
                        source={icons.close}
                        resizeMode='contain'
                        style={{
                            width: 50,
                            height: 50
                        }}
                    />
                </TouchableOpacity>
                <View style={{ backgroundColor: 'black', flexDirection: 'row'}}>
                    <Image 
                        source={selectedItem.img}
                        resizeMode='contain'
                        style={{
                            height: 160,
                            width: 100
                        }}
                    />
                    <View style={{flexDirection:'column'}}>
                      <Text style={{color: COLORS.white, ...FONTS.body2}}>{selectedItem.name}</Text>
                      <Text style={{...FONTS.body3, color: COLORS.darkgray}}>{selectedItem.author}</Text>
                      <Text style={{...FONTS.body3, color: COLORS.darkgray}}>{selectedItem.size}, {selectedItem.type}</Text>
                    </View>
                </View>
                <Text style={{...FONTS.h2, color: COLORS.lightGray2 }} >
                  Краткое описание
                </Text>
                
            </BlurView>
        </Modal>
        }
    </View>
    )
} 

const styles = StyleSheet.create({
    container: {
      flex: 0.91,
      
      
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    blurContainer: {
        flex: 1,
        padding: 20,
      },

    icons_style: {
        marginHorizontal: 20,            
        height: 25,
        width: 25   
    
    },
    iconfirst_style: {
             
      height: 25,
      width: 25 
    }  
  });
  

export default HomeScreen;