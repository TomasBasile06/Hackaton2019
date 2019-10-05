import { StyleSheet } from 'react-native';
import {HACKATRIXStyles} from '../HACKATRIXStyles';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fondo:{
    backgroundColor:'#fff'
  },
  container: {
    justifyContent: "flex-start",
    backgroundColor: HACKATRIXStyles.colors.white,
    paddingVertical: 16
  },
  card: {
    flex: 1,
    paddingLeft: 15,
    backgroundColor: HACKATRIXStyles.colors.white,
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 2,
    borderWidth: 1,
    borderColor: HACKATRIXStyles.colors.light_grey,
    margin: 8,
    marginTop: 0,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  imagePefil:{
    width: 200,
    height:200,
    borderRadius:300,
    
  },
  textDescription: {
    borderBottomColor:HACKATRIXStyles.colors.light_grey,
    borderBottomWidth:1,
    width:'90%'
  },
  iconPreferencias:{
    width: 45,
    height:45
  },
  boxIconPreferencias:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    display: 'flex'
  }
});