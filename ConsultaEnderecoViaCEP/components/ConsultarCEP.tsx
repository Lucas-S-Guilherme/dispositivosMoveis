import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';

const CEPConsultation = () => {
  const [cep, setCep] = useState('');
  const [addressData, setAddressData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCepChange = (text: string) => {
    // Remove caracteres não numéricos e limita a 8 dígitos
    const cleanedText = text.replace(/\D/g, '').slice(0, 8);
    setCep(cleanedText);
  };

  const fetchAddress = async () => {
    if (cep.length !== 8) {
      setError('CEP deve ter exatamente 8 dígitos.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAddressData(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        throw new Error('CEP não encontrado.');
      }

      setAddressData(data);
    } catch (err) {
      setError(err.message || 'Erro ao buscar o CEP. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP (apenas números)"
        value={cep}
        onChangeText={handleCepChange}
        keyboardType="numeric"
        maxLength={8}
      />

      <Button
        title="Consultar"
        onPress={fetchAddress}
        disabled={isLoading || cep.length !== 8}
      />

      {isLoading && <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />}

      {error && (
        <Text style={styles.error}>{error}</Text>
      )}

      {addressData && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Logradouro: {addressData.logradouro}</Text>
          <Text style={styles.resultText}>Bairro: {addressData.bairro}</Text>
          <Text style={styles.resultText}>Cidade: {addressData.localidade}</Text>
          <Text style={styles.resultText}>Estado: {addressData.uf}</Text>
          <Text style={styles.resultText}>CEP: {addressData.cep}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  loader: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default CEPConsultation;