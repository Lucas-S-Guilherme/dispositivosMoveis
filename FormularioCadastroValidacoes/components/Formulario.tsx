import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const SignUpForm = () => {
  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Estados para mensagens de erro
  const [nomeError, setNomeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');

  // Função para validar o formulário
  const validateForm = () => {
    let isValid = true;

    // Validação do nome
    if (!nome) {
      setNomeError('Nome é obrigatório');
      isValid = false;
    } else {
      setNomeError('');
    }

    // Validação do e-mail
    if (!email) {
      setEmailError('E-mail é obrigatório');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('E-mail inválido');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validação da senha
    if (!senha) {
      setSenhaError('Senha é obrigatória');
      isValid = false;
    } else if (senha.length < 6) {
      setSenhaError('Senha deve ter pelo menos 6 caracteres');
      isValid = false;
    } else {
      setSenhaError('');
    }

    return isValid;
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = () => {
    if (validateForm()) {
      // Se o formulário for válido, exibe os dados no console
      console.log('Dados do formulário:', { nome, email, senha });
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'Por favor, corrija os erros no formulário.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      {nomeError ? <Text style={styles.error}>{nomeError}</Text> : null}

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {senhaError ? <Text style={styles.error}>{senhaError}</Text> : null}

      <Button title="Cadastrar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpForm;