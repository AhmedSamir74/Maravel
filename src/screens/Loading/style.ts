import { StyleSheet } from "react-native";
import { theme } from "../../constants";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 150,
  },
});
