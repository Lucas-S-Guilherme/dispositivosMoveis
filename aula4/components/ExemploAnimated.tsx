import React, { useRef } from 'react';
import { View, Text, Animated, Button, StyleSheet } from 'react-native';

const ExemploAnimated = () => {
    const opacidade = useRef(new Animated.Value(0)).current;
    const animacaoAtiva = useRef(false);

    const alternarAnimacao = () => {
        Animated.timing(opacidade, {
            toValue: animacaoAtiva.current ? 0 : 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        // Alterna entre fade in e fade out
        animacaoAtiva.current = !animacaoAtiva.current;
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { opacity: opacidade }]}>
                <Text style={styles.texto}>Animação de Fade</Text>
            </Animated.View>
            <Button title="Alternar Animação" onPress={alternarAnimacao} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 200,
        height: 200,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    texto: {
        color: 'white',
        fontSize: 18,
    },
});

export default ExemploAnimated;
