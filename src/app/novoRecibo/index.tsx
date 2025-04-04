import React, {useState, useEffect} from 'react';
import {
    ActivityIndicator,
    Alert,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Linking,
    Modal,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    ToastAndroid,
    Pressable,
    TouchableWithoutFeedback,
    Vibration,
    View,
    StyleSheet
  } from 'react-native';
  import { Line } from '../../components/Line';
  import { Dropdown } from 'react-native-element-dropdown';
  import colors from '../../assets/themes/colors'
  import AntDesign from '@expo/vector-icons/AntDesign';
  import FontAwesome from '@expo/vector-icons/FontAwesome';
  import { useRouter } from 'expo-router';
  import BackButton from '../../components/BackButton';
  import { formatPhoneNumber } from '../../utils/formatting/formatPhoneNumber';
  import { formatName } from '../../utils/formatting/formatName';
  import {Movement as MovementInterface } from '../../types/Movement';

  const {width, height} = Dimensions.get('window');
  
  export default function NovoRecibo({}) {
    const router = useRouter()
    const [location, setLocation] = useState<{
      latitude: number;
      longitude: number;
    } | null>(null);
    const [textTaxpayer, setTextTaxpayer] = useState('');
    const [receipt, setReceipt] = useState<MovementInterface>();
    // const [typeSelected, setSelectedType] = useState<payment>({} as payment);
    // const [typeOccurrenceSelected, setTypeOccurrenceSelected] =
    //   useState<occourrence>({} as occourrence);
    const [types, setTypes] = useState([]);
    const [typeOccurrence, setTypeOccurrence] = useState([]);
    const [valuePaidSelected, setValuePaidSelected] = useState('0');
    const [loading, setLoading] = useState(false);
    const [checkLocation, setCheckLocation] = useState(false);
    const [saveLocation, setSaveLocation] = useState(true);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleError, setModalVisibleError] = useState(false);
    const [showPhones, setShowPhones] = useState(false);
    const [modalError, setModalError] = useState({Title: '', Message: ''});
    const [Inform, setInform] = useState({
      cnpj: '',
      RazaoSocial: '',
      Telefone1: '',
      Telefone2: '',
      Telefone3: '',
      ChangePhone: '',
    });
    const [mac, setMac] = useState('');
    const [text, setText] = useState('');
    const [updatePhone, setUpdatePhone] = useState('');
    const [cpfCheck, setCpfCheck] = useState(false);
    const [cpfText, setCpfText] = useState('');
    const [cpfTextError, setCpfTextError] = useState(false);
    const [cpfTextErrorCountBoolean, setCpfTextErrorCountBoolean] =
      useState(false);
    const [cpfTextErrorMessage, setCpfTextErrorMessage] = useState('');
    const [cpfTextErrorCount, setCpfTextErrorCount] = useState<number>(0);
    const [cpfTextCount, setCpfTextCount] = useState<number>(0);
    const [CPFError, setCpfError] = useState(false);
    const [block, setBlock] = useState(false);
    const [fontSize, setFontSizeState] = useState<number>(16);
    let watchId: number;
  
  
    const handleReturn = () =>{
      router.back()
    }

    function callNumber(telephone: string) {
      // FAZER CHAMADA TELEFONICA
      // return Linking.openURL(`tel://${telephone}`);
    }

    function sendAlertWhatsapp(telephone: string){
      // ENVIAR ALERTA
    }

    async function savePhone() {
      // SALVAR TELEPHONE
      // if (updatePhone != ('' || null)) {
      //   const receipRepository = await dataSource.getRepository(Movement);
      //   const receiptNew = await receipRepository.findOne({
      //     where: {
      //       numero_recibo: route.params.receipt_id,
      //     },
      //   });
      //   receiptNew.TelefoneObs = updatePhone;
      //   await receipRepository.save(receiptNew);
      //   setReceipt(receiptNew);
      //   ToastAndroid.show('Telefone salvo com sucesso', ToastAndroid.SHORT);
      // }
    }

    type Rec = {
      telefone1: string;
      telefone2: string;
      telefone3: string;
    };
    
    const TESTE_receipt: Rec[] = [
      {
        telefone1: '11111111',
        telefone2: '22222222',
        telefone3: '33333333'
      }
    ];

    if (loading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#2974b4',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={30}
        enabled>
        <StatusBar
          backgroundColor={modalVisibleError ? 'rgba(0, 0, 0, 0.5)' : '#2974B4'}
          barStyle="light-content"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <BackButton onPress={handleReturn} />
          <View style={styles.ButtonDownView}>
            {checkLocation === true ? (
              <Pressable
                style={({pressed}) => [{
                  backgroundColor: '#fff',
                  borderColor:'#fff',
                  marginBottom: '1%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 5,
                },{opacity: pressed ? 0.5 : 1 }]}
                disabled={
                  false
                }
                onPress={() => console.log('baixar recibo')}>
                <Text style={{color: '#000000', fontWeight: '700'}}>
                  Baixar Recebido
                </Text>
              </Pressable>
            ) : (
              <Pressable
                style={({pressed}) => [{
                  backgroundColor: '#fff',
                  borderColor: '#fff',
                  marginBottom: '1%',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 5,
                },{opacity: pressed ? 0.5 : 1 }]}
                disabled={
                   false
                }
                onPress={() => {
                  console.log('downSucess()')
                }}>
                <Text style={{color: '#000000', fontWeight: '700'}}>
                  Baixar Recebido
                </Text>
              </Pressable>
            )}
          </View>
          {/*Inicio do recibo*/}
          <View style={styles.containerReceipt}>
            {/*Cabeçalho do recibo*/}
            <View style={styles.ReceiptTitle}>
              <Text style={styles.titleText}>Nº</Text>
              <Text style={styles.titleTextData}>{'123'}</Text>
              <Text style={styles.titleTextstatus}>
                {'PENDENTE'}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Line />
            </View>
            {/** Informações do recibo*/}
            <View style={styles.receiptInformation}>
              <Text style={styles.titleText}>OPERADOR(A)</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                {'Cinthi Kely'}
              </Text>
              <Text style={styles.titleText}>DATA PREVISTA</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                {'04/02/1500'}
              </Text>
              <Text style={styles.titleText}>DATA ÚLTIMA DOAÇÃO</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                1969-12-31
              </Text>
              <Dropdown
                data={[]}
                labelField="descricao"
                valueField="codigo"
                value={0}
                placeholder="Tipo de pagamento"
                placeholderStyle={{
                  color: '#000000',
                  borderColor: '#646464',
                  fontFamily: 'Inter-Regular',
                  fontSize: 17,
                }}
                containerStyle={{
                  top: '-0.2%',
                  borderRadius: 8,
                }}
                style={{
                  height: 43,
                  width: '100%',
                  borderColor: '#646464',
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  marginTop: '3%',
                }}
                itemTextStyle={{
                  color: '#000000',
                }}
                selectedTextStyle={{
                  color: '#000000',
                }}
                iconColor={'#000000'}
                onChange={() => console.log('dropdonw')}
              />
              {/* <TextInputMask
                type={'money'}
                editable={receipt?.status != 0 ? false : true}
                onChangeText={text => setValuePaidSelected(text)}
                style={{
                  width: '100%',
                  height: 43,
                  marginTop: '3%',
                  marginBottom: '6%',
                  backgroundColor: 'white',
                  borderColor: '#646464',
                  color: '#000000',
                  fontFamily: 'Inter-Regular',
                  fontSize: 17,
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: 'R$ ',
                  suffixUnit: '',
                }}
                value={valuePaidSelected}
                keyboardType={'numeric'}
              /> */}
            </View>
            <View style={{alignItems: 'center'}}>
              <Line />
            </View>
            {/**Informações do contribuinte*/}
            <View style={styles.receiptInformation}>
              <Text style={styles.titleText}>CONTRIBUINTE</Text>
              <Pressable
                onPress={() => console.log('checkCPF')}
                style={({pressed}) => [{opacity: pressed ? 0.5 : 1 }]}
                >
                <Text style={[styles.receiptInformationData, {fontSize}]}>
                  00000-
                </Text>
              </Pressable>
              <Text style={styles.titleText}>CONTATO</Text>
              {[TESTE_receipt[0]?.telefone1, TESTE_receipt[0]?.telefone2, TESTE_receipt[0]?.telefone3].map(
                (telefone, index) => (
                  <View key={index} style={styles.Cell}>
                    {telefone && (
                      <>
                        <Pressable
                          style={({pressed}) => [styles.ButtonCall, {opacity: pressed ? 0.5 : 1 }]}
                          onPress={() => callNumber(telefone)}>
                          <Text style={[styles.TextData, {fontSize}]}>
                            {formatPhoneNumber(telefone)}
                          </Text>
                        </Pressable>
                        <Pressable
                          style={({pressed}) => [styles.ButtonCall , {opacity: pressed ? 0.5 : 1 }]}
                          onPress={() => sendAlertWhatsapp(telefone)}>
                          <FontAwesome name="whatsapp" size={24} color="green" />
                        </Pressable>
                      </>
                    )}
                  </View>
                ),
              )}
              {Number(Inform.ChangePhone) === 1 ? (
                <>
                  <Text style={styles.titleText}>Novo Contato</Text>
                  {/* <TextInputMask
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) ',
                    }}
                    value={updatePhone == (null || '') ? '' : updatePhone}
                    style={{
                      width: '100%',
                      height: 43,
                      marginBottom: '2%',
                      backgroundColor: 'white',
                      borderColor: '#646464',
                      color: '#000000',
                      fontFamily: 'Inter-Regular',
                      fontSize: 17,
                      borderRadius: 8,
                      borderWidth: 1,
                      paddingLeft: 8,
                      paddingRight: 8,
                    }}
                    onChangeText={text => {
                      setUpdatePhone(text);
                    }}
                  /> */}
                  <Pressable
                    style={({pressed}) => [{
                      backgroundColor: '#2974b4',
                      marginVertical: '2%',
                      width: '100%',
                      padding: '5%',
                      borderRadius: 8,
                    },{opacity: pressed ? 0.5 : 1 }]}
                    onPress={() => savePhone()}>
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Salvar Número
                    </Text>
                  </Pressable>
                </>
              ) : (
                ''
              )}
            </View>
            <View style={{alignItems: 'center'}}>
              <Line />
            </View>
            {/**Informações do Doador*/}
            <View style={styles.receiptInformation}>
              <Text style={styles.titleText}>ENDEREÇO</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                111111
              </Text>
              <Text style={styles.titleText}>BAIRRO</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                22222
              </Text>
              <Text style={styles.titleText}>MUNICÍPIO</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                3333
              </Text>
              <Text style={styles.titleText}>COMPLEMENTO</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                44444
              </Text>
              <Text style={styles.titleText}>REFERÊNCIA</Text>
              <Text style={[styles.receiptInformationData, {fontSize}]}>
                555555
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Line />
            </View>
            {/**Observações do recibo */}
            <View style={styles.receiptInformation}>
              <View
                style={{
                  backgroundColor: '#feffc9',
                  width: '100%',
                  paddingVertical: '1%',
                  paddingHorizontal: '0.5%',
                }}>
                <Text style={styles.titleText}>OBSERVAÇÃO DO RECIBO</Text>
                <Text style={[styles.receiptInformationData, {fontSize}]}>
                  {receipt?.memo_obs_mensageiro
                    ? formatName(receipt?.memo_obs_mensageiro)
                    : 'Sem observação'}
                </Text>
                <Text style={styles.titleText}>OBSERVAÇÃO DO CONTRIBUINTE</Text>
                <Text style={[styles.receiptInformationData, {fontSize}]}>
                  {receipt?.obs_contribuinte
                    ? formatName(receipt?.obs_contribuinte)
                    : 'Sem observação'}
                </Text>
              </View>
              <Dropdown
                data={[]}
                labelField="descricao"
                valueField="codigo"
                value={0}
                placeholder="TIPO DE OCORRÊNCIA"
                placeholderStyle={{
                  color: '#646464',
                  borderColor: '#646464',
                  fontFamily: 'Inter-Regular',
                  fontSize: 17,
                }}
                containerStyle={{
                  top: '-0.2%',
                  borderRadius: 8,
                }}
                style={{
                  height: 43,
                  width: '100%',
                  borderColor: '#646464',
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  marginTop: '3%',
                }}
                selectedTextStyle={{
                  color: '#000000',
                }}
                itemTextStyle={{
                  color: '#000000',
                }}
                iconColor={'#000000'}
                onChange={() => console.log('item => setTypeOccurrenceSelected(item)')}
              />
              <TextInput
                style={{
                  height: 40,
                  borderColor: '#646464',
                  borderWidth: 1,
                  borderRadius: 8,
                  color: '#000000',
                  marginTop: '3%',
                  width: '100%',
                  fontSize: 17,
                }}
                placeholder="OBSERVAÇÃO"
                onChangeText={text => setTextTaxpayer(text)}
                value={textTaxpayer}
              />
              <Pressable
                style={({pressed}) => [{
                  backgroundColor: '#2974b4',
                  marginVertical: '2%',
                  width: '100%',
                  padding: '5%',
                  borderRadius: 8,
                },{opacity: pressed ? 0.5 : 1 }]}
                onPress={() => console.log('saveText()') }>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontWeight: '700',
                    textAlign: 'center',
                  }}>
                  ENVIAR OBSERVAÇÃO
                </Text>
              </Pressable>
            </View>
          </View>
          <Pressable
            style={({pressed}) => [{
              backgroundColor: '#fff',
              borderColor:'#fff',
              marginVertical: '3%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            },{opacity: pressed ? 0.5 : 1 }]}
            disabled={false}
            onPress={() => {
              console.log('downReturned()')
            }}>
            <Text style={{color: '#000000', fontWeight: '700'}}>
              Baixar devolvido
            </Text>
          </Pressable>
          {/* {receipt.status === 1 ? (
            <Pressable
              style={{
                backgroundColor: '#fff',
                borderColor: '#fff',
                marginVertical: '3%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
              }}
              onPress={() => {
                printReceipt();
              }}>
              <Text style={{color: '#000000', fontWeight: '700'}}>
                Imprimir novamente
              </Text>
            </Pressable>
          ) : (
            ''
          )} */}
          <Pressable
            style={({pressed}) => [{
              backgroundColor: '#fff',
              borderColor: '#fff',
              marginBottom: '3%',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
            },{opacity: pressed ? 0.5 : 1 }]}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={{color: '#000000', fontWeight: '700'}}>Aviso</Text>
          </Pressable>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
              setShowPhones(false);
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(!modalVisible);
                setShowPhones(false);
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                <StatusBar
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  barStyle="light-content"
                />
                <View
                  style={{
                    backgroundColor: '#fff',
                    padding: 20,
                    alignItems: 'center',
                    width: '100%',
                    height: '35%',
                    justifyContent: 'center',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}>
                  {showPhones ? (
                    [
                    //   receipt?.telefone1,
                    //   receipt?.telefone2,
                    //   receipt?.telefone3,
                    ].map((telefone, index) => (
                      <View key={index} style={styles.Cell}>
                        {telefone && (
                          <>
                            <ScrollView showsVerticalScrollIndicator={false}>
                              <Pressable
                                style={({pressed}) => [styles.ButtonCallModal, {opacity: pressed ? 0.5 : 1 }]}
                                onPress={() => sendAlertWhatsapp(telefone)}>
                                <Text style={{color: '#ffffff'}}>
                                  {formatPhoneNumber(telefone)}
                                </Text>
                              </Pressable>
                            </ScrollView>
                          </>
                        )}
                      </View>
                    ))
                  ) : (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                      }}>
                      <Pressable
                        style={({pressed}) => [{
                          backgroundColor: '#2974B4',
                          padding: 10,
                          borderRadius: 15,
                          width: '49%',
                          alignContent: 'center',
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingVertical: '11%',
                        },{opacity: pressed ? 0.5 : 1 }]}
                        onPress={() => {
                          setModalVisible(!false);
                          //printNotice();
                        }}>
                        <AntDesign name="closecircleo" size={24} color="black" />
                        <Text
                          style={{
                            color: '#FFFFFF',
                            fontWeight: '500',
                          }}>
                          Imprimir aviso
                        </Text>
                      </Pressable>
                      <Pressable
                        style={({pressed}) => [{
                          backgroundColor: '#2974B4',
                          padding: 10,
                          borderRadius: 15,
                          width: '49%',
                          alignContent: 'center',
                          justifyContent: 'center',
                          alignItems: 'center',
                        },{opacity: pressed ? 0.5 : 1 }]}
                        onPress={() => setShowPhones(true)}>
                        <FontAwesome name="whatsapp" size={24} color="green" />
                        <Text
                          style={{
                            color: '#FFFFFF',
                            fontWeight: '500',
                          }}>
                          Enviar pelo Whatsapp
                        </Text>
                      </Pressable>
                    </View>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          {/**Modal CPF */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={cpfCheck}
            onRequestClose={() => setCpfCheck(false)}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
              <StatusBar
                backgroundColor="rgba(0, 0, 0, 0.5)"
                barStyle="light-content"
              />
              <View
                style={{
                  backgroundColor: '#2974b4',
                  padding: '5%',
                  alignItems: 'flex-start',
                  width: width * 0.9,
                  justifyContent: 'center',
                  borderRadius: 16,
                }}>
                <Pressable
                  onPress={() => setCpfCheck(false)}
                  style={({pressed}) => [{
                    alignSelf: 'flex-end',
                    top: 8,
                    position: 'absolute',
                    marginRight: '7%',
                    marginTop: '3.5%',
                  }, {opacity: pressed ? 0.5 : 1 }]}>
                  <AntDesign name="closecircleo" size={28} color={colors.light.white} />
                </Pressable>
                <Text style={styles.ModalCPFTitleText}>CPF DOS DOADORES</Text>
                <Text style={styles.ModalCPFReceiptInformationData}>
                  Solicite ao doador o CPF
                </Text>
                <View style={styles.inputLabelCPF}>
                  <Text style={[styles.ModalCPFTitleText, {alignSelf: 'center'}]}>
                    CPF:{' '}
                  </Text>
                  {/* <TextInputMask
                    type={'cpf'}
                    placeholder="CPF"
                    style={{
                      width: '70%',
                      height: '100%',
                      borderColor: cpfTextError
                        ? CPFError
                          ? '#FFFFFF'
                          : cpfText == ''
                          ? '#FFFFFF'
                          : cpfTextErrorCountBoolean
                          ? cpfTextCount <= cpfTextErrorCount
                            ? '#FFFFFF'
                            : '#FFFFFF'
                          : '#FFFFFF'
                        : CPFError
                        ? '#FFFFFF'
                        : '#FFFFFF',
                      color: '#FFFFFF',
                      borderWidth: 1,
                      borderRadius: 8,
                      fontSize: 16,
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: 15,
                      paddingVertical: 1,
                    }}
                    value={''}
                    onChangeText={value => setCpfText(value)}
                  /> */}
                </View>
                {cpfTextError ? (
                  cpfText == '' ? (
                    CPFError ? (
                      <Text
                        style={{
                          color: 'rgba(255,255,255,0.85)',
                          backgroundColor: '#000000',
                          paddingHorizontal: '2%',
                          borderRadius: 5,
                          position: 'absolute',
                          top: width * 0.297,
                          left: height * 0.09,
                          textAlign: 'center',
                        }}>
                        * {cpfTextErrorMessage}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          color: 'rgba(255,255,255,0.85)',
                          backgroundColor: '#000000',
                          paddingHorizontal: '2%',
                          borderRadius: 5,
                          position: 'absolute',
                          top: width * 0.297,
                          left: height * 0.09,
                        }}>
                        * {cpfTextErrorMessage}
                      </Text>
                    )
                  ) : cpfTextErrorCountBoolean ? (
                    cpfTextCount <= cpfTextErrorCount ? (
                      <Text
                        style={{
                          color: 'rgba(255,255,255,0.85)',
                          backgroundColor: '#000000',
                          paddingHorizontal: '2%',
                          borderRadius: 5,
                          position: 'absolute',
                          top: width * 0.297,
                          left: height * 0.09,
                        }}>
                        * {cpfTextErrorMessage}
                      </Text>
                    ) : (
                      ''
                    )
                  ) : (
                    ''
                  )
                ) : CPFError ? (
                  <Text
                    style={{
                      color: 'rgba(255,255,255,0.85)',
                      backgroundColor: '#000000',
                      paddingHorizontal: '2%',
                      borderRadius: 5,
                      position: 'absolute',
                      top: width * 0.297,
                      left: height * 0.09,
                      textAlign: 'center',
                    }}>
                    * {cpfTextErrorMessage}
                  </Text>
                ) : (
                  ''
                )}
                <Pressable
                  //onPress={CPF}
                  style={({pressed}) => [{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#FFFFFF',
                    marginBottom: '3%',
                    width: '50%',
                    alignSelf: 'flex-end',
                    borderWidth: 1,
                    padding: '2.5%',
                    borderRadius: 10,
                    marginVertical: '2%',
                    marginTop: '13%',
                  },{opacity: pressed ? 0.5 : 1 }]}>
                  <Text
                    style={{
                      color: '#2974b4',
                      textAlign: 'center',
                      fontWeight: '400',
                    }}>
                    Salvar
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
        {/* <ModalError
          Title={modalError.Title}
          Message={modalError.Message}
          status={modalVisibleError}
          onClose={() => setModalVisibleError(false)}
        /> */}
      </KeyboardAvoidingView>
    );
  }

  export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#2974B4',
    paddingHorizontal: '2%',
  },
  ButtonDownView: {
    marginTop: "16.5%",
    marginBottom:'3%'
  },
  containerReceipt: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: "2%"
  },
  ReceiptTitle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '2%'
  },
  titleText: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 18
  },
  titleTextData: {
    color: '#646464',
    marginRight: "35%",
    marginLeft: '1%',
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 16
  },
  titleTextstatus: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 16
  },
  receiptInformation:{
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingHorizontal: "5%"
  },
  receiptInformationData:{
    color: '#646464',
    fontFamily: 'Inter-Bold',
    fontWeight: '400',
    fontSize: 16
  },
  Cell:{
    flexDirection:'row',
    width: '100%'
  },
  CellModal:{
    flexDirection:'row',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor:'#000000'
  },
  ButtonCall: {
    width: '55%',
    color: '#000000'
  },
  ButtonCallModal: {
    width: '100%',
    backgroundColor: '#2974B4',
    textAlign: 'center',
    borderRadius: 12,
    padding: 20,
    marginBottom: "4%",
  },
  TextData: {
    color: '#646464',
    fontFamily: 'Inter-Bold',
    fontWeight: '400',
    fontSize: 16,
    width: 279
  },
  ModalCPFTitleText:{
    color: 'rgba(255,255,255,0.71)',
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    fontSize: 18,
  },
  ModalCPFReceiptInformationData:{
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: '5%'
  },
  inputLabelCPF:{
    flexDirection: 'row'
  },
});