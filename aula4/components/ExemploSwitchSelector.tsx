import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const ExemploSwitchSelector = () => {
    const [valor, setValor] = useState("opcao1");

    const opcoes = [
        { label: "Opção 1", value: "opcao1" },
        { label: "Opção 2", value: "opcao2" },
    ];

    return (
        <View style={styles.container}>
            <SwitchSelector
                options={opcoes}
                initial={0}
                onPress={value => setValor(value)}
                textColor={'black'}
                selectedColor={'white'}
                buttonColor={'blue'}
                borderColor={'blue'}
            />
            <Text>Valor selecionado: {valor}</Text>
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

export default ExemploSwitchSelector;
