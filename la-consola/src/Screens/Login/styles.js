import { StyleSheet } from 'react-native';
import {HACKATRIXStyles} from '../HACKATRIXStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:70,
    width:'100%'
  },
  textInputText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    color: HACKATRIXStyles.colors.black
  },
  textLogin: {
    color: HACKATRIXStyles.colors.aquamarine
  },
  textUnderLogin: {
    textAlign:'center'
  },
  logo:{
    width:200,
    height:200
  },
  textBienvenida:{
    fontWeight:'bold',
    fontSize:22,
    color:HACKATRIXStyles.colors.dark_grey
  },
  textUnderLogin: {
    textAlign:'center',
    margin:15,
    color:HACKATRIXStyles.colors.dark_grey
  },
});