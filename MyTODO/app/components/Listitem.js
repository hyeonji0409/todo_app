import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

export default function Listitem({name, changeComplete, isComplete}) {
  return (
    <View style={styles.listitembox}>
        <View style={styles.makerow}>
            <TouchableOpacity onPress={changeComplete}>
                <AntDesign name={isComplete? "checkcircle": 'frowno'} size={20} style={styles.checkmargin} /> 
                {/*삼항연산자의 값이 True 이면 checkcircle, False이면 frowno}*/}
            </TouchableOpacity>
        </View>
        
      <Text style={styles.item}>{name}</Text>

        <TouchableOpacity onPress={deleteItem}>
            <AntDesign name="close" size={20} />
        </TouchableOpacity>
    </View>
  );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create( {
    listitembox: {
        borderBottomWidth: 1,
        padding: 5,
        marginTop: 10,
        width: width-60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    item: {
        fontSize: 20,
        fontWeight: "bold",
    },
    makerow: {
        flexDirection: "row",
    },
    checkmargin: {
        marginRight: 10,
    },
});