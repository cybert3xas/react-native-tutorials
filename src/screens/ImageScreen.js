import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

/*ImageDetail takes two arguments. These two arguments
are called WHATEVER you want since we're the creators
of such props and component.*/

//NOTE: We always pass PROPS from PARENT (Image Screen) to 
//CHILD (Image Detail)
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')}
                imageScore="8" 
            />
            <ImageDetail 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')}
                imageScore="10" 
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
                imageScore="9"
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;