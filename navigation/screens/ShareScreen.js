import * as React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function ShareScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView style={styles.shareScrollView} contentContainerStyle={styles.contentContainer}>

            </ScrollView>
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: '#75975e',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    top: '85%',
                    right: 20,
                    height: 70,
                    backgroundColor: '#75975e',
                    borderRadius: 100,
                }}
                onPress={() => { alert('Button is pressed') }}
            >
                <Text style={{flex:.8, color: 'white', fontSize: 40}}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    shareScrollView: {

    },
    contentContainer: {

    },
});

export default ShareScreen