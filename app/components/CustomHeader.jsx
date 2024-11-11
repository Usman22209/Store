import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import typography from '../styles/Typo';
import { vw, vh } from '../utility/utility';

const CustomHeader = ({ title }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const onBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {route.name !== 'Landing' && (
                <TouchableOpacity 
                    onPress={onBackPress} 
                    style={styles.backButton}
                    activeOpacity={0.7} // To give feedback when pressed
                >
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            )}
            <Text style={[styles.title, typography.medium]}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7F3DFF',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: vw(90),
        alignSelf: 'center',
        elevation: 4,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 16, // Position on the left side of the container
        zIndex: 10, // Ensure it is on top of other elements
        padding: 8, // Make the touch area larger and easier to tap
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        flex: 1, // Ensures title stays centered in the middle
       color: 'white',
    },
});

export default CustomHeader;
