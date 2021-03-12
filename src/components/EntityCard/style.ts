import { StyleSheet } from "react-native";

import { SCREEN_HEIGHT, SCREEN_WIDTH, theme } from "../../constants";

export const styles = StyleSheet.create({
  card: {
    width: 90,
    marginEnd: 15,
  },
  cardImg: {
    height: 160,
    width: 90,
    borderRadius: 5,
  },
  textCont: {
    marginTop: 5,
    flex: 1,
  },
  title: {
    fontSize: 12,
    color: theme.colors.white,
    textAlign: "center",
  },

  //Modal
  modalCont: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 20,
  },
  closeIcon: {
    textAlign: "right",
    marginHorizontal: 15,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT - 150,
  },
});
