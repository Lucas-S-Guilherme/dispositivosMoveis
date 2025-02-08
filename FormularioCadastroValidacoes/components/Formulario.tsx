import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const SignUpForm = () => {
  // Estados para os campos do formulário
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefoneFixo, setTelefoneFixo] = useState('');
  const [celular, setCelular] = useState('');
  const [nomePai, setNomePai] = useState('');
  const [nomeMae, setNomeMae] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Estados para mensagens de erro
  const [nomeCompletoError, setNomeCompletoError] = useState('');
  const [dataNascimentoError, setDataNascimentoError] = useState('');
  const [cpfError, setCpfError] = useState('');
  const [telefoneFixoError, setTelefoneFixoError] = useState('');
  const [celularError, setCelularError] = useState('');
  const [nomePaiError, setNomePaiError] = useState('');
  const [nomeMaeError, setNomeMaeError] = useState('');
  const [cepError, setCepError] = useState('');
  const [enderecoError, setEnderecoError] = useState('');
  const [numeroError, setNumeroError] = useState('');
  const [cidadeError, setCidadeError] = useState('');
  const [estadoError, setEstadoError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [confirmarSenhaError, setConfirmarSenhaError] = useState('');

  // Função para validar o nome completo
  const validateNomeCompleto = (nome) => {
    if (!nome || nome.split(' ').length < 2) {
      setNomeCompletoError('Nome completo deve conter pelo menos dois nomes.');
      return false;
    }
    setNomeCompletoError('');
    return true;
  };

  // Função para validar a data de nascimento
  const validateDataNascimento = (data) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!data || !regex.test(data)) {
      setDataNascimentoError('Data de nascimento inválida. Use o formato DD/MM/AAAA.');
      return false;
    }
    setDataNascimentoError('');
    return true;
  };

  // Função para validar o CPF
  const validateCpf = (cpf) => {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf || !regex.test(cpf)) {
      setCpfError('CPF inválido. Use o formato XXX.XXX.XXX-XX.');
      return false;
    }
    setCpfError('');
    return true;

        // cpf = cpf.replace (/[^\d]+/g, '');
        // if (cpf.lenght !== 11) {
        //     return false;
        // } 
        // if (/^(\d)\1+$/.test(cpf)) return false;
        // let sum = 0, remainder;
        // for (let i = 1; i <= 9; i++) {
        //     sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
        // }
        // remainder = (sum * 10) % 11;
        // remainder = (remainder === 10 || remainder === 11) ? 0 : remainder;
        // if (remainder !== parseInt(cpf.substring(9,10))) return false;
        // sum = 0;
        // for (let i = 1; i <= 10; i++) {
        //     sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
        // }
        // remainder = (sum * 10) % 11;
        // remainder = (remainder === 10 || remainder === 11) ? 0 : remainder;
        // return remainder === parseInt(cpf.substring(10, 11));

  };

  // Função para validar o telefone fixo
  const validateTelefoneFixo = (telefone) => {
    const regex = /^\(\d{2}\) \d{4}-\d{4}$/;
    if (!telefone || !regex.test(telefone)) {
      setTelefoneFixoError('Telefone fixo inválido. Use o formato (XX) XXXX-XXXX.');
      return false;
    }
    setTelefoneFixoError('');
    return true;
  };

  // Função para validar o celular
  const validateCelular = (celular) => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!celular || !regex.test(celular)) {
      setCelularError('Celular inválido. Use o formato (XX) XXXXX-XXXX.');
      return false;
    }
    setCelularError('');
    return true;
  };

  // Função para validar o CEP
  const validateCep = (cep) => {
    const regex = /^\d{5}-\d{3}$/;
    if (!cep || !regex.test(cep)) {
      setCepError('CEP inválido. Use o formato XXXXX-XXX.');
      return false;
    }
    setCepError('');
    return true;
  };

  // Função para validar o email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !regex.test(email)) {
      setEmailError('Email inválido.');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Função para validar a senha
  const validateSenha = (senha) => {
    if (!senha || senha.length < 8) {
      setSenhaError('Senha deve ter no mínimo 8 caracteres.');
      return false;
    }
    setSenhaError('');
    return true;
  };

  // Função para validar a confirmação de senha
  const validateConfirmarSenha = (confirmarSenha) => {
    if (confirmarSenha !== senha) {
      setConfirmarSenhaError('As senhas não coincidem.');
      return false;
    }
    setConfirmarSenhaError('');
    return true;
  };

  // Função para validar o formulário completo
  const validateForm = () => {
    const isNomeCompletoValid = validateNomeCompleto(nomeCompleto);
    const isDataNascimentoValid = validateDataNascimento(dataNascimento);
    const isCpfValid = validateCpf(cpf);
    const isTelefoneFixoValid = validateTelefoneFixo(telefoneFixo);
    const isCelularValid = validateCelular(celular);
    const isCepValid = validateCep(cep);
    const isEmailValid = validateEmail(email);
    const isSenhaValid = validateSenha(senha);
    const isConfirmarSenhaValid = validateConfirmarSenha(confirmarSenha);

    return (
      isNomeCompletoValid &&
      isDataNascimentoValid &&
      isCpfValid &&
      isTelefoneFixoValid &&
      isCelularValid &&
      isCepValid &&
      isEmailValid &&
      isSenhaValid &&
      isConfirmarSenhaValid
    );
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'Por favor, corrija os erros no formulário.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Seção 1: Informações Pessoais */}
      <Text style={styles.sectionTitle}>Informações Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nomeCompleto}
        onChangeText={(text) => {
          setNomeCompleto(text);
          validateNomeCompleto(text);
        }}
      />
      {nomeCompletoError ? <Text style={styles.error}>{nomeCompletoError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={dataNascimento}
        onChangeText={(text) => {
          setDataNascimento(text);
          validateDataNascimento(text);
        }}
      />
      {dataNascimentoError ? <Text style={styles.error}>{dataNascimentoError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="CPF (XXX.XXX.XXX-XX)"
        value={cpf}
        onChangeText={(text) => {
          setCpf(text);
          validateCpf(text);
        }}
      />
      {cpfError ? <Text style={styles.error}>{cpfError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Telefone Fixo (XX) XXXX-XXXX"
        value={telefoneFixo}
        onChangeText={(text) => {
          setTelefoneFixo(text);
          validateTelefoneFixo(text);
        }}
      />
      {telefoneFixoError ? <Text style={styles.error}>{telefoneFixoError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Celular (XX) XXXXX-XXXX"
        value={celular}
        onChangeText={(text) => {
          setCelular(text);
          validateCelular(text);
        }}
      />
      {celularError ? <Text style={styles.error}>{celularError}</Text> : null}

      {/* Seção 2: Informações Complementares (para menores de idade) */}
      <Text style={styles.sectionTitle}>Informações Complementares</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Pai"
        value={nomePai}
        onChangeText={setNomePai}
      />
      {nomePaiError ? <Text style={styles.error}>{nomePaiError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nome da Mãe"
        value={nomeMae}
        onChangeText={setNomeMae}
      />
      {nomeMaeError ? <Text style={styles.error}>{nomeMaeError}</Text> : null}

      {/* Seção 3: Endereço */}
      <Text style={styles.sectionTitle}>Endereço</Text>
      <TextInput
        style={styles.input}
        placeholder="CEP (XXXXX-XXX)"
        value={cep}
        onChangeText={(text) => {
          setCep(text);
          validateCep(text);
        }}
      />
      {cepError ? <Text style={styles.error}>{cepError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
      />
      {enderecoError ? <Text style={styles.error}>{enderecoError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={setNumero}
      />
      {numeroError ? <Text style={styles.error}>{numeroError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Complemento (opcional)"
        value={complemento}
        onChangeText={setComplemento}
      />

      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      {cidadeError ? <Text style={styles.error}>{cidadeError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={setEstado}
      />
      {estadoError ? <Text style={styles.error}>{estadoError}</Text> : null}

      {/* Seção 4: Informações da Conta */}
      <Text style={styles.sectionTitle}>Informações da Conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateEmail(text);
        }}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => {
          setSenha(text);
          validateSenha(text);
        }}
        secureTextEntry
      />
      {senhaError ? <Text style={styles.error}>{senhaError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmarSenha}
        onChangeText={(text) => {
          setConfirmarSenha(text);
          validateConfirmarSenha(text);
        }}
        secureTextEntry
      />
      {confirmarSenhaError ? <Text style={styles.error}>{confirmarSenhaError}</Text> : null}

      {/* Botão de Submissão */}
      <Button title="Cadastrar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default SignUpForm;