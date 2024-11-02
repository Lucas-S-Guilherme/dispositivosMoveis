import React from 'react';
import { View, Button, Alert } from 'react-native';

const ExemploAlert = () => {
    const mostrarAlerta = () => {
        Alert.alert(
            "Título do Alerta",
            "Esta é a mensagem do alerta.",
            [
                { text: "Cancelar", onPress: () => console.log("Cancelar pressionado") },
                { text: "OK", onPress: () => console.log("OK pressionado") }
            ],
            { cancelable: false }
        );
    };

    return (
        <View>
            <Button title="Mostrar Alerta" onPress={mostrarAlerta} />
        </View>
    );
};

export default ExemploAlert;
