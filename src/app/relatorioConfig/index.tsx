import React, {useState} from 'react';
import {
    View,
    Pressable,
    Text,
    ScrollView,
    StyleSheet,
    Switch
  } from 'react-native';
  import AccordionMenu from '../../components/AccordionMenu';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import colors from '../../assets/themes/colors';
  import { useRouter } from 'expo-router';

  export default function RelatorioConfig() {
    
    const router = useRouter()

    const [reciboResumido, setReciboResumido] = useState(false);
    const [montarRotaNova, setMontarRotaNova] = useState(false);
    const [montarRotaAntiga, setMontarRotaAntiga] = useState(false);

    const [assemblyNew, setAssemblyNew] = useState(false);
    const [assemblyOld, setAssemblyOld] = useState(false);

    function toggleSwich() {
      setReciboResumido(reciboResumido => !reciboResumido);
    }

    async function toggleSwitchNew() {
      setMontarRotaNova(montarRotaNova => !montarRotaNova)
    }
  
    async function toggleSwitchOld() {
      setMontarRotaAntiga(montarRotaAntiga => !montarRotaAntiga)
    }

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
                  Recibo
                </Text>
              </View>
            </View>
            {/** Opção de Recibo Resumido */}
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: '8%',
                  paddingVertical: '5%',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: colors.light.black,
                      fontWeight: '500',
                      marginLeft: '3%',
                      fontSize: 18,
                      paddingLeft: '5%',
                    }}>
                    Recibo Resumido
                  </Text>
                </View>
                <View style={styles.ContainerSwitch}>
                  <Switch
                    style={{height:24}}
                    trackColor={{false: colors.light.gray, true: colors.light.green_ligth}}
                    thumbColor={reciboResumido ? colors.light.green : colors.light.white}
                    onValueChange={setReciboResumido}
                    value={reciboResumido}
                    />       
                </View>
              </View>
            </View>
            {/** Opção de Montrar rota */}
            <AccordionMenu title="Montagem de Rota">
              <View
                style={{
                  backgroundColor: colors.light.gray_light,
                  marginTop: '-1%',
                }}>
                {/**Configuração 1 (Nova)*/}
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingTop: '5%',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: colors.light.black,
                          fontWeight: '500',
                          marginLeft: '3%',
                          fontSize: 14,
                          paddingLeft: '5%',
                        }}>
                        Montar Rota (Nova):
                      </Text>
                    </View>
                    <View style={styles.ContainerSwitch}>
                      <Switch
                        style={{height:24}}
                        trackColor={{false: colors.light.gray, true: colors.light.blue_cian}}
                        thumbColor={montarRotaNova ? colors.light.blue : colors.light.white}
                        onValueChange={setMontarRotaNova}
                        value={montarRotaNova}
                      />  
                    </View>
                  </View>
                </View>
                {/**Configuração 2 (Antiga)*/}
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: '5%',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          color: colors.light.black,
                          fontWeight: '500',
                          marginLeft: '3%',
                          fontSize: 14,
                          paddingLeft: '5%',
                        }}>
                        Montar Rota (Antiga):
                      </Text>
                    </View>
                    <View style={styles.ContainerSwitch}>
                      <Switch
                        style={{height:24}}
                        trackColor={{false: colors.light.gray, true: colors.light.blue_cian}}
                        thumbColor={montarRotaAntiga ? colors.light.blue : colors.light.white}
                        onValueChange={setMontarRotaAntiga}
                        value={montarRotaAntiga}
                      />  
                    </View>
                  </View>
                </View>
              </View>
            </AccordionMenu>
          </ScrollView>
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
      color: colors.light.white,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      fontSize: 13,
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
    ContainerSwitch:{
      flex: 1,
      justifyContent:'flex-end',
      alignItems:'flex-end',
      paddingRight: '5%'
    },
    Outter:{
      width:55,
      height:25,
      borderRadius: 18,
      alignItems:'center',
      flexDirection: 'row',
      padding: '2%'
    },
    Inner:{
      width: 17,
      height:17,
      backgroundColor: '#ffffff',
      borderRadius:15,
      elevation: 8,
      shadowOffset: {width: 0, height:0},
      shadowOpacity: 0.15,
      shadowRadius: 2,
    }
  });