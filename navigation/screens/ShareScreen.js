import * as React from 'react';
import { SafeAreaView, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function ShareScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView style={styles.shareScrollView} contentContainerStyle={styles.contentContainer}>

            </ScrollView>
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