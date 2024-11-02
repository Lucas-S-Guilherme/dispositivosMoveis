import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

const ExemploSwipeable = () => {
    const renderRightActions = () => (
        <TouchableOpacity style={styles.botaoExcluir} onPress={() => alert('Item excluído!')}>
            <Text style={styles.textoBotao}>Excluir</Text>
        </TouchableOpacity>
    );

    const renderLeftActions = () => (
        <TouchableOpacity style={styles.botaoEditar} onPress={() => alert('Editar item!')}>
            <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
    );

    return (
        <Swipeable
            renderRightActions={renderRightActions}
            renderLeftActions={renderLeftActions}
        >
            <View style={styles.item}>
                <Text style={styles.textoItem}>Deslize para editar ou excluir</Text>
            </View>
        </Swipeable>
    );
};

const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1, marginTop: 300}}>
            <ExemploSwipeable />
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f1f1f1',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    textoItem: {
        fontSize: 18,
    },
    botaoExcluir: {
        backgroundColor: '#ff5252',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    },
    botaoEditar: {
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    },
    textoBotao: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default App;
