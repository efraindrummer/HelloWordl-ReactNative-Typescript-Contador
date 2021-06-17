import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

//const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {
    
    const { width, height } = useWindowDimensions();
    
    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.50
                }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.titulo}>W: {width}, H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        //width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    titulo: {
        fontSize: 30,
        textAlign: 'center'
    }
});
