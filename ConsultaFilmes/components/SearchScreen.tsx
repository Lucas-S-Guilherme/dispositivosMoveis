import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

// 🔹 Definir o tipo do filme baseado na resposta da API do TMDB
type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path?: string; // Opcional
};

// 🔹 Definir o tipo da navegação
type RootStackParamList = {
  Search: undefined;
};

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]); // Definir o estado como um array de `Movie`

  const searchMovies = async () => {
    try {
      const response = await axios.get<{ results: Movie[] }>(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
            query: query,
          },
        }
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={searchMovies} />
      {movies.length > 0 && (
        <View>
          <Text>Resultados:</Text>
          {movies.map((movie) => (
            <Text key={movie.id}>{movie.title}</Text> // 🔹 Agora o TypeScript reconhece `title`
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default SearchScreen;
