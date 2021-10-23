import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

//TextInput does not have any type of style
//You can remove autocorrect, and all that stuff 
//FOR THIS PROJECT we don't want AutoCorrect
//ex: Email, name, etc
const TextScreen = () => {
    //name is the variable that will be in the 'value' property
    //of the TextInput. 
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput 
                style={style.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is: {name}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 8
    }
});

export default TextScreen; 