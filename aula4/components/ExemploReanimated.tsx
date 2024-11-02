import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const ExemploReanimated = () => {
    const posicaoX = useSharedValue(0);

    const iniciarAnimacao = () => {
        posicaoX.value = withTiming(posicaoX.value === 0 ? 150 : 0, { duration: 1000 });
    };

    const estiloAnimado = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: posicaoX.value }],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, estiloAnimado]} />
            <Button title="Iniciar Animação" onPress={iniciarAnimacao} />
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
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
    },
});

export default ExemploReanimated;
