import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    card: {
        height: 300,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 50,
    },
    cardContent: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%',
    },
});