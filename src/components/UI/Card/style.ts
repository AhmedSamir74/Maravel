import { StyleSheet } from "react-native";
import { theme } from "../../../constants";

export default StyleSheet.create({
  cardCont: {
    height: 125,
    backgroundColor: theme.colors.accent,
    borderRadius: 15,
    borderColor: "#000",
    margin: 10,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
