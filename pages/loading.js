import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default function Loading() {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.Image}
        source={require('../assets/logo_opaq.png')}
      />
      <Text style={Styles.text}>Loading</Text>
    </View>
  );
}
export const Styles = StyleSheet.create({
    
    container:{
        // height: 100,
        flex:1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    
    text:{
        textAlign: 'center',
        fontWeight: 'bold',        
    }
   
})