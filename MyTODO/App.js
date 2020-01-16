import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import Listitem from './app/components/Listitem';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        inputValue:'',
        todos:[]
    }
}

componentWillMount(){ //react가 기본적으로 보여주는 것을 랜더링 될때! Mount는 랜더링, 즉 화면에 보여지기전에!!
  this.getData()
}

storeData = () => {
  AsyncStorage.setItem('@todo:state', JSON.stringify(this.state)); //@todo 이렇게 이름하는게 관습이라고 todo라는 저장소에 state를 저장함.. this.state를 문자화하여 JSON 형태로 저장해줘
}

getData = () => {
  AsyncStorage.getItem('@todo:state').then((state) => { //then은 Item을 자져온 다음에 실행해줘라 todo라는 저장소에서 state라는 녀석을 가져온다
      if(state !== null){
          this.setState(JSON.parse(state));
      }
  })
}

_makeTodoItem = ({item, index})=>{
  return (
      <Listitem 
      name={item.title} 
      isComplete = {item.iscomplete} 
      changeComplete={() => {const newTodo = [...this.state.todos];
      newTodo[index].iscomplete = !newTodo[index].iscomplete
      this.setState({todos:newTodo}, this.storeData)
    }}
      deleteItem={() => {const newTodo = [...this.state.todos];
      newTodo.splice(index, 1)
      this.setState({todos:newTodo}, this.storeData)
    }}
    />
  );
}

_changeText=(value) => {
  this.setState({inputValue:value});
}

_addTodoItem=() =>{
  if(this.state.inputValue !== ""){
      const prevTodo = this.state.todos;

      const newTodo = {title : this.state.inputValue, iscomplete: false};

      this.setState({inputValue:'', todos : prevTodo.concat(newTodo)}, this.storeData);
  }
}

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.headercenter}>
        <Header/>
      </View>
      <View style={styles.subtitleposition}>
        <Subtitle title="해야 할 일"/>
        <Input
          value={this.state.inputValue}
          changeText = {this._changeText}
          addTodoItem = {this._addTodoItem}
        />
      </View>
      <View style={styles.subtitleposition}>
        <Subtitle title="해야 할 일 목록"/>
        <FlatList
          data = {this.state.todos}
          renderItem = {this._makeTodoItem} //함수를 넣음! _이 뜻은 함수 안에 있는 함수!
          keyExtractor = {(item, index) => {return '$(index)'}}/>
      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercenter:{
    alignItems:"center",
  },
  subtitleposition:{
    marginLeft:50,
  },

});