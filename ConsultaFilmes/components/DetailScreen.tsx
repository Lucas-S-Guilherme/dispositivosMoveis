import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// 🔹 Definição dos tipos para a navegação
type RootStackParamList = {
  Details: { movieId: number };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type Props = {
  route: DetailsScreenRouteProp;
};

// 🔹 Definição do tipo do estado `movie`
type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path?: string;
};

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get<MovieDetails>(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {movie.poster_path && (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
          style={styles.poster}
        />
      )}
      <Text style={styles.title}>{movie.title}</Text>
      <Text>{movie.release_date}</Text>
      <Text>{movie.overview}</Text>
      <Text>Avaliação: {movie.vote_average}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default DetailsScreen;
