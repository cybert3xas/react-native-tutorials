import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

//PROPS has a bunch of configurations. You can print it
//in order to see what the configurations are.

//REMEBER: You can destruct the PROPS object. 
//So if I care only about the navigation property of PROPS
//I can just destruct and us naigaiton only. 
const HomeScreen = ({ navigation }) => {
  //console.log(props);

  return (
    <View>
      
      <Button 
        
        onPress={() => 
          navigation.navigate('Components')
        }
        title="Go to Components Demo"
      />
      <Button 
        onPress={() => 
          navigation.navigate('List')
        }
        title="Go to List Demo"
      />
      <Button 
        title="Go to Image Demo"
        onPress={() => 
          navigation.navigate('Image')
        }
      />
      <Button 
        title="Go to Counter Demo"
        onPress={() =>
          navigation.navigate('Counter')
        }
      />
      <Button 
        title="Go to Color Demo"
        onPress={() =>
          navigation.navigate('Color')
        }
      />
      <Button 
        title="Go to Square Demo"
        onPress={() => 
          navigation.navigate('Square')
        }
      />
      <Button 
        title="Go to Text Demo"
        onPress={() => 
          navigation.navigate('Text')
        }
      />
      <Button 
        title="Go to Box Demo Style"
        onPress={() => 
          navigation.navigate('Box')
        }
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
