import React,{useState} from 'react';
import {Pressable, Text, View, StyleSheet, Dimensions, Switch, StatusBar, VirtualizedList} from 'react-native';
import colors from '../../assets/themes/colors';
import { Line } from '../../components/Line';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const {width, height} = Dimensions.get('window');

interface Movement {
      id: string;
      recibo:string;
      ordem:string;
      numero: string;
      turno: string;
      nome: string;
      endereco:string;
      REFERENCIA: string;
};

const Rota = () => {

const router = useRouter()

const [loading, setLoading] = useState(false);
const [filterOpen, setFilterOpen] = useState(false);
const [isEnabled, setIsEnabled] = useState(false);
const [counties, setcounties] = useState([]);
const movement = [
      {
            id:'0',
            recibo:'R$ 20,00',
            ordem:'1',
            numero: '6086511',
            turno: 'INTEGRAL',
            nome: '118669 - MIRACI DE ARAÚJO BEZERRA',
            endereco: 'RUA MARAGUATIBA, 151',
            referencia: 'PROXIMO A BIBLIOTECA'
      },
      {
            id:'1',
            recibo:'R$ 20,00',
            ordem:'2',
            numero: '473989',
            turno: 'INTEGRAL',
            nome: '983 - VERNANDA MATIAS DA SILVA',
            endereco: 'R BARRA PIRAI, 2273, 2273',
            referencia: 'PROX AO HOSPITAL SANTA CATARINA'
      }
]

const [selectedId, setSelectedId] = useState<number>();

function cleanFilter() {
      // setMunicipalitySelected('');
      // setNeighborhoodSelected('');
      // filterStatus(statusSelected);
      // setNeighborhoods([]);
    }

const toggleSwitch = () => {
      setSelectedId(0);
      setIsEnabled(previousState => !previousState);
};

const renderItem = ({item}:any) => {
      return(
      <Pressable onPress={() => router.navigate('/novoRecibo')} style={styles.CardReceipt}>
            <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection:'row'}}>
                        <Text style={styles.TitleReceipt}>RECIBO: </Text>
                        <Text style={styles.ContributorData}>{item.recibo}</Text>      
                        <Text style={styles.TitleReceipt}>{'   '}ORDEM: </Text>
                        <Text style={styles.ContributorData}>{item.ordem}</Text>       
                  </View>
            </View>
            <Line/>
            <View style={{flexDirection: 'row'}}>
                  <Text style={styles.TitleReceipt}>Nº: </Text>
                  <Text style={styles.ContributorData}>{item.numero}</Text>
                  <Text style={styles.TitleReceipt}>{'   '}TURNO: </Text>
                  <Text style={styles.ContributorData}>{item.turno}</Text> 
            </View>
            <View style={{flexDirection: 'row', width:'90%'}}>
                  <Text style={styles.TitleReceipt}>NOME: </Text>
                  <Text style={styles.ContributorData}>{item.nome}</Text> 
            </View>
            <View style={{flexDirection: 'row'}}>
                  <Text style={styles.TitleReceipt}>ENDEREÇO: </Text>
                  <Text style={styles.ContributorData}>{item.endereco}</Text> 
            </View>
            <View style={{flexDirection: 'row', width:'90%'}}>
                  <Text style={styles.TitleReceipt}>REFERÊNCIA: </Text>
                  <Text style={styles.ContributorData}>{item.referencia}</Text> 
            </View>
      </Pressable>  
      )
}


return (
<View style={styles.view}>
      <StatusBar backgroundColor={colors.light.blue}/>
            {/* <BackButton onPress={handleReturn} /> */}
      <View
      style={[
            styles.FilterBox,
            filterOpen == true ? {height: height * 0.38} : {},
      ]}>
      <Pressable
            style={styles.FilterLine}
            onPress={() =>  setFilterOpen(filterOpen == true ? false : true)}>
            <Entypo name={filterOpen ? "chevron-down" : "chevron-right"} size={24} color="black" />
            <Text style={styles.TextFilter}>{'FILTRAR'}</Text>
      </Pressable>
      {filterOpen == true ? (
      <View
      style={{
            alignSelf: 'flex-end',
            width: '40%',
            height: '19%',
            marginTop: '2%',
            marginRight: '5%',
      }}>
            <Pressable
            onPress={cleanFilter}
            style={{
                  backgroundColor: colors.light.blue,
                  borderRadius: 8,
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
            }}>
                  <View style={{flexDirection: 'row'}}>
                        <AntDesign name="closecircleo" size={20} color={colors.light.white} />
                        <Text
                        style={{color: colors.light.white, marginLeft: '2%', fontSize: 12}}>
                        {' Limpar Filtro'}
                        </Text>
                  </View>
            </Pressable>
      </View>
      ) : (
      ''
      )}
      {filterOpen == true ? (
      <>
            <Dropdown
                  data={[ ]}
                  labelField="descricao"
                  valueField="codigo"
                  //value={statusMessenger.find(s => s.codigo == statusSelected)}
                  containerStyle={{
                  top: '-0.2%',
                  borderRadius: 8,
            }}
            style={{
                  height: 43,
                  width: '95%',
                  borderColor: colors.light.gray,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  marginTop: '3%',
            }}
                  onChange={item => console.log('qq')}
                  placeholder="STATUS"
                  placeholderStyle={{
                  color: colors.light.black,
                  borderColor: colors.light.gray,
                  fontFamily: 'Inter-Regular',
                  fontSize: 17,
            }}
                  itemTextStyle={{color: colors.light.black}}
                  selectedTextStyle={{
                  color: colors.light.black,
            }}
            iconColor={colors.light.black}
            disable={isEnabled == true}
            />
            <Dropdown
            data={counties.map(m => {
            //const pureName = m.descricao.split(' (')[0].trim();
            return {
                  // ...m,
                  // label: `${pureName} (${m.contagem || 0})`,
                  // value: pureName,
            };
            })}
                  labelField="label"
                  valueField="value"
                  //value={municipalitySelected}
                  onChange={item => console.log('aaa')}
                  placeholder="MUNICÍPIO"
                  placeholderStyle={{
                  color: colors.light.black,
                  fontFamily: 'Inter-Regular',
                  fontSize: 17,
            }}
                  containerStyle={{borderRadius: 8}}
                  style={{
                  height: 43,
                  width: '95%',
                  borderColor: colors.light.gray,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  marginTop: '3%',
            }}
                  itemTextStyle={{color: colors.light.black}}
                  selectedTextStyle={{color: colors.light.black}}
                  iconColor={colors.light.black}
                  disable={isEnabled === true}
            />
            <Dropdown
                  data={[]}
                  labelField="label"
                  valueField="value"
                  //value={neighborhoodSelected}
                  onChange={item => console.log('bbb')}
                  placeholder="BAIRRO"
                  placeholderStyle={{
                  color: colors.light.black,
                  fontFamily: 'Inter-Regular',
                  fontSize: 17,
                  }}
                  containerStyle={{borderRadius: 8}}
                  style={{
                  height: 43,
                  width: '95%',
                  borderColor: colors.light.gray,
                  borderRadius: 8,
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  marginTop: '3%',
                  }}
                  itemTextStyle={{color: colors.light.black}}
                  selectedTextStyle={{color: colors.light.black}}
                  iconColor={colors.light.black}
                  disable={isEnabled === true}
            />
      </>
      ) : (
      ''
      )}
      </View>
      <View style={styles.SetRouteBoxFilter}>
            <View style={styles.SetRouteLine}>
                  <View>
                        <Text style={styles.TextFilter}>MONTAR ROTA</Text>
                  </View>
                  <View>
                        <Switch
                        style={{height:24}}
                        trackColor={{false: colors.light.gray, true: '#81b0ff'}}
                        thumbColor={isEnabled ? colors.light.blue : colors.light.white}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        />       
                  </View>      
            </View>
      </View>

      <VirtualizedList
      style={{
            width: '100%',
            height: '100%',
      }}
      renderItem={renderItem}
      keyExtractor={(item: Movement) => item.id}
      data={movement}
      showsVerticalScrollIndicator={false}
      getItem={(data, index) => data[index]}
      getItemCount={data => data.length}
      /> 
      {/* <ModalError
      Title={modalError.Title}
      Message={modalError.Message}
      status={modalVisible}
      onClose={() => setModalVisible(false)}
      /> */}
</View>
);
}

export const styles = StyleSheet.create({
view: {
      flex: 1,
      backgroundColor: colors.light.blue,
      paddingHorizontal: '2%',
      alignItems: 'center'
},
text: {
      marginTop: '5%',
      color: colors.light.black,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      fontSize: 16,
},
CardReceipt: {
      width: '100%',
      marginBottom: 15,
      borderRadius: 8,
      backgroundColor: colors.light.white,
      padding:20,
},

ReceiptData: {
      color: colors.light.black,
      alignItems: 'center',
      display: 'flex',
      gap: 15,
},
TitleReceipt: {
      color: colors.light.black,
      fontWeight: 'bold',
      fontSize: 18
},
ReceiptDataText: {
      color: colors.light.gray,
      fontWeight: '400',
      fontSize: 16
},
ContributorData: {
      color: colors.light.gray,
      fontWeight: '400',
      fontSize: 16,
      minHeight: 10,
},
ReceiptDataBox: {
      flexDirection: 'row',
      alignItems: 'center',
      display: 'flex',
      gap: 15,
      width: "100%"
},
FilterBox: {
      width: '100%',
      top: 60,
      marginBottom: 75,
      borderRadius: 8,
      backgroundColor: colors.light.white,
      paddingLeft: 15,
      paddingVertical: 10
},
TextFilter: {
      color: 'black',
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      fontSize: 18
},
ButtonCall: {
      width: '55%',
      color: colors.light.black
},
FilterLine: {
      width: '100%',
      flexDirection: 'row'
},
SetRouteLine: {
    width: '80%',
    flexDirection: 'row',
    marginVertical: '2%'
},
SetRouteBox: {
      width: '100%',
      height: 40,
      marginBottom: 15,
      borderRadius: 20,
      backgroundColor: colors.light.white,
      paddingLeft: 25,
      paddingTop: 10
},
SetRouteBoxFilter: {
    width: '100%',
    height: 42,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: colors.light.white,
    paddingLeft: 25,
    justifyContent: 'flex-start',
    alignContent:'center'
},
})

export default Rota;