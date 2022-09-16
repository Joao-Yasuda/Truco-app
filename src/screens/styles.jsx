import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    height:'100%',
    width:'100%',
  },
  sideContainer:{
    justifyContent:'space-around',
    alignItems:'center',
    height:'100%',
    width:'50%',
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%',
    marginBottom:80
  },
  text:{
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontSize:25,
  },
  lessAndPlusButtons:{
    backgroundColor:'#242424',
    alignItems:'center',
    height:'100%',
    color:'white',
    paddingHorizontal:20,
    paddingVertical:20,
    borderRadius:35,
  },
  resetButton:{
    backgroundColor:'#242424',
    paddingHorizontal:25,
    paddingVertical:8,
    borderRadius:10, 
  },
  resetContainer:{
    position: 'absolute', 
    top: 720, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  scoreText:{
    fontSize:80
  },
  column:{
    width:'1%',
    backgroundColor:'#242424',
    height:700,
    marginHorizontal:20
  },
  teams:{
    fontSize:35,
    textTransform:'uppercase',
    fontWeight:'bold'
  }
});

