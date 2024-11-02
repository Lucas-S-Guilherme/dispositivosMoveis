import React, {useState} from "react";  
import {
         View,
         TextInput,
         Text,
         TouchableOpacity

} from 'react-native';
import styles from "../styles";
import axios from "axios";

const PokemonAPI = () => {
    const [ pokemon, setPokemon ] = useState('');
    const [nome, setNome] = useState('');
    
    const procurarPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/${pokemon.toLocaleLowerCase()}');
        setNome(response.data.name);
        console.log(response);
            
        } catch (error) {
            Alert.alert("Pokemon não encontrado")
            setNome('');
        }
        
        return(
            <View>
                <TextInput
                placeholder="Digite o nome do Pokemon"
                value={pokemon}
                onChangeText={setPokemon}
                />

                <TouchableOpacity onPress={procurarPokemon}>
                    <Text>Buscar</Text>
                </TouchableOpacity>

                {nome ? <Text>{nome.toUpperCase()}</Text> : null }



            </View>
        )

    }
}

export default PokemonAPI;
