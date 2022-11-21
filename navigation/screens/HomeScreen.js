import * as React from 'react';
import { View, Text, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
            <Button 
                onPress={() => alert('This is the "Home" screen.')} 
                title="Vegetarian">
            </Button>
            <Button 
                onPress={() => alert('This is the "Home" screen.')} 
                title="Cuisine">
            </Button>
        </View>
    );
}