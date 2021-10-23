import  React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    const friends = [
        {name: 'Friend #1', age: 21},
        {name: 'Friend #2', age: 22},
        {name: 'Friend #3', age: 23},
        {name: 'Friend #4', age: 24},
        {name: 'Friend #5', age: 25},
        {name: 'Friend #6', age: 26},
        {name: 'Friend #7', age: 27},
        {name: 'Friend #8', age: 28},
        {name: 'Friend #9', age: 29},
    ];

    //The keyExtractor takes the whole object, you can use a UNIQUE identifier to return as a key.
    //keyExtractor and renderItem are very similar in a way. 
    return (
            <FlatList 
            
            showsHorizontalScrollIndicator={false}
                keyExtractor ={(friend) => friend.name}
                data={friends}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Text>Name: {item.name}</Text>
                            <Text style={styles.textStyle}>Age: {item.age}</Text>
                        </View>
                        

                    );

                }}
            />
        
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginBottom: 10
    }
});

export default ListScreen;