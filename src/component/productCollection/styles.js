import { StyleSheet } from "react-native";
import { windowBackground, textColor, white } from "../../assets/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: windowBackground,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  slide: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 100,
    backgroundColor: "red",
  },
  discountsTitle: {
    color: textColor,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    fontSize: 14,
  },
  grindContainer: {
    marginTop: 20,
    backgroundColor: white,
    padding: 10,
  },
  columnWrapperStyle: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default styles;
