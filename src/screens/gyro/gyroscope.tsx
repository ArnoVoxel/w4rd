import React, { useState, useEffect } from 'react';
import { Pressable, Text, TouchableOpacity, View, StyleSheet, SafeAreaView } from "react-native";
import { Gyroscope, } from 'expo-sensors';
import globalStyles from "../../style/globalStyles";
import { Subscription } from 'expo-sensors/build/DeviceSensor';

function GyroscopePage({ navigation }: { navigation: any }) {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [{ xColor, yColor, zColor }, setColor] = useState({
    xColor: 0,
    yColor: 0,
    zColor: 0,
  });
  const [subscription, setSubscription] = useState<Subscription | null>(null);

  const _slow = () => Gyroscope.setUpdateInterval(1000);
  const _fast = () => Gyroscope.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(
      Gyroscope.addListener(gyroscopeData => {
        setData(gyroscopeData);
        setColor({
          xColor: Math.round(Math.abs(gyroscopeData.x * 255)),
          yColor: Math.round(Math.abs(gyroscopeData.y * 255)),
          zColor: Math.round(Math.abs(gyroscopeData.z * 255)),
        });
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ backgroundColor: `rgb(${xColor},${yColor},${zColor})` }}>
        <Text style={styles.text}>Gyroscope:</Text>
        <Text style={styles.text}>x: {x}</Text>
        <Text style={styles.text}>y: {y}</Text>
        <Text style={styles.text}>z: {z}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
            <Text>{subscription ? 'On' : 'Off'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
            <Text>Slow</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={_fast} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GyroscopePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});