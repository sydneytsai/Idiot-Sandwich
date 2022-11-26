import React, {useState, useCallback} from 'react';
import { SafeAreaView, StyleSheet, View, Button, Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';


function VideoScreen({navigation}) {

    return (
        <SafeAreaView style={styles.view}>
            <ScrollView style={styles.videoScrollView} contentContainerStyle={styles.contentContainer}>
                <YoutubePlayer height={230} width={350} videoId='5iRnHiX6oTw' style={styles.videos}>
                </YoutubePlayer>
                <YoutubePlayer height={230} width={350} videoId='UIOW18kRDEA' style={styles.videos}>
                </YoutubePlayer>
                <YoutubePlayer height={230} width={350} videoId='G9feY4a3dOU' style={styles.videos}>
                </YoutubePlayer>
                <YoutubePlayer height={230} width={350} videoId='j6TtbCDKBQc' style={styles.videos}>
                </YoutubePlayer>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    view: {
        overflow: "hidden",
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    videoScrollView: {
        marginTop: 20,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    videos: {
        padding: 40,
    }
});

export default VideoScreen