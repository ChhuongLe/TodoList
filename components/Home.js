import React, { useState } from 'react';
import Colors from '../Colors/Colors';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  AsyncStorage
} from 'react-native';
import { Ionicons} from '@expo/vector-icons';
// This will be the first screen the user will see
// Allows them to make containers of Todos for different tasks
const Home = () => {
  return (
    <View style = {styles.container}>
      {/* Inside the container should have a list title, a delete option, and options to change color */}
      <TouchableOpacity onPress={()=> {}} style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>List 1</Text>
        </View>
        <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="options-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="trash-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: Colors.blue,
    height: 100,
    flex: 1,
    borderRadius: 20,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 24,
    padding: 5,
    color: "white",
  }
})

export default Home;