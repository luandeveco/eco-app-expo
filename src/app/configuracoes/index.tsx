import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
  Modal,
  StyleSheet,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../../assets/themes/colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';

export default function Configuracoes() {
  const [contactSupport, setContactSupport] = useState(false);
  const router = useRouter();

  return (
    <View style={{flex: 1,justifyContent: 'center', marginHorizontal:'5%'}}>
    <ScrollView style={{marginTop: '15%'}}>
        <View style={styles.Container}>
        {/** Cabeçalho da tela: Botão de voltar e título */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            Configurações
            </Text>
        </View>
        {/** Opções */}
        {/** Opção da impressora */}
        <View>
            <Pressable
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '8%',
                borderBottomWidth: 1,
                paddingVertical: '5%',
                justifyContent: 'space-between',
            }}
            onPress={() => router.navigate('/impressora')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="printer" size={24} color={colors.light.blue} />
                <Text
                style={{
                    color: colors.light.black,
                    fontWeight: '500',
                    marginLeft: '3%',
                    fontSize: 18,
                }}>
                Impressora
                </Text>
            </View>
            <View>
                <AntDesign name="right" size={24} color={colors.light.black} />
            </View>
            </Pressable>
        </View>
        {/** Opção do Relatório */}
        <View>
        <Pressable
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '2%',
                borderBottomWidth: 1,
                paddingVertical: '5%',
                justifyContent: 'space-between',
            }}
            onPress={() => router.navigate('/relatorioConfig')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="pdffile1" size={24} color={colors.light.blue} />
                <Text
                style={{
                    color: colors.light.black,
                    fontWeight: '500',
                    marginLeft: '3%',
                    fontSize: 18,
                }}>
                Relatório
                </Text>
            </View>
            <View>
                <AntDesign name="right" size={24} color={colors.light.black} />
            </View>
            </Pressable>
        </View>
        {/** Opção do Aparência */}
        <View>
            <Pressable
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '2%',
                borderBottomWidth: 1,
                paddingVertical: '5%',
                justifyContent: 'space-between',
            }}
            onPress={() => router.navigate('/aparencia')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialCommunityIcons name="brush-variant" size={24} color={colors.light.blue} />
                <Text
                style={{
                    color: colors.light.black,
                    fontWeight: '500',
                    marginLeft: '3%',
                    fontSize: 18,
                }}>
                Aparência
                </Text>
            </View>
            <View>
                <AntDesign name="right" size={24} color={colors.light.black} />
            </View>
            </Pressable>
        </View>
        {/** Suporte */}
        <View>
            <Pressable
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '2%',
                borderBottomWidth: 1,
                paddingVertical: '5%',
                justifyContent: 'space-between',
            }}
            onPress={() => setContactSupport(true) }>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 name="whatsapp" size={24} color={colors.light.blue} />
                <Text
                    style={{
                        color: colors.light.black,
                        fontWeight: '500',
                        marginLeft: '3%',
                        fontSize: 18,
                    }}>
                Suporte
                </Text>
            </View>
            </Pressable>
        </View>
        {/** Logout */}
        <View>
            <Pressable
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '2%',
                borderBottomWidth: 1,
                paddingVertical: '5%',
                justifyContent: 'space-between',
            }}
            onPress={() => console.log('logout')}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <AntDesign name="logout" size={24} color={colors.light.red} />
                <Text
                style={{
                    color: colors.light.black,
                    fontWeight: '500',
                    marginLeft: '3%',
                    fontSize: 18,
                }}>
                Logout
                </Text>
            </View>
            </Pressable>
        </View>
        </View>
    </ScrollView>
    {/** Modal do contato do suporte */}
    <Modal animationType="none" transparent={true} visible={contactSupport}>
        <View style={styles.model}>
        <View style={styles.modelCenter}>
            <Text style={styles.TitleModel}>
            Você será direcionado para o Whatsapp
            </Text>
            <View style={styles.buttonOptions}>
            <Pressable
                style={styles.ButtonOptionsWhatsapp}
                onPress={() => console.log('whtas')}>
                <Text style={styles.textButtonModel}>Falar com suporte</Text>
            </Pressable>
            <Pressable
                style={styles.ButtonOptionscancel}
                onPress={() => setContactSupport(false)}>
                <Text style={styles.textButtonModel}>Cancelar</Text>
            </Pressable>
            </View>
        </View>
        </View>
    </Modal>
    </View>
  );
}

export const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
    text: {
      marginTop:'5%',
      color: colors.light.black,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      fontSize: 16,
    },
    containerSettings:{
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
    model: {
      flex:1,
      backgroundColor: colors.light.blue_07,
      alignItems: 'center',
      justifyContent:"center"
    },
    modelCenter: {
      backgroundColor: colors.light.white,
      padding: '5%',
      borderRadius: 8
    },
    TitleModel:{
      color: colors.light.black,
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOptions: {
      flexDirection: 'row',
      marginTop: '5%',
      justifyContent: 'space-between'
    },
    ButtonOptionsWhatsapp:{
      backgroundColor: colors.light.green,
      padding: '2%',
      borderRadius: 8
    },
    textButtonModel: {
      color: colors.light.white,
      fontWeight: '600',
      fontSize: 14,
    },
    ButtonOptionscancel:{
      backgroundColor: colors.light.blue,
      padding: '2%',
      borderRadius: 8
    },
  });