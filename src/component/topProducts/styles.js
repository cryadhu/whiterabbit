import { StyleSheet } from "react-native";
import { CONTAINER_HEIGHT } from "../../utils/constants";

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
  },
  slide:{
    flex:1,
    
  },
  image:{
    height:200,
    width:100,
    backgroundColor:'red'
  }
});

export default styles;
