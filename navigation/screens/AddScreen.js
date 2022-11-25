import * as React from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function AddScreen({navigation}) {

    const [title, onChangeTitle] = React.useState(null);
    const [size, onChangeSize] = React.useState(null);
    const [time, onChangeTime] = React.useState(null);
    const [ingredients, onChangeIngredients] = React.useState(null);

    return (
        <SafeAreaView style={styles.layout}>
            <Text
                style={styles.headers}>Recipe Title
            </Text>
            <TextInput
                style={styles.input}
                onChangeTitle={onChangeTitle}
                value={title}
                keyboardType="default"
            />
            <Text style={styles.headers}>
                Serving Size
            </Text>
            <TextInput
                style={styles.input}
                onChangeSize={onChangeSize}
                value={size}
                keyboardType="numeric"
            />
            <Text style={styles.headers}>
                Prep Time
            </Text>
            <TextInput
                style={styles.input}
                onChangeTime={onChangeTime}
                value={time}
                keyboardType="numeric"
            />
            <Text style={styles.headers}>
                Ingredients
            </Text>
            <TextInput
                style={styles.input}
                onChangeIngredients={onChangeIngredients}
                value={ingredients}
                placeholder="+ Ingredient"
                keyboardType="default"
            />
            <Pressable style={styles.button} onPress={() => alert('Done')}>
                <Text style={styles.buttonText}>
                    Done
                </Text>
            </Pressable>
        </SafeAreaView>
        
    );
};

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: "column",
    },
    headers: {
        paddingLeft: 20,
        paddingTop: 10,
        fontWeight: "bold",
        fontSize: 20,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 20,
        borderRadius: 25,
        backgroundColor: "#D3D3D3",
      },
    button: {
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius:25,
        backgroundColor: '#75975e',
        marginHorizontal: "3%",
      },
    buttonText: {
        color: "white",
        fontSize: 17,
    },
  });

export default AddScreen;