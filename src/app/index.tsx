import React, {useState} from 'react';
import {Dimensions, Text, View, StyleSheet, Image, TextInput, Pressable} from 'react-native';
import Buttton from '../components/Button';
import colors from '../assets/themes/colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import ModalError from '../components/ModalError';


const {width, height} = Dimensions.get('screen');

export default function Login(){

  const router = useRouter()

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={{flex: 1,justifyContent: 'center',backgroundColor:colors.light.blue_back}}>
      <View style={styles.container}>
        <Image
            style={styles.logo}
            source={require('../assets/img/LogoEcoBranco.png')}
            alt="Logo da Eco Consultoria"
            resizeMode="contain"
        />
        <Text style={styles.textTitle}>Seja bem-vindo(a)!</Text>
        <View style={styles.iconTextContainer}>
            <FontAwesome5 name="user-circle" size={16} color={colors.light.white}/>
            <Text style={[styles.text, {marginLeft:8}]}>Código do usuário</Text>
        </View>
        <TextInput
          style={styles.inputArea}
        />
        <View style={styles.iconTextContainer}>
            <Feather name="lock" size={16} color={colors.light.white} />
            <Text style={[styles.text, {marginLeft:8}]}>Senha</Text>
        </View>
        <TextInput
          style={styles.inputArea}
        />
        <View>
            <Pressable
              onPress={() => router.navigate('/movimento')}
              style={styles.boxButton}
              >
              <Text style={styles.textBotton}>Entrar</Text>
            </Pressable>
            <View style={styles.containerVersion}>
              <Text style={styles.versionText}>V {'1.0.0'}</Text>
            </View>
        </View>
      </View>
      <ModalError
        Title={"modalError.Title"}
        Message={"modalError.Message"}
        status={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container:{
    height: 500,
    paddingHorizontal: 20,
    //justifyContent:'center',
    backgroundColor: colors.light.blue_05,
    marginHorizontal: '5%',
    borderRadius: 30,
    paddingVertical: 80
  },
  logo:{
    width: width * 0.45,
    height: height * 0.06,
    alignSelf: 'center',
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: width * 0.05,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 8,
    marginTop: width * 0.009,
  },
  
  text:{
    color: colors.light.white,
    fontFamily:'Inter-bold',
    marginTop: width * 0.002,
    fontSize:16
  },
  textTitle:{
    color: colors.light.white,
    fontFamily:'Inter-bold',
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    fontSize: 20,
    marginTop: width * 0.01,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
  },
    showPasswordButton: {
    position: 'absolute',
    right: 8,
    top: '30%',
    bottom: 0,
    justifyContent: 'center',
  },
  eyeIcon: {
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    tintColor: colors.light.white,
  },
  inputArea:{
    width: '100%',
    height: 43,
    marginTop: width * 0.003,
    backgroundColor: 'transparent',
    color: colors.light.white,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    borderBottomWidth: 1,
    borderRadius: 8,
    borderBottomColor: colors.light.white,
    paddingHorizontal: 8
  },
  boxButton:{
    width: '90%',
    height: width * 0.1,
    backgroundColor: colors.light.blue_07,
    borderColor: colors.light.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf: 'center',
    marginTop: width * 0.05,
    borderRadius: 10,
  },
  textBotton: {
    color: colors.light.white,
  },
  containerVersion: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: '3%'
  },
  versionText: {
    fontSize: 15,
    color: colors.light.white,
    fontWeight: '700',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  
});