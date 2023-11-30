import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Image,Text } from 'react-native';

const Painting = ({route}) => {
  console.log("route",route)  
  const [displayImage, setDisplayImage] = useState(false);
  const [location,setLocation] = useState({})
  const {paintingImage,backgroundImage} = route.params

  const handlePress = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    setLocation({  x: locationX, y: locationY });
    setDisplayImage(true)
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: backgroundImage }} style={styles.backgroundImage} resizeMode="cover">
        {displayImage && <Image source={{ uri: paintingImage }} style={{ ...styles.smallImage, left: location.x, top: location.y }} />}
        {!displayImage && <Text style={styles.text}>Select a Place where you want to hang the painting</Text>}
         <TouchableOpacity style={styles.touchable} onPress={handlePress}/>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    color:'white',
    textAlign:'center',
    fontSize:14,
    marginTop:20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  smallImage: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: 'transparent',
  },
  touchable: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Painting;
