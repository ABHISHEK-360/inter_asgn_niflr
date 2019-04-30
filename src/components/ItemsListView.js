import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import RowLayout from './RowLayout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const ItemsListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <RowLayout
                    title={item.title}
                    image_url={item.image_url}
                />}

                keyExtractor={(item) => item.key.toString() }

            />

    </View>
);

export default ItemsListview;
