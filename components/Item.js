import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Item = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <LottieView
                autoPlay
                loop
                style={styles.lottieItem}
                source={item.image}
            />
            <View style={{ width: '85%', alignItems: 'center' }}>
                <Text style={styles.quote}>{item.text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        backgroundColor: '#dddddd',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%',
        marginTop: '5%',
        padding: '5%',
    },
    title: {
        fontWeight: 500,
        fontSize: 36,
    },
    lottieItem: {
        flex: 1,
        height: 300,
        width: 300,
    },
    quote: {
        fontWeight: 300,
        fontSize: 20,
    }
});

export default Item;