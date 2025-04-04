import React, {useEffect, useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../assets/themes/colors';
import { ModalProps } from '../types/Modal';

export default function ModalError({Title, Message, status, onClose} : ModalProps){
  const [visable, setVisable] = useState(false);
  useEffect(() => {
    setVisable(status);
  }, [status]);

  const handleClose = () => {
    setVisable(false);
    onClose();
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visable}>
        <TouchableWithoutFeedback>
          <View style={styles.container}>
            <View style={styles.containerModal}>
              <Image resizeMode="contain" source={require('../assets/img/mensageiroNOT.png')} style={{width: 250, height: 200, marginVertical: '5%'}}/>
              <Text style={styles.textColorTitle}>{Title}</Text>
              <Text style={styles.textColorMessage}>{Message}</Text>
              <View style={styles.containerIcon}>
                <AntDesign name="closecircleo" size={80} color={colors.light.red}/>
              </View>
              <TouchableOpacity style={styles.button} onPress={handleClose}>
                <Text style={styles.buttonText}>Entendido</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: '5%',
  },
  containerModal:{
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  containerIcon:{
    width:82,
    height:82,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20
  },
  textColorTitle: {
    color: "#2974b5",
    fontWeight:'bold',
    fontSize: 28,
    marginBottom: '5%',
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColorMessage: {
    color: "#2974b5",
    fontWeight:'400',
    fontSize: 18,
    marginBottom: '5%',
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2974b5",
    height: "10%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 10,
    paddingHorizontal:"30%",
    marginBottom: '5%'
  },
  buttonText: {
    color:"#ffffff",
    fontSize: 18,
    fontWeight:'400'
  }
})
