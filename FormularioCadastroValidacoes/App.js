import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import TextInputExample from './components/TextInput'
import SignUpForm from './components/Formulario';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Formulário de Cadastro e Validação</Text>
      <StatusBar style="auto" />
      <SignUpForm></SignUpForm>
      
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

