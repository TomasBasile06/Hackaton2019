import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking,FeatherIcon } from 'react-native';
import styles from './styles';



class Home extends Component {
  

  render(){
    
    return(
      <ScrollView style={styles.fondo}>
        <View  style={styles.container}>
          <TouchableOpacity style={[styles.card]}>
            <View> HOLA
            </View>     
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default Home;
