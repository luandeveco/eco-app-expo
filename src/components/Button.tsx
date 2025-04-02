import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import colors from '../assets/themes/colors';


const Buttton = () => {
  return (
    <Pressable style={styles.container} onPress={() => console.log('button')}>
      <Text style={styles.text} >{'text'}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.light.blue,
    width:100,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8
  },
  text:{
    color: colors.light.white,
    fontSize: 20,
  }
  
});


export default Buttton;