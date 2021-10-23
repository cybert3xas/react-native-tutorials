import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 30;

const SquareScreen = () => {
    /*THE STATES are extremly related and there are percise ways 
    to change these states. So, we can only reduce, increase a color
    so there are a total of 6 ways... hence, we can use a reducer.*/
    
    //Reducer -> FunctionThatManagesChangesTOAnObject
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, changeValue) => {
        //color=== 'red', 'green', 'blue'
        //changeValue === +15, -15

        switch(color){
            case 'red':
                red + changeValue > 255 || red + changeValue < 0 ? null : setRed(red + changeValue); 
                return;
            case 'green':
                green + changeValue > 255 || green + changeValue < 0 ? null : setGreen(green + changeValue); 
                return;
            case 'blue':
                blue + changeValue > 255 || blue + changeValue < 0 ? null : setBlue(blue + changeValue); 
                return;
            default:
                return;
        }
    };
    
    return (
        <View>
            <ColorCounter 
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                color="Red"/>
            <ColorCounter 
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
                color="Green"/> 
            <ColorCounter 
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                color="Blue"/>
            <View style={{ 
                height:150, 
                width: 150, 
                backgroundColor:`rgb(${red}, ${green}, ${blue})` 
            }}/>
        </View>
    );
};

const syles = StyleSheet.create({});

export default SquareScreen;
