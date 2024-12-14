import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface mainProps {
    money: number,
    setPage: (num: number) => void,
}

export default function TemplatePage(props: mainProps)
{

    const backOnPress = () => {
        props.setPage(0);
    }

    const pickNumber = () => {
        let randomNumber = Math.random() * 48;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={backOnPress}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    button : {
    flex: 1,
    backgroundColor: '3b5c3c',
    margin: 5,
    padding: 10,
    borderRadius: 10000000,
    position: "absolute",
    top: 180,
    alignSelf: "center",
    borderWidth: 1,
    }
});