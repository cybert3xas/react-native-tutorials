import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

/*Never modify the variable directly, that's why you havve
the setCounter variable. useState() holds the default value

Here, every time setCounter is called, React will re-render 
the whole component. However, whatever value was given to setCounter
will be assigned to counter. This is how we're able to update
the state variable 'counter'*/ 

const CounterScreen = () =>{
    //todo: fix this variable
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    //we're calling the function and increasing
                    setCounter(counter + 1);
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    //we're calling the function and decreasing
                    setCounter(counter - 1);
                }}
            />
            <Text>Current Counter: {counter}</Text>

        </View>
    );
};

const style = StyleSheet.create({});

export default CounterScreen;