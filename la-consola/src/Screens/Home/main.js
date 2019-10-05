import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity,Button, Linking,FeatherIcon } from 'react-native';
import styles from './styles';



class Home extends Component {
  

  render(){
    
    return(
      <ScrollView style={styles.fondo}>
        <View  style={styles.container}>
          <TouchableOpacity>
            <View> 
              <Text>Para comenzar</Text>
              <Button 
                title="Elige una foto"
                />
              <Button 
                title="Tomar una foto"
                />
            </View>     
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default Home;
