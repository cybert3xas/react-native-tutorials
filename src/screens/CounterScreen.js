import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//using reducer, you can look at the state one for state usage

COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
    //always return an object
        return {...state, counter: state.counter + action.payload};
};

const CounterScreen = () =>{
    //todo: fix this variable
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const {counter} = state;
    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    dispatch({type: 'increase_counter', payload: COUNTER_INCREMENT});
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({type: 'decrease_counter', payload: -1 * COUNTER_INCREMENT});  
                }}
            />
            <Text>Current Counter: {counter}</Text>

        </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;