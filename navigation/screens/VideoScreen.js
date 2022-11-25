import * as React from 'react';
import { View, Text} from 'react-native';

function VideoScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('This is the "Video" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Video Screen</Text>
        </View>
    );
};

export default VideoScreen