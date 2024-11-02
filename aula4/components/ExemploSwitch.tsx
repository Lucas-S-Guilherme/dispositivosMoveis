import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const ExemploSwitch = () => {
    const [ligado, setLigado] = useState(false);

    return (
        <View>
            <Text>Alternador:</Text>
            <Switch
                value={ligado}
                onValueChange={(novoValor) => setLigado(novoValor)}
            />
            <Text>Status: {ligado ? "Ligado" : "Desligado"}</Text>
        </View>
    );
};

export default ExemploSwitch;
