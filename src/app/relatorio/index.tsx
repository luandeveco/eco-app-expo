import {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    Linking,
    Modal,
    StatusBar,
    Text,
    TouchableWithoutFeedback,
    View,
    TouchableOpacity,
    ScrollView,
    BackHandler,
    FlatList,
    StyleSheet,
  } from 'react-native';
import colors from '../../assets/themes/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from 'expo-router';


  export default function Relatory() {
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState<{
      latitude: number;
      longitude: number;
    } | null>(null);
    const [visibleModal, setVisibleModal] = useState(false);
    const [visibleModalPrinterSelect, setVisibleModalPrinterSelect] =
      useState(false);
    const [qtdPending, setQtdPending] = useState<{
      dinheiro: number;
      carCredito: number;
      carDebito: number;
      pix: number;
      cheque: number;
      deposito: number;
      boleto: number;
      carne: number;
      debConta: number;
      total: number;
    }>({
      dinheiro: 0,
      carCredito: 0,
      carDebito: 0,
      pix: 0,
      cheque: 0,
      deposito: 0,
      boleto: 0,
      carne: 0,
      debConta: 0,
      total: 0,
    });
    const [valuePending, setValuePending] = useState<{
      dinheiro: string;
      carCredito: string;
      carDebito: string;
      pix: string;
      cheque: string;
      deposito: string;
      boleto: string;
      carne: string;
      debConta: string;
      total: string;
    }>({
      dinheiro: '',
      carCredito: '',
      carDebito: '',
      pix: '',
      cheque: '',
      deposito: '',
      boleto: '',
      carne: '',
      debConta: '',
      total: '',
    });
    const [qtdReceived, setQtdReceived] = useState<{
      dinheiro: number;
      carCredito: number;
      carDebito: number;
      pix: number;
      cheque: number;
      deposito: number;
      boleto: number;
      carne: number;
      debConta: number;
      total: number;
    }>({
      dinheiro: 0,
      carCredito: 0,
      carDebito: 0,
      pix: 0,
      cheque: 0,
      deposito: 0,
      boleto: 0,
      carne: 0,
      debConta: 0,
      total: 0,
    });
    const [valueReceived, setValueReceived] = useState<{
      dinheiro: string;
      carCredito: string;
      carDebito: string;
      pix: string;
      cheque: string;
      deposito: string;
      boleto: string;
      carne: string;
      debConta: string;
      total: string;
    }>({
      dinheiro: '',
      carCredito: '',
      carDebito: '',
      pix: '',
      cheque: '',
      deposito: '',
      boleto: '',
      carne: '',
      debConta: '',
      total: '',
    });
    const [qtdReturned, setQtdReturned] = useState<{
      dinheiro: number;
      carCredito: number;
      carDebito: number;
      pix: number;
      cheque: number;
      deposito: number;
      boleto: number;
      carne: number;
      debConta: number;
      total: number;
    }>({
      dinheiro: 0,
      carCredito: 0,
      carDebito: 0,
      pix: 0,
      cheque: 0,
      deposito: 0,
      boleto: 0,
      carne: 0,
      debConta: 0,
      total: 0,
    });
    const [valueReturned, setValueReturned] = useState<{
      dinheiro: string;
      carCredito: string;
      carDebito: string;
      pix: string;
      cheque: string;
      deposito: string;
      boleto: string;
      carne: string;
      debConta: string;
      total: string;
    }>({
      dinheiro: '',
      carCredito: '',
      carDebito: '',
      pix: '',
      cheque: '',
      deposito: '',
      boleto: '',
      carne: '',
      debConta: '',
      total: '',
    });
    const [totalMoney, setTotalMoney] = useState({
      totalPending: '',
      totalReceived: '',
      totalReturned: '',
    });
    const [totalReceipt, setTotalReceipt] = useState({
      totalWorked: '',
    });
    const [text, setText] = useState('');
    const [modalError, setModalError] = useState({Title: '', Message: ''});
    const [phone1, setPhone1] = useState<string | null>('');
    const [phone2, setPhone2] = useState<string | null>('');
    const [modalVisibleError, setModalVisibleError] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [showPhones, setShowPhones] = useState(false);
    const [relatory, setRelatory] = useState(false);
    const [relatorySummarized, setRelatorySummarized] = useState(false);
    const [relatoryState, setRelatoryState] = useState(false);
    const [relatoryStateDetail, setRelatoryStateDetail] = useState(false);
    const [summarizedReportOptions, setSummarizedReportOptions] = useState(false);
    const [summarizedReportOptionsLocal, setSummarizedReportOptionsLocal] =
      useState(false);
    const [detailReportOptions, setDetailReportOptions] = useState(false);
    const [detailReportOptionsLocal, setDetailReportOptionsLocal] =
      useState(false);
    const [detailReport, setDetailReport] = useState(false);
    //const [printers, setPrinters] = useState<IBLEPrinter[]>([{} as IBLEPrinter]);
    const navigation = useNavigation();
  
  
    if (loading) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#2974b4',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatusBar
            backgroundColor={
              modalVisible || visibleModalPrinterSelect || modalVisibleError
                ? 'rgba(0, 0, 0, 0.7)'
                : '#2973b44d'
            }
            barStyle="light-content"
          />
          <ActivityIndicator size="large" color="white" />
        </View>
      );
    }
  
    return (
      <View style={styles.Container}>
        <ScrollView
          style={{width: '100%'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}>
          {/* <BackButton onPress={handleReturn} /> */}
          <TouchableOpacity
            style={styles.ButtonTitle}
            activeOpacity={0.75}
            onPress={() => {
              setRelatory(true);
            }}>
            <Text style={styles.TitleButton}>Imprimir Relatório</Text>
          </TouchableOpacity>
          {/*Recibos Pendentes*/}
          <View style={[styles.StatusCard, {marginTop: '7%'}]}>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.text}>PENDENTE</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.text}>({qtdPending.total})</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DINHEIRO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.dinheiro}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.dinheiro}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CAR. CRED.</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.carCredito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>
                  {valuePending.carCredito}
                </Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CAR. DEB.</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.carDebito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.carDebito}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>PIX</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.pix}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.pix}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CHEQUE</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.cheque}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.cheque}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DEPOSITO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.deposito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.deposito}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>BOLETO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.boleto}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.boleto}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CARNÊ</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.carne}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.carne}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DEB. CONTA</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdPending.debConta}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valuePending.debConta}</Text>
              </View>
            </View>
          </View>
          {/*Recibos Devolvidos*/}
          <View style={styles.StatusCard}>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.text}>DEVOLVIDO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.text}>({qtdReturned.total})</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DINHEIRO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.dinheiro}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReturned.dinheiro}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CAR. CRED.</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.carCredito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>
                  {valueReturned.carCredito}
                </Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CAR. DEB.</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.carDebito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>
                  {valueReturned.carDebito}
                </Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>PIX</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.pix}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReturned.pix}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CHEQUE</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.cheque}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReturned.cheque}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DEPOSITO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.deposito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReturned.deposito}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>BOLETO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.boleto}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReturned.boleto}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CARNÊ</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.carne}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReturned.carne}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DEB. CONTA</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReturned.debConta}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReturned.debConta}</Text>
              </View>
            </View>
          </View>
          {/*Recibos Recebido*/}
          <View style={styles.StatusCard}>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.text}>RECEBIDO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.text}>({qtdReceived.total})</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DINHEIRO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.dinheiro}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReceived.dinheiro}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CAR. CRED.</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.carCredito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>
                  {valueReceived.carCredito}
                </Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CAR. DEB.</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.carDebito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>
                  {valueReceived.carDebito}
                </Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>PIX</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.pix}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReceived.pix}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CHEQUE</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.cheque}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReceived.cheque}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DEPOSITO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.deposito}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReceived.deposito}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>BOLETO</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.boleto}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReceived.boleto}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>CARNÊ</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.carne}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReceived.carne}</Text>
              </View>
            </View>
            <View style={styles.Caption}>
              <View style={styles.Data}>
                <Text style={styles.TextData}>DEB. CONTA</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextData}>{qtdReceived.debConta}</Text>
              </View>
              <View style={styles.Data}>
                <Text style={styles.TextDataValue}>{valueReceived.debConta}</Text>
              </View>
            </View>
          </View>
          {/* Total Pendente */}
          <View style={styles.CardTotal}>
            <Text style={styles.Total}>TOTAL PENDENTE</Text>
            <Text style={styles.TotalData}>
              {totalMoney.totalPending} ({qtdPending.total})
            </Text>
          </View>
          {/* Total Devolvido */}
          <View style={styles.CardTotal}>
            <Text style={styles.Total}>TOTAL DEVOLVIDO</Text>
            <Text style={styles.TotalData}>
              {totalMoney.totalReturned} ({qtdReturned.total})
            </Text>
          </View>
          {/* Total Recebido */}
          <View style={styles.CardTotal}>
            <Text style={styles.Total}>TOTAL RECEBIDO</Text>
            <Text style={styles.TotalData}>
              {totalMoney.totalReceived} ({qtdReceived.total})
            </Text>
          </View>
          <TouchableOpacity
            style={styles.DownReturnButton}
            activeOpacity={0.75}
            onPress={() => {
              //openModal();
            }}>
            <Text style={styles.TextDownReturnButton}>Finalizar Movimento</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* <ModalError
          Title={modalError.Title}
          Message={modalError.Message}
          status={modalVisibleError}
          onClose={() => setModalVisibleError(false)}
        /> */}
        {/**Modal de telefones */}
        {/* <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <TouchableWithoutFeedback onPress={closeModal}>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.light.blue,
                        padding: 10,
                        borderRadius: 15,
                        width: '49%',
                        height: '100%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: '15%',
                      }}
                      onPress={() => {
                        setModalVisible(false);
                        //reportFinalizeMovement(false);
                      }}>
                      <FontAwesome name="exclamation-triangle" size={24} color="black" />
                      <Text style={{color: colors.light.white, fontWeight: '500'}}>
                        Finalizar
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.light.blue,
                        padding: 10,
                        borderRadius: 15,
                        width: '49%',
                        height: '100%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                      }}
                      onPress={() => {
                        //sendWhatsapp()
                      }}>
                      <Image
                        source={require('../../assets/icons/whatsapp.png')}
                        style={{width: 62, height: 62, marginBottom: '2%'}}
                      />
                      <Text style={{color: colors.light.white, fontWeight: '500'}}>
                        Enviar pelo Whatsapp
                      </Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal> */}
        {/**Modal de impressão */}
        <Modal
          visible={visibleModalPrinterSelect}
          transparent={true}
          onRequestClose={() => setVisibleModalPrinterSelect(false)}
          animationType="fade">
          <TouchableWithoutFeedback
            onPress={() => setVisibleModalPrinterSelect(false)}>
            <View style={styles.ContainerModal}>
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
                {/* <FlatList
                  style={{width: '100%'}}
                  data={printers}
                  renderItem={data => (
                    <>
                      {data.item.device_name ||
                      data.item.inner_mac_address != null ? (
                        <TouchableOpacity
                          style={styles.Printer}
                          activeOpacity={0.9}
                          onPress={() => {
                            printOut(data.item.inner_mac_address, text);
                            setLoading(true);
                          }}>
                          <Text style={{color: colors.light.white, fontWeight: '700'}}>
                            {data.item.device_name}
                          </Text>
                          <Text style={{color: colors.light.white, fontWeight: '700'}}>
                            {data.item.inner_mac_address}
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.Printer}
                          activeOpacity={0.9}
                          onPress={() => setVisibleModalPrinterSelect(false)}>
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
                        </TouchableOpacity>
                      )}
                    </>
                  )}
                /> */}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/**Modal de Relatórios */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={relatory}
          onRequestClose={() => {
            setRelatory(false),
              setRelatoryState(false),
              setRelatoryStateDetail(false);
            setDetailReportOptions(false);
            setDetailReportOptionsLocal(false);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setRelatory(false),
                setRelatoryState(false),
                setRelatoryStateDetail(false);
              setDetailReportOptions(false);
              setDetailReportOptionsLocal(false);
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  {relatoryState == false ? (
                    <>
                      {/**Relatório Resumido */}
                      <TouchableOpacity
                        style={{
                          backgroundColor: colors.light.blue,
                          padding: 10,
                          borderRadius: 15,
                          width: '49%',
                          height: '100%',
                          alignContent: 'center',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          setRelatoryState(true);
                        }}>
                        <MaterialCommunityIcons name="clipboard-text-outline" size={24} color={colors.light.white} />
                        <Text style={{color: colors.light.white, fontWeight: '500'}}>
                          Resumido
                        </Text>
                      </TouchableOpacity>
                      {/**Relatório Detalhado */}
                      <TouchableOpacity
                        style={{
                          backgroundColor: colors.light.blue,
                          padding: 10,
                          borderRadius: 15,
                          width: '49%',
                          height: '100%',
                          alignContent: 'center',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          marginBottom: 10,
                        }}
                        onPress={() => {
                          setRelatoryState(true);
                          setRelatoryStateDetail(true);
                        }}>
                        <MaterialCommunityIcons name="note-text-outline" size={24} color={colors.light.white}  />
                        <Text style={{color: colors.light.white, fontWeight: '500'}}>
                          Detalhado
                        </Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      {relatoryStateDetail ? (
                        <>
                          {/**Relatório detalhado Local */}
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'space-evenly',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              setRelatory(false);
                              setRelatoryState(false);
                              setRelatoryStateDetail(false);
                              setDetailReportOptions(true);
                              setDetailReportOptionsLocal(true);
                            }}>
                            <AntDesign name="mobile1" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Local
                            </Text>
                          </TouchableOpacity>
                          {/**Relatório detalhado Servidor */}
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'space-evenly',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              setRelatory(false);
                              setRelatoryState(false);
                              setRelatoryStateDetail(false);
                              setDetailReportOptions(true);
                            }}>
                            <Feather name="globe" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Sistema
                            </Text>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          {/**Relatório resumido Local */}
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'space-evenly',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              setRelatory(false);
                              setRelatorySummarized(true);
                              setRelatoryState(false);
                              setSummarizedReportOptionsLocal(true);
                              setSummarizedReportOptions(true);
                            }}>
                            <AntDesign name="mobile1" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Local
                            </Text>
                          </TouchableOpacity>
                          {/**Relatório resumido Servidor */}
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'space-evenly',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              setSummarizedReportOptions(true);
                            }}>
                            <Feather name="globe" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Sistema
                            </Text>
                          </TouchableOpacity>
                        </>
                      )}
                    </>
                  )}
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/** Modal Whatsapp Relatório Resumido*/}
        <Modal
          animationType="fade"
          transparent={true}
          visible={summarizedReportOptions}
          onRequestClose={() => {
            setSummarizedReportOptions(false),
              setShowPhones(false),
              setRelatory(false),
              setRelatoryState(false),
              setRelatoryStateDetail(false);
            setDetailReportOptions(false);
            setDetailReportOptionsLocal(false);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setSummarizedReportOptions(false),
                setShowPhones(false),
                setRelatory(false),
                setRelatoryState(false),
                setRelatoryStateDetail(false);
              setDetailReportOptions(false);
              setDetailReportOptionsLocal(false);
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <>
                    {summarizedReportOptionsLocal ? (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              paddingVertical: '15%',
                            }}
                            onPress={() => {
                              //reportFinalizeMovement(true);
                            }}>
                            <AntDesign name="printer" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Imprimir
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              paddingVertical: 10,
                              paddingHorizontal: 5,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              //sendWhatsappSummarizedLocal();
                            }}>
                            <FontAwesome name="whatsapp" size={24} color="black" />
                            <Text
                              style={{
                                color: colors.light.white,
                                fontWeight: '500',
                                textAlign: 'center',
                              }}>
                              Enviar pelo Whatsapp
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              paddingVertical: '15%',
                            }}
                            onPress={() => 
                            //reportMovimentSummarizedServer()
                            console.log('ss')
                            }>
                            <AntDesign name="printer" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Imprimir
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              //sendWhatsappummarizedSever();
                            }}>
                            <FontAwesome name="whatsapp" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Enviar pelo Whatsapp
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                  </>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        {/** Modal Whatsapp Relatório Detralhado */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={detailReportOptions}
          onRequestClose={() => {
            setSummarizedReportOptions(false),
              setShowPhones(false),
              setRelatory(false),
              setRelatoryState(false),
              setRelatoryStateDetail(false);
            setDetailReportOptions(false);
            setDetailReportOptionsLocal(false);
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setSummarizedReportOptions(false),
                setShowPhones(false),
                setRelatory(false),
                setRelatoryState(false),
                setRelatoryStateDetail(false);
              setDetailReportOptions(false);
              setDetailReportOptionsLocal(false);
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <>
                    {detailReportOptionsLocal ? (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              paddingVertical: '15%',
                            }}
                            onPress={() => {
                            //   setDetailReportOptions(false);
                            //   setDetailReport(true);
                            //   reportMovimentDetailed();
                            }}>
                            <AntDesign name="printer" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Imprimir
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              paddingVertical: 10,
                              paddingHorizontal: 5,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              //sendWhatsappDetailLocal();
                            }}>
                            <FontAwesome name="whatsapp" size={24} color="black" />
                            <Text
                              style={{
                                color: colors.light.white,
                                fontWeight: '500',
                                textAlign: 'center',
                              }}>
                              Enviar pelo Whatsapp
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    ) : (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                          }}>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              paddingVertical: '15%',
                            }}
                            onPress={() => {
                            //   setDetailReportOptions(false);
                            //   setDetailReportOptionsLocal(false);
                            //   setDetailReport(true);
                            //   reportMovimentDetailedServer();
                            }}>
                            <AntDesign name="printer" size={24} color="black" />
                            <Text style={{color: colors.light.white, fontWeight: '500'}}>
                              Imprimir
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={{
                              backgroundColor: colors.light.blue,
                              padding: 10,
                              borderRadius: 15,
                              width: '49%',
                              height: '100%',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginBottom: 10,
                            }}
                            onPress={() => {
                              //sendWhatsappDetailSever();
                            }}>
                            <FontAwesome name="whatsapp" size={24} color="black" />
                            <Text
                              style={{
                                color: colors.light.white,
                                fontWeight: '500',
                                textAlign: 'center',
                              }}>
                              Enviar pelo Whatsapp
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                  </>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  export const styles = StyleSheet.create({
    Container:{
      flex: 1,
      backgroundColor: colors.light.blue,
      paddingHorizontal: '2%',
      justifyContent:'center',
      alignItems:'center'
    },
    TitleRelatory: {
      width:'100%',
      height:43,
      top:60,
      marginBottom:15,
      borderRadius:20,
      backgroundColor: colors.light.white,
      paddingLeft:30,
      paddingTop: 10,
    },
    ButtonTitle: {
      width: '100%',
      marginBottom: '15%',
      height: 46,
      top: '4.6%',
      paddingLeft: 30,
      backgroundColor: colors.light.white,
      borderRadius: 5
    },
    TitleButton:{
      color: colors.light.black,
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
      paddingVertical: '3%'
    },
    text: {
      marginTop:'5%',
      color: colors.light.black,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      fontSize: 16,
    },
    Caption:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '64%'
    },
    Data: {
      flexDirection: 'column',
      width: '50%',
      height: '100%',
      marginBottom: 4
    },
    DataValor: {
      flexDirection: 'column',
      height: '100%',
      marginBottom: 4
    },
    VerticalLine:{
      backgroundColor: colors.light.blue,
      width: '1%',
      height: '88%',
      marginHorizontal: '5%'
    },
    TextData: {
      color: colors.light.gray,
      fontFamily: 'Inter-Bold',
      fontWeight: '400',
      fontSize: 16
    },
    TextDataValue: {
      color: colors.light.gray,
      fontFamily: 'Inter-Bold',
      fontWeight: '400',
      fontSize: 16,
      textAlign: 'right'
    },
    RelatoryCard: {
      width: '100%',
      height: 85,
      marginBottom: 15,
      borderRadius: 20,
      backgroundColor: colors.light.white,
      paddingLeft: 30,
      paddingTop: 20
    },
    StatusCard: {
      width: '100%',
      marginBottom: 15,
      borderRadius: 8,
      backgroundColor: colors.light.white,
      paddingLeft: 15,
      paddingVertical: 15
    },
    CardTotal: {
      width: '100%',
      height: 43,
      marginBottom: 15,
      borderRadius: 8,
      backgroundColor: colors.light.white,
      flexDirection: 'row',
      paddingHorizontal: '3%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    Total: {
      color: colors.light.black,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      fontSize: 13,
      width: '40%'
    },
    TotalData: {
      color: colors.light.gray,
      fontFamily: 'Inter-Bold',
      fontWeight: '400',
      fontSize: 16
    },
    DownReturnButton: {
      height: 40,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 15,
      justifyContent: 'center',
      backgroundColor: colors.light.white,
      width: '100%'
    },
    TextDownReturnButton: {
      color: colors.light.black,
      fontWeight: '500'
    },
    Cell:{
      flexDirection:'row',
      width: '100%'
    },
    ButtonCallModal: {
      width: '100%',
      backgroundColor: colors.light.blue,
      textAlign: 'center',
      borderRadius: 12,
      padding: 20,
      marginBottom: "4%",
    },
    TextDataModal: {
      color: colors.light.gray,
      fontFamily: 'Inter-Bold',
      fontWeight: '400',
      fontSize: 16,
      width: 279,
    },
    ContainerModal:{
      flex: 1,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    Printer: {
      width: '100%',
      height: 90,
      backgroundColor: '#2974b4',
      borderRadius: 8,
      justifyContent: 'center',
      paddingHorizontal: '10%',
      paddingVertical: '3%',
      marginBottom: '3%'
    },
  });
  