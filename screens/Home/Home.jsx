import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

const Home = () => {
  const navigation = useNavigation();
  const focused = useIsFocused()
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [paintingImage, setPaintingImage] = useState(null);

  const selectBackgroundImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.warn('User cancelled photo picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        setBackgroundImage(response.assets[0].uri);
      }
    });
  };
  const selectSmallImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.warn('User cancelled photo picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        setPaintingImage(response.assets[0].uri);
      }
    });
  };

  useEffect(() => {
      setBackgroundImage(null)
      setPaintingImage(null)
  }, [focused])

  return (
    <View style={styles.container}>
      {backgroundImage &&
        paintingImage &&
        navigation.navigate('Painting', {
          backgroundImage: backgroundImage,
          paintingImage: paintingImage,
        })}
      <TouchableOpacity
        style={styles.backgroundButton}
        onPress={selectBackgroundImage}>
        <Text style={{color: 'white'}}>Select Background Image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.smallImageButton}
        onPress={() => {
          setTimeout(() => {
            selectSmallImage();
          }, 1000);
        }}>
        <Text style={{color: 'white'}}>Select Painting Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  smallImageButton: {
    marginTop: 40,
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default Home;
