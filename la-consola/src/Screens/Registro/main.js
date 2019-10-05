import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView,Image,TouchableOpacity, Linking, Button, TextInput} from 'react-native';
import styles from './styles';

class Registro extends Component {



 
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
        <Text>Bienvenidos a la app de Hackatrix</Text>
          <Button 
            title="REGISTRARSE"
            onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
      </ScrollView>   
    )
  }
}

export default Registro;