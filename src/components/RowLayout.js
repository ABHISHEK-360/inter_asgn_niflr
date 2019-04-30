import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RowLayout = ({ title, image_url }) => (
    <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>

    </View>
);

export default RowLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft:10,
        marginRight:10,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 30,
        color: '#123abc',
    },
    container_text: {
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    photo: {
        height: 50,
        width: 50,
    },
});
