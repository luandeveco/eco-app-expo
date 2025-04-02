import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, TextInput} from 'react-native';
import colors from '../../assets/themes/colors';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import ModalError from '../../components/ModalError';

export default function Movimento (){

const router = useRouter()

const [disableData, setDisableData] = useState(false);
const [modalVisible, setModalVisible] = useState(false);

const [dataMovementGeneral, setDataMovementGeneral] = useState([
{label: '21/12/2024', value: '21/12/2024'},
{label: '21/12/2024', value: '01/04/2024'},
{label: '21/12/2024', value: '15/05/2024'},
]);
const [bankAccountGeneral, setBankAccountGeneral] = useState([
{label: '9112-x', value: '9112-x'},
{label: '123-d', value: '123-d'},
{label: '323-ff', value: '323-ff'},
]);
const [deactivateAccount, setDeactivateAccount] = useState(false);

return (
<View style={{flex: 1,justifyContent: 'center', marginHorizontal:'5%'}}>
  <View style={styles.titleContainer}>
    <View>
      <Text style={styles.textMens}>
        Olá, Edmilson Brito!👋
      </Text>
      <Text style={styles.textMensa}>Mensageiro</Text>
    </View>
    <Pressable style={{justifyContent:'center'}} onPress={() => router.navigate("/configuracoes")}>
      <FontAwesome name="gear" size={30} color="black" />
    </Pressable>
  </View>      
  <View style={styles.container}>
  <View style={styles.containerMen}>
          <Fontisto name="dollar" size={24} color={colors.light.white} />
          <Text style={styles.textMen}>MOVIMENTO</Text>
  </View>
    <Dropdown
          renderLeftIcon={() => (
            <AntDesign name="calendar" size={24} color={colors.light.white} />
          )}
          data={dataMovementGeneral}
          labelField="label"
          valueField="value"
          onChange={item => console.log(item)}
          //value={dataMovement}
          placeholder="Selecionar a data"
          placeholderStyle={{
            color: disableData == true ? colors.light.white_disable : colors.light.white,
            borderColor: disableData == true ? colors.light.white_disable : colors.light.white,
            fontFamily: 'Inter-Regular',
            fontSize: 17,
            marginLeft:5
          }}
          //disable={disableData || loading == true}
          style={{
            borderColor: disableData == true ? colors.light.white_disable : colors.light.white,
            height: 43,
            width: '100%',
            borderRadius: 8,
            paddingHorizontal: 8,
            borderWidth: 1,
            marginTop: '3%',
          }}
          itemTextStyle={{
            color: disableData == true ? colors.light.white_disable : colors.light.blue,
            textAlign: 'left',
            fontWeight: '700',
          }}
          selectedTextStyle={{
            color: disableData == true ? colors.light.white_disable : colors.light.white,
          }}
          iconColor={disableData == true ? colors.light.white_disable : colors.light.white}
        />
    <Dropdown
          renderLeftIcon={() => (
            <MaterialCommunityIcons name="cash-register" size={24} color={colors.light.white} />
          )}
          data={bankAccountGeneral}
          labelField="label"
          valueField="value"
          //value={bankAccount}
          //disable={disableData || loading == true}
          onChange={item => console.log(item.value)}
          placeholder="Selecione a conta bancária"
          placeholderStyle={{
            color: deactivateAccount == true ? colors.light.white_disable : colors.light.white,
            borderColor: deactivateAccount == true ? colors.light.white_disable : colors.light.white,
            fontFamily: 'Inter-Regular',
            fontSize: 17,
            borderRadius: 500,
            marginLeft:5
          }}
          style={{
            borderColor: deactivateAccount == true ? colors.light.white_disable : colors.light.white,
            height: 43,
            width: '100%',
            borderRadius: 8,
            paddingHorizontal: 8,
            borderWidth: 1,
            marginTop: '3%',
          }}
          itemTextStyle={{
            color: deactivateAccount == true ? colors.light.white_disable : colors.light.black,
          }}
          selectedTextStyle={{
            color: deactivateAccount == true ? colors.light.white_disable : colors.light.white,
          }}
          iconColor={deactivateAccount == true ? colors.light.white_disable : colors.light.white}
        />
    <TextInput
        placeholder="Envelope do depósito"
        underlineColorAndroid="transparent"
        returnKeyType="next"
        placeholderTextColor={colors.light.white}
        keyboardType="default"
        style={styles.inputText}
      />
  </View>
  <Pressable
        //onPress={block == false ? clock : handleMovimento}
        //disabled={loading}
        style={styles.Syncbutton}>
        
          <>
            <View style={styles.buttonContainer}>
              <AntDesign name="sync" size={20} color={colors.light.white} />
              <Text style={styles.buttonText}>Sincronizar</Text>
            </View>
          </>
        
  </Pressable>
  <View style={styles.buttonContainerDown}>
        <Pressable
          onPress={() => router.navigate('/rota')}
          style={styles.downButton}>
          <View style={styles.buttonContainer}>
          <FontAwesome5 name="route" size={18} color={colors.light.white} />
            <Text style={styles.buttonTextDown}>Montar rota</Text>
          </View>
        </Pressable>
        <Pressable
          //onPress={block == false ? clock : handleRelatory}
          style={styles.downButton}>
          <View style={styles.buttonContainer}>
            <AntDesign name="pdffile1" size={24} color={colors.light.white} />
            <Text style={styles.buttonTextDown}>Relatório</Text>
          </View>
        </Pressable>
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
    height: 300,
    paddingHorizontal: 20,
    //justifyContent:'center',
    backgroundColor: colors.light.blue,
    //marginHorizontal: '5%',
    borderRadius: 20,
    justifyContent:'center'
  },
  titleContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal: '2%',
    marginBottom:10,
  },
  textMensa: {
    paddingLeft: '5.5%',
    color: '#7f7f7f',
  },
  textMens: {
    color: colors.light.black,
    fontSize: 20,
    fontWeight: '500',
  },
  textMen: {
    color: colors.light.white,
    fontSize: 25,
    fontWeight: '500',
    marginLeft:5
  },
  inputText: {
    width: '100%',
    height: 50,
    marginTop: 10,
    borderColor: colors.light.white,
    color: colors.light.white,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  containerMen: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainerDown: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "100%",
    justifyContent:'space-between',
    marginTop:10,
    height: '11%'
  },
  buttonText: {
    color: colors.light.white ,
    fontSize: 22,
    marginLeft:5  
  },
  buttonTextDown: {
    color: colors.light.white,
    fontSize: 17,
    marginLeft:5
  },
  downButton: {
    width: '48%',
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.blue,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.85,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Syncbutton: {
    width: '100%',
    height: 80,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light.blue,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1.85,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

