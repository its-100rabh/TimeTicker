import React, { useState, useRef } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const StopwatchApp = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [records, setRecords] = useState([]);
  const intervalRef = useRef();

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };


  const resetTimer = () => {
    setTimer(0);
    setRecords([]);
  };


  const formatTime = (time) => {
    const pad = (num) => (num < 10 ? '0' + num : num);
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <View style={styles.container}>

      <Text style={styles.timer}>{formatTime(timer)}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title={isRunning ? 'Stop' : 'Start'}
          onPress={isRunning ? stopTimer : startTimer}
          color="orange"
          height="5"

        />
        <Button
          title="Reset"
          onPress={resetTimer}
          color="orange"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'black',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerContainer: {
    marginBottom: 20,
  },
  timer: {
    fontSize: 70,
    color: 'white',
    alignItems: 'center',
    top: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 50,
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default StopwatchApp;
