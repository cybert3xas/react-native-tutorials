import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';
//COMMUNITY CONVENTION
//type: the type of operation you want to do 'change_red'
//payload: the amount you want to change
//so colorToChange == type, amount == payload

const COLOR_INCREMENT = 30;

 //state is the stae object {red:, green:, blue}
 //action is the action you're going to do. Object that tell me
 //how to change the state object.
const reducer = (state, action) => {
    //state === {red: 0, green: 0, blue:0}
    //action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 } 

    switch(action.type){
        case 'change_red':
            //remeber you never change value of the object directly
            //you want to rebuilt the object from scratch
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : {...state, blue: state.blue + action.payload};
        default:
            state;
    }
    //no matter what we always return an boject, in teh default
    //we return the same objec tbut we still return an object.
};

const SquareScreen = () => {
    //state here is the {red:, grren:, blue} object
    //dispatch is the a function that will call the reducer function
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    //destructuring the object
    const {red, green, blue} = state; 
    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
                color="Red"/>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
                color="Green"/> 
            <ColorCounter 
            onIncrease={() => dispatch({ type: 'change_blue',payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: 'change_blue',payload: -1 * COLOR_INCREMENT })}
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
