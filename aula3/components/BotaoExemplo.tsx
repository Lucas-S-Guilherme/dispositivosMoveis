import React, {useState} from "react";  
import {
         View,
         Button,
         Text,
         Alert,
         TouchableOpacity

} from 'react-native';
import styles from "../styles";

const BotaoExemplo = () => {
    const showAlert =() => {
        Alert.alert("Botão precionado")
    };


    return(
        <View style = {styles.container}>
            <Button
                title="Precione-me"
                onPress={showAlert}    
            ></Button>

            <TouchableOpacity
                style={styles.button}
                onPress={showAlert}
            ></TouchableOpacity>
        </View>
    )
}

export default BotaoExemplo;