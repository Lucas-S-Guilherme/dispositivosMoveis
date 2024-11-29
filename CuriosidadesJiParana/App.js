import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [curiosidade, setCuriosidade] = useState('');
  const [botaoTexto, setBotaoTexto] = useState('Mostrar Curiosidade');

  const curiosidades = [
    "Ji-Paraná é conhecida como a 'Capital da Pecuária Leiteira' e possui o segundo maior PIB de Rondônia.",
    "O nome 'Ji-Paraná' significa 'Rio dos Machados' em tupi, devido às pedras que se assemelham a machados indígenas no rio Machado.",
    "A cidade é chamada de 'Coração de Rondônia' por estar localizada no centro do estado e por abrigar uma ilha em formato de coração na confluência dos rios Machado e Urupá.",
    "Em 2010, a travesti Vanessão, de Ji-Paraná, tornou-se um meme nacional após um vídeo viralizar, onde ela exigia '20 reais' por um serviço prestado.",
    "Ji-Paraná possui um dos maiores parques de exposições da região norte, onde ocorre anualmente a Expojipa, uma das maiores feiras agropecuárias do estado.",
    "A cidade é cortada pelo rio Machado, que divide Ji-Paraná em dois distritos: Primeiro e Segundo.",
    "O Museu das Comunicações Marechal Rondon, localizado em Ji-Paraná, foi construído em 1912 e serviu como estação telegráfica.",
    "Ji-Paraná é a segunda cidade mais populosa de Rondônia, com uma população estimada de 131.026 habitantes em 2021.",
    "A cidade possui uma forte influência cultural dos migrantes sulistas que chegaram na década de 1970.",
    "O Teatro Dominguinhos é o principal espaço cultural da cidade, sediando diversos eventos artísticos e culturais."
  ];

  const mostrarCuriosidade = () => {
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    setCuriosidade(curiosidades[indiceAleatorio]);
    setBotaoTexto('Mostrar Mais Curiosidades');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>
          Feliz Aniversário, Ji-Paraná!
        </Text>
        <Text style={styles.subheading}>
          Hoje comemoramos mais um ano de história e progresso dessa cidade incrível!
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title={botaoTexto}
            onPress={mostrarCuriosidade}
            color="#8A2BE2"
          />
        </View>
        {curiosidade ? (
          <Text style={styles.curiosidade}>
            {curiosidade}
          </Text>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    color: '#8A2BE2',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
  },
  curiosidade: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});
