import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Input({value, changeText, addTodoItem}) {
  return (
    <TextInput
        value = {value}
        onChangeText = {changeText}
        onEndEditing = {addTodoItem}
        style = {styles.input}
        placeholder={"할 일을 입력해 주세요"}
        maxLength={30}
        returnKeyType="done"/>
  );
}


const styles = StyleSheet.create( {
    input: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20,
    }
});