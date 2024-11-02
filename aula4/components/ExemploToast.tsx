import React from 'react';
import { View, Button, ToastAndroid, StyleSheet } from 'react-native';

const ExemploToast = () => {
    const mostrarToast = () => {
        ToastAndroid.show("Mensagem exibida com Toast!", ToastAndroid.SHORT);
    };

    const mostrarToastComGravidade = () => {
        ToastAndroid.showWithGravity(
            "Mensagem com posição centralizada!",
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    };

    return (
        <View style={styles.container}>
            <Button title="Mostrar Toast" onPress={mostrarToast} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ExemploToast;
