import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface mainProps {
    money: number,
    setMoney: (num: number) => void,
    setPage: (num: number) => void,
}

export default function TemplatePage(props: mainProps)
{

    const backOnPress = () => {
        props.setPage(0);
    }

    const pickNumber = (x: number, y: number) => { // 0-36 = 0-36; 37 = 00; 38 = x%3=1; 39 = x%3=2; 40 = x%3=0; 41 = 1st 12; 42 = 2nd 12; 43 = 3rd 12; 44 = black; 45 = red; 46 = even; 47 = odd; 48 = 1-18; 49 = 19-36
        let randomNumber = Math.random() * 38;
        if(randomNumber == x)
        {
            props.setMoney(props.money + (y * 35));
            return;
        }
        if((x == 38 && randomNumber % 3 == 1) || (x == 39 && randomNumber % 3 == 2) || ((x == 40 && randomNumber % 3 == 0) && randomNumber != 0))
        {
            props.setMoney(props.money + y);
            return;
        }
        if((x == 41 && (randomNumber <= 12 && randomNumber >=1)) || (x == 42 && (randomNumber <= 24 && randomNumber >=13)) || (x == 43 && (randomNumber <= 36 && randomNumber >=25)))
        {
            props.setMoney(props.money + (y * 2));
            return;
        }
        if(x == 44 && (randomNumber == 2 || randomNumber == 4 || randomNumber == 6 || randomNumber == 8 || randomNumber == 10 || randomNumber == 11 || randomNumber == 13 || randomNumber == 15 || randomNumber == 17 || randomNumber == 20 || randomNumber == 22 || randomNumber == 24 || randomNumber == 26 || randomNumber == 28 || randomNumber == 29 || randomNumber == 31 || randomNumber == 33 || randomNumber == 35))
        {
            props.setMoney(props.money + y);
            return;
        }
        if(x == 45 && !(randomNumber == 2 || randomNumber == 4 || randomNumber == 6 || randomNumber == 8 || randomNumber == 10 || randomNumber == 11 || randomNumber == 13 || randomNumber == 15 || randomNumber == 17 || randomNumber == 20 || randomNumber == 22 || randomNumber == 24 || randomNumber == 26 || randomNumber == 28 || randomNumber == 29 || randomNumber == 31 || randomNumber == 33 || randomNumber == 35 || randomNumber == 0 || randomNumber == 37))
        {
            props.setMoney(props.money + y);
            return;
        }
        if(x == 46 && randomNumber % 2 == 0 && randomNumber != 0)
        {
            props.setMoney(props.money + y);
            return;
        }
        if(x == 47 && randomNumber % 2 == 1)
        {
            props.setMoney(props.money + y);
            return;
        }
        if(x == 48 && (randomNumber >=1 && randomNumber <= 18))
        {
            props.setMoney(props.money + y);
            return;
        }
        if(x == 49 && (randomNumber >=19 && randomNumber <= 36))
        {
            props.setMoney(props.money + y);
            return;
        }
        props.setMoney(props.money - y);
        return;
    }
    //money text; bet # input box; board to place bet; back button; confirm bet button;
    //result: you won/lost  the ball was # red/black   you gained/lost ____ money, new total is ____
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={backOnPress}>
                <Text style={styles.small}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.money}>Money</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    money: {

    },
    button : {
    flex: 1,
    backgroundColor: '#678868',
    position: "absolute",
    alignItems: "center",
    top: "50%",
    borderWidth: 1,
    borderRadius: 100000000,
    width: "40%",
    height: "6%",
    },
    small: {
        flex: 1,
    textAlign: "center",
    fontSize: 40
    }
});