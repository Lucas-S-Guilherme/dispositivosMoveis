import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';

const ExemploModal = () => {
    const [visible, setVisible] = useState(false);

    const mostrarModal = () => {
        setVisible(true);
    };

    const esconderModal = () => {
        setVisible(false);
    };

    return (
        <View style={styles.container}>
            <Button title="Mostrar Modal" onPress={mostrarModal} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={esconderModal}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Este é um Modal!</Text>
                    <Button title="Fechar" onPress={esconderModal} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ExemploModal;