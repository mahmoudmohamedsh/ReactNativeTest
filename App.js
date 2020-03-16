import React ,{useState}from 'react';
import { StyleSheet, Text, View, CheckBox,FlatList ,TouchableOpacity, Button} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';

export default function App() {

  const [todos,setTodos] = useState([
    {test:"a",key:'1',check:false},
    {test:"b",key:'2',check:true},
    {test:"c",key:'3',check:false},
    {test:"d",key:'4',check:true},
  ]);
  const pressDeleteHandler = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => {if((todo.key != key)== false){todo.check = !todo.check}return true });
    })
  }
  const getDataFromApi =  () =>  fetch("https://jsonplaceholder.typicode.com/todos?userId=1&fbclid=IwAR2cMmTxqnOf5Nj5zEaycaN5PexzsfvBVUK5okTQUXmNJGk_osqJT8OwyQU").
  then(res => res.json()).
  then(todos => setTodos(todos))
  .catch(error =>{
    setTodos(error)
  });
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}> 
        <TouchableOpacity onPress={() =>ay5ra(item.key) }style={{ flexDirection: 'row'}}>
            <MaterialIcons name='delete'  size={18} color={'#333'}/>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row',flex:1 }}>
            <Text style={{ flexShrink: 1 }}>
                "Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text...Really really long text..."
            </Text>
        </TouchableOpacity>
            
            <CheckBox value = {true}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },t:{
    textDecorationLine:"line-through"
  },f:{
    textDecorationLine:"none"
  }
});
