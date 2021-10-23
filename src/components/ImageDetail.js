import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

//Images are stored in the 'assests' folder
//Below is the example to show images from local folder
//BUT you can display imagaes from a URL as well.
const ImageDetail = (props) => {
    //console.log(props);
    return (
        <View>
            <Image source={props.imageSource} />
            <Text>Name: {props.title} | Score: {props.imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;