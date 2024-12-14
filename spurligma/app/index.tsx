import React, { Component, useEffect,  } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, } from 'react-native';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage'
import backgroundImage from "../assets/images/ezgif-6-337ceb1b6f.gif";
import MainPage from "./mainPage.tsx";

export default function Index() {
  const [page, setPage] = React.useState(0);
  const [money, setMoney] = React.useState(100);

  const getMoney = async () => {
    const amount = await AsyncStorage.getItem("money");
  }
  
  useEffect(() => {
    getMoney();
  });
  useEffect(() => {
    AsyncStorage.setItem("money", money.toString());
  }, [money]);

  const start = () => {
    setPage(1);
  }

  if(page === 0)
  {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.background} source={backgroundImage}>
        <Text style={styles.title}> The Cash-ino Roulette</Text>
        <TouchableHighlight style={styles.body} onPress={start}>
          <Text style={styles.small}>Start!</Text>
        </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
  else if(page === 1)
  {
    return(<MainPage money={money} setPage={setPage}/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 2,
    fontSize: 36,
    textAlign: "center",
    paddingTop: "10%",
  },
  small: {
    flex: 1,
    textAlign: "center",
    paddingTop: "5%",
    fontSize: 18
  },
  body: {
    flex: 1,
    backgroundColor: '#3b5c3c',
    position: "absolute",
    alignItems: "center",
    top: "50%",
    borderWidth: 1,
    borderRadius: 100000000,
    width: "40%",
    height: "6%",
  },
  background: {
    flex: 1,
    alignItems: "center",
  }
});