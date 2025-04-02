import React, { useEffect, useState } from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  useColorScheme,
  StyleSheet
} from 'react-native';
import { useRouter } from 'expo-router';
import colors from '../../assets/themes/colors';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function Aparencia() {
    
  const router = useRouter()

  return (
      <View style={{flex: 1, marginHorizontal:'5%'}}>
        {/** Cabeçalho da tela: Botão de voltar e título */}
        <View style={styles.Container}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '15%',
            }}>
            <Pressable
            style={styles.LineContainer}
            onPress={() => router.back()}>
            <View style={styles.button}>
            <AntDesign name="left" size={24} color={colors.light.blue} />
                <Text
                style={{
                    color: colors.light.blue,
                    marginLeft: 5,
                    fontWeight: '700',
                    fontSize: 18,
                }}>
                Voltar
                </Text>
            </View>
            </Pressable>
            <Text
              style={{
                color: colors.light.black,
                fontWeight: '700',
                fontSize: 18,
                marginLeft: '15%',
              }}>
              Aparência
            </Text>
          </View>
        </View>
        {/** Opções */}
        <View style={{marginTop: '5%', paddingHorizontal: '5%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '25%'
            }}>
            <Text style={styles.text}>Tela de Recibo</Text>
            {/* <View style={{flexDirection: 'row', alignItems: 'center', borderColor: colors.light.white, borderWidth: 1, borderRadius: 5, width: '30%', height: '90%', justifyContent: 'space-between'}}>
              <Pressable onPress={decreaseFontSize} style={{backgroundColor: colors.light.white, width: '30%', height: '100%',alignItems: 'center', justifyContent: 'center' ,borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>
                <Text style={{color: isDarkMode ? colors.light.black : colors.light.black, fontSize: 24}}>-</Text>
              </Pressable>
              <Text style={{color: colors.light.black, fontWeight: '700'}}>{fontSize}</Text>
              <Pressable onPress={increaseFontSize} style={{backgroundColor: colors.light.white, width: '30%', height: '100%',alignItems: 'center', justifyContent: 'center' ,borderTopRightRadius: 5, borderBottomRightRadius: 5}}>
                <Text style={{color: isDarkMode ? colors.light.black : colors.light.black, fontSize: 18}}>+</Text>
              </Pressable>
            </View> */}
          </View>
        </View>
      </View>
  );
}

export const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    containerPrinters:{
      paddingHorizontal: '5%',
    },
      LineContainer: {
      width: '28%',
      height: 40,
      borderRadius: 8,
      backgroundColor: colors.light.white,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      borderColor: colors.light.blue,
      borderWidth: 1,
    },
      LineContainerButton: {
      width: '28%',
      height: 40,
      borderRadius: 8,
      backgroundColor: colors.light.blue,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      borderColor: colors.light.blue,
      borderWidth: 1,
    },
    Container: {
      paddingHorizontal: "5%"
  
    },
    button:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    Title: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    text: {
      color: colors.light.black,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      fontSize: 18,
      justifyContent: 'center'
    },
  });
  