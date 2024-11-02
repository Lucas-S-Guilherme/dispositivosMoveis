import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const ExemploSlider = () => {
    const [valor, setValor] = useState(50);

    return (
        <View>
            <Text>Valor selecionado: {valor}%</Text>
            <Slider
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={valor}
                onValueChange={(novoValor) => setValor(novoValor)}
            />
        </View>
    );
};

export default ExemploSlider;