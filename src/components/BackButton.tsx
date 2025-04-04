import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from "../assets/themes/colors";

export default function BackButton({onPress}: any){
  return (
    <TouchableOpacity style={styles.LineContainer} onPress={onPress}>
      <View style={{marginLeft: 20, marginRight: 6}}>
        <FontAwesome name="arrow-left" size={24} color={colors.light.blue} />
      </View>
      <Text style={{color: colors.light.black, marginLeft: 5, fontWeight: "700", fontSize: 18}}>Voltar</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  LineContainer: {
    width: '100%',
    height: 40,
    top: 45,
    borderRadius: 8,
    backgroundColor: colors.light.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '0.9%'
  }
});