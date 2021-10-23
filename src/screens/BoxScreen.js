import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle}> 
            <Text style={styles.textOneStyle}></Text>
            <Text style={styles.textTwoStyle}></Text>
            <Text style={styles.textThreeStyle}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle: {
        borderWidth: 3, 
        borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    textTwoStyle: {
        borderWidth: 3, 
        borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'green',
        marginTop: 50
    },
    textThreeStyle: {
        borderWidth: 3, 
        borderColor: 'red',
        height: 50,
        width: 50,
        backgroundColor: 'blue'

    }
});

export default BoxScreen;