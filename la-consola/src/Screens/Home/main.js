import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity,Button, Linking,FeatherIcon } from 'react-native';
import styles from './styles';



class Home extends Component {


  render(){
    const { navigation } = this.props;
    const items = navigation.getParam("items");
    console.log("items")
    console.log(items)

    return(
      <ScrollView style={styles.fondo}>
        <View>
          {items.map(item => {
            return <Text>{item.description}</Text>
          })}
        </View>
      </ScrollView>
    )
  }
}

export default Home;
