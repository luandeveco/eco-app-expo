import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Pressable,
} from 'react-native';
import colors from '../../assets/themes/colors';
import { useRouter } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Impressora() {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [printers, setPrinters] = useState([
    {
      inner_mac_address : '10920',
      device_name: 'EXBOM - Printer'
    }
  ])

  async function Print(mac_address: string, device_name: string){
    console.log(mac_address, device_name)
  }

  return (
       <View style={{flex: 1,justifyContent: 'center', marginHorizontal:'5%'}}>
        <View style={styles.Container}>
          {/** Cabeçalho da tela: Botão de voltar e título */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            style={({pressed}) => [styles.LineContainer, {opacity: pressed ? 0.5 : 1 }]}
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
              Impressoras
            </Text>
          </View>
        </View>
        {/** Botão de ação */}
        <View style={{marginRight: '5%'}}>
          <View style={{marginVertical: '4%', alignItems: 'flex-end'}}>
            <Pressable
              style={({pressed}) => [styles.LineContainerButton, {opacity: pressed ? 0.5 : 1 }]}
              onPress={() => setModal(true)}>
              <Text style={styles.text}>Cadastrar</Text>
            </Pressable>
          </View>
          <FlatList
            style={{width: '100%', height: '70%'}}
            data={[]}
            renderItem={({item}) => (
              <Pressable
                  style={({pressed})=> [{
                  backgroundColor: colors.light.white,
                  padding: '3%',
                  marginLeft: '5%',
                  marginBottom: '2%',
                  borderBottomWidth: 1,
                  borderBottomColor: colors.light.blue,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },{opacity: pressed ? 0.5 : 1 }]}
                onPress={() => {
                  //setModalAction(true), setIdPrint(item.id);
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: colors.light.black,
                        fontWeight: '500',
                        fontSize: 18,
                      }}>
                      {"item.nome"}
                    </Text>
                    <Text
                      style={{
                        color:colors.light.gray,
                        fontWeight: '300',
                      }}>
                      {"item.inner_mac_address"}
                    </Text>
                  </View>
                </View>
                <View>
                <AntDesign name="right" size={24} color={colors.light.blue} />
                </View>
              </Pressable>
            )}
          />
        </View>
        {/** Modal de cadastro de impressora */}
        <Modal
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModal(false)}
          visible={modal}>
          <TouchableWithoutFeedback onPress={() => setModal(false)}>
            <View style={styles.ContainerModal}>
              <View
                style={{
                  backgroundColor: colors.light.white,
                  padding: 20,
                  alignItems: 'center',
                  width: '100%',
                  height: '35%',
                  justifyContent: 'center',
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: colors.light.black,
                    marginBottom: 5,
                    fontSize: 17,
                    textAlign: 'center',
                  }}>
                  Selecione a impressora desejada:
                </Text>
                <FlatList
                  style={{width: '100%'}}
                  data={printers}
                  renderItem={data => (
                    <>
                      {data.item.device_name ||
                      data.item.inner_mac_address != null ? (
                        <Pressable
                          style={({pressed}) => [styles.Printer, {opacity: pressed ? 0.5 : 1 }]}
                          onPress={() => {
                            Print(
                              data.item.inner_mac_address,
                              data.item.device_name,
                            );
                            setModal(false);
                          }}>
                          <Text style={{color: colors.light.white, fontWeight: '700'}}>
                            {data.item.device_name}
                          </Text>
                          <Text style={{color: colors.light.white, fontWeight: '700'}}>
                            {data.item.inner_mac_address}
                          </Text>
                        </Pressable>
                      ) : (
                        <Pressable
                          style={({pressed}) => [styles.Printer, {opacity: pressed ? 0.5 : 1 }]}
                          onPress={() => setModal(false)}>
                          <Text
                            style={{
                              color: colors.light.white,
                              fontWeight: '700',
                              textAlign: 'center',
                            }}>
                            Impresora não encontrada!
                          </Text>
                          <Text
                            style={{
                              color: colors.light.white,
                              fontWeight: '600',
                              textAlign: 'justify',
                            }}>
                            Vincule sua impressora ao celular via Bluetooth.
                          </Text>
                        </Pressable>
                      )}
                    </>
                  )}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/** Modal de ações da impressora */}
        {/* <Modal
          transparent={true}
          animationType="fade"
          visible={modalAction}
          onRequestClose={() => setModalAction(false)}>
          <TouchableWithoutFeedback onPress={() => setModalAction(false)}>
            <View style={styles.ContainerModalAction}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  padding: 20,
                  alignItems: 'center',
                  width: '100%',
                  height: '35%',
                  justifyContent: 'center',
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Pressable
                    onPress={() => {
                      PrintOutExclusion(idPrint);
                    }}
                    style={{
                      ...styles.buttonAction,
                      borderColor: '#df0000',
                      borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        color: '#df0000',
                        fontWeight: '400',
                        fontSize: 18,
                      }}>
                      Excluir
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      PrintOutTest(idPrint);
                    }}
                    style={{
                      ...styles.buttonAction,
                      borderColor: colors.light.blue,
                      borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        color: colors.light.blue,
                        fontWeight: '400',
                        fontSize: 18,
                      }}>
                      Testar Impressora
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal> */}
        {/* <ModalCheck
          Title={modalCheck.Title}
          Message={modalCheck.Message}
          status={modalVisibleCheck}
          onClose={() => setModalVisibleCheck(false)}
        />
        <ModalError
          Title={modalError.Title}
          Message={modalError.Message}
          status={modalVisibleError}
          onClose={() => setModalVisibleError(false)}
        /> */}
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
  
    /** Modal */
  
    ContainerModal:{
      flex: 1,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    Content:{
      backgroundColor: colors.light.white,
      alignItems: 'center',
      width: '100%',
      height: '35%',
      justifyContent: 'center',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingTop: '5%',
      paddingHorizontal: '5%',
    },
    ContentError: {
      backgroundColor: colors.light.white,
      alignItems: 'center',
      width: '100%',
      height: '35%',
      justifyContent: 'center',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingTop: '5%',
      paddingHorizontal: '5%'
    },
    Printer: {
      width: '100%',
      height: 90,
      backgroundColor: colors.light.blue,
      borderRadius: 8,
      justifyContent: 'center',
      paddingHorizontal: '10%',
      paddingVertical: '3%',
      marginBottom: '3%'
    },
    PrinterError: {
      width: '100%',
      height: 100,
      marginBottom: 15,
      borderRadius: 8,
      paddingHorizontal: '5%',
      justifyContent: 'center'
    },
    BackgroundClose: {
      //flex:1,
      //zIndex: 9,
    },
    buttonPrinter: {
      backgroundColor: colors.light.white,
      padding: "3%",
      marginLeft: '5%',
      marginBottom: '2%',
      borderBottomWidth: 1,
      borderBottomColor: colors.light.blue,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    /** Modal de ações */
    buttonAction:{
      backgroundColor: colors.light.white,
      padding: 10,
      borderRadius: 15,
      width: '100%',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: '4%',
      marginVertical: '3%',
    },
    ContainerModalAction:{
      flex: 1,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });