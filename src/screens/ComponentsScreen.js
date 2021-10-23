import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name  = "Jonathan Argumedo";
    return (
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={styles.textStyleTwo}>Hello my name is {name}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    textStyleTwo:{
        fontSize:20
    }
});

export default ComponentsScreen;