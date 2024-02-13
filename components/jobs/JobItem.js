import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import HTML from 'react-native-render-html';

function JobItem({ title, salary, male_female, job_description }) {
    return (
        <Pressable
            style={styles.pressable}
            onPress={() => {
                alert(`Item ${title} pressed`);
            }}
        >
            <View style={styles.card}>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <HTML source={{ html: job_description }} style={styles.cardDescription} />
                    <Text style={styles.cardText}>{male_female}</Text>
                </View>
                <View style={styles.cardFooter}>
                    <Text style={styles.cardAmount}>{salary}</Text>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressable: {
        overflow: 'hidden',
        borderRadius: 8,
        elevation: 5,
        backgroundColor: '#fff',
        margin: 10,
    },
    card: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    cardBody: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardDescription: {
        color: '#333',
        marginBottom: 10,
    },
    cardText: {
        color: '#666',
        marginBottom: 10,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    cardAmount: {
        fontSize: 16,
        color: '#007bff',
        marginRight: 10,
    },
});

export default JobItem;
