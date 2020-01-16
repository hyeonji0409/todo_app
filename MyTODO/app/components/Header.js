import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.textcontainer}>MyTodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create( {
    headercontainer: {
        marginTop: 50,
        marginBottom: 50,
    },
    headertext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3f4e66',
    }
});