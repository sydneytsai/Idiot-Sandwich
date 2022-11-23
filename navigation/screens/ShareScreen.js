import * as React from 'react';
import { View, Text} from 'react-native';

export default function ShareScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Share" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Share Screen</Text>
        </View>
    );
}