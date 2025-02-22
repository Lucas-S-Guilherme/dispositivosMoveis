import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';

// 🔹 Definir o tipo do filme baseado na resposta da API do TMDB
type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path?: string;
  release_date: string;
};

// 🔹 Definir o tipo da navegação
type RootStackParamList = {
  Search: undefined;
  Details: { movieId: number };
};

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>;

type Props = {
  navigation: SearchScreenNavigationProp;
};

const SearchScreen: React.FC<Props> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const searchMovies = async (pageNumber: number = 1) => {
    if (!query) {
      setError('Por favor, insira um termo de busca.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<{ results: Movie[]; total_pages: number }>(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
            query: query,
            page: pageNumber,
          },
        }
      );
      if (pageNumber === 1) {
        setMovies(response.data.results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      }
      setTotalPages(response.data.total_pages);
      if (response.data.results.length === 0) {
        setError('Nenhum filme encontrado.');
      }
    } catch (error) {
      console.error(error);
      setError('Ocorreu um erro ao buscar os filmes.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      searchMovies(nextPage);
    }
  };

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <TouchableOpacity
      style={styles.movieItem}
      onPress={() => navigation.navigate('Details', { movieId: item.id })}
    >
      {item.poster_path && (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
          style={styles.poster}
        />
      )}
      <View style={styles.movieInfo}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Text style={styles.movieReleaseDate}>{item.release_date}</Text>
        <Text style={styles.movieOverview} numberOfLines={3}>
          {item.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={() => searchMovies(1)} />

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : movies.length > 0 ? (
        <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={renderFooter}
        />
      ) : (
        <Text style={styles.noResultsText}>Nenhum filme encontrado.</Text>
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
  movieItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  movieInfo: {
    flex: 1,
    marginLeft: 16,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieReleaseDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  movieOverview: {
    fontSize: 14,
    color: '#444',
    marginTop: 8,
  },
  loader: {
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 16,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
});

export default SearchScreen;