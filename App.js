import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [input,setinput]=useState("")
  const [mylist,setmylist]=useState([])
  const [array,setarray]=useState(    
    [
      { id: 1, ten: 'Tung', age: 20 },
      { id: 2, ten: 'Hoa', age: 25 },
      { id: 3, ten: 'Minh', age: 30 },
      { id: 4, ten: 'Tung', age: 20 },
      { id: 5, ten: 'Hoa', age: 25 },
      { id: 6, ten: 'Minh', age: 30 },
  
    ]
  )
  return (
    
    <View style={styles.container}>
    
    <View style={styles.headingstlye}>
      <View style={styles.headingstlye_1}>
      <Text style={{color:"white" }}>To app</Text>
      </View>
      <View style={styles.buttonsyle}>
      <Button  title='tung'></Button>
      </View>
    </View>
    <View style={{ flexDirection: "row", height: 50 }}>
  <Text style={{ backgroundColor: "grey", padding: 10,borderRadius:5 }}>Nhập</Text>
  <TextInput
    style={{
      backgroundColor: "#f0f0f0",
      padding: 10,
      borderColor: "black",
      borderWidth: 1,
      flex: 1, // Cho phép TextInput chiếm phần còn lại
      borderRadius: 5,
    }}
    placeholder="Nhập nội dung"
    placeholderTextColor="gray"
    onChangeText={(value) =>setinput(value)}

  />
   <TouchableOpacity style={{alignItems:"center",backgroundColor:"#4CAF50",justifyContent:"center"}} onPress={()=> alert("heloo")} >
      <Text style={{textAlign:"center"}}>Search</Text>
    </TouchableOpacity>
</View>
    <Text>to do:{input}</Text>
  </View>

  
    
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex:1
    
  },
  buttonsyle:{
    alignSelf:"flex-end",
    top:15,
    width:40,
    height:40,
    fontSize:20
  },
  headingstlye:{
    padding:20,
    color:"white",
    backgroundColor:"green",
    alignItems:"center",
    flex:0
    
  },
 headingstlye_1:{
  top:40,
  width:50,
  color:"white",
  textAlign:"center",
  justifyContent:"center"
 }

});
