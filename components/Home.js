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
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// This will be the first screen the user will see
// Allows them to make containers of Todos for different tasks
const ListButton = ({ title, color, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {navigation.navigate('todoList', { title, color })}}
      style={[styles.itemContainer, { backgroundColor:  color }]}
    >
      <View>
        <Text style={styles.itemTitle}>{title} </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="trash-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Inside the container should have a list title, a delete option, and options to change color */}
      <FlatList data={[
        {
          title: "School",
          color: Colors.green
        },
        {
          title: "Work",
          color: Colors.red,
        },
        {
          title: "Fun",
          color: Colors.teal
        }
      ]}
        renderItem={({ item: { title, color }, index }) => {
          return (
            <ListButton title={title} color={color} navigation={navigation} />
          );
        }}
      />
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