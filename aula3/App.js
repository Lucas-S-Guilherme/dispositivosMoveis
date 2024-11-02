import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextInput2 from './components/TextInput2';
import BotaoExemplo from './components/BotaoExemplo';
import PokemonAPI from './components/PokemonAPI';

export default function App() {
  return (
    <View style={styles.container}>
      <PokemonAPI></PokemonAPI>
      <StatusBar style='auto'/>
      <Text>Está Funcionando</Text>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
