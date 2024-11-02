import React, { useState } from 'react';
import { FlatList, Text, View, RefreshControl } from 'react-native';

const ExemploRefreshControl = () => {
    const [dados, setDados] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh = () => {
        setIsRefreshing(true);
        // Simula uma atualização de dados
        setTimeout(() => {
            setDados(Array.from({ length: 20 }, (_, i) => `Item ${i + 21}`));
            setIsRefreshing(false);
        }, 2000);
    };

    return (
        <FlatList
            data={dados}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <View style={{ padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
                    <Text style={{ fontSize: 18 }}>{item}</Text>
                </View>
            )}
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
        />
    );
};

export default ExemploRefreshControl;
