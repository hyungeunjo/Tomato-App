import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

function Button ({iconName, onPress}) {
    return (
        <View>
            <TouchableOpacity onPressOut={onPress}>
                <FontAwesome name={iconName} size={80} color="white"/>
            </TouchableOpacity>
        </View>

    )
}

export default Button