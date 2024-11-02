import React from 'react';
import { FlatList, Text, View } from 'react-native';

const dados = Array.from({ length: 1000 }, (_, i) => ({ id: i.toString(), titulo: `Item ${i + 1}` }));

const ExemploFlatList = () => {
    return (
        <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={{ padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text style={{ fontSize: 18 }}>{item.titulo}</Text>
                </View>
            )}
        />
    );
};

export default ExemploFlatList;
