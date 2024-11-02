import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const ExemploPressable = () => {
    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? 'lightblue' : 'blue' },
                ]}
                onPress={() => alert('Pressionado!')}
            >
                <Text style={styles.texto}>Pressione-me</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    texto: {
        color: 'white',
        fontSize: 18,
    },
});

export default ExemploPressable;
