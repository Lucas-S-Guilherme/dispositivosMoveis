import React, { useState } from 'react';
import { View, Button, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ExemploImagePicker = () => {
    const [imagem, setImagem] = useState(null);

    const tirarFoto = async () => {
        // Solicita permissão para acessar a câmera
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Permissão para acessar a câmera é necessária.');
            return;
        }

        // Abre a câmera para tirar uma foto
        const resultado = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!resultado.cancelled) {
            setImagem(resultado.uri);  // Salva a URI da imagem tirada
        }
    };

    return (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Button title="Tirar Foto" onPress={tirarFoto} />
            {imagem ? (
                <Image source={{ uri: imagem }} style={{ width: 300, height: 300, marginTop: 20 }} />
            ) : (
                <Text style={{ marginTop: 20 }}>Nenhuma foto tirada</Text>
            )}
        </View>
    );
};

export default ExemploImagePicker;
