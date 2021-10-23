import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//decunstruct the props since we only care about Color
//from Square Screen

/*Imagine that the onINcrease and onDecrease are callback functions
functions passed by reference by the Parent component SQUARESCREEN
So, when they're called. They're really calling the original function
that was created on SquareScreen. This will reload the 
Square Screen and all of it's children (this screen)*/ 
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                onPress={() => onIncrease()}
                title={`Increase ${color}`}
            />
            <Button 
                onPress={() => onDecrease()}
                title={`Decrease ${color}`} 
            />
        </View>
    );
};

const syles = StyleSheet.create({});

export default ColorCounter;
