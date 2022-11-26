import React, {useState, useCallback} from 'react';
import { SafeAreaView, StyleSheet, View, Button, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';


function VideoScreen({navigation}) {

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ScrollView style={styles.videoScrollView} contentContainerStyle={styles.contentContainer}>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    videoScrollView: {

    },
    contentContainer: {

    },
    videos: {
        
    }
});

export default VideoScreen