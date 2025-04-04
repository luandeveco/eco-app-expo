import {Stack} from 'expo-router'


export default function Layout() {
  return(
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="movimento/index" options={{headerShown:false}}/>
        <Stack.Screen name="relatorio/index" options={{headerShown:false}}/>
        <Stack.Screen name="configuracoes/index" options={{headerShown:false}}/>
        <Stack.Screen name="impressora/index" options={{headerShown:false}}/>
        <Stack.Screen name="relatorioConfig/index" options={{headerShown:false}}/>
        <Stack.Screen name="aparencia/index" options={{headerShown:false}}/>
        <Stack.Screen name="rota/index" options={{headerShown:false}}/>
        <Stack.Screen name="novoRecibo/index" options={{headerShown:false}}/>
      </Stack>
  )
}