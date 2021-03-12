import { StyleSheet } from "react-native";

import { SCREEN_WIDTH, theme } from "../../constants";

export const styles = StyleSheet.create({
  searchCard: {
    height: 100,
  },
  searchCardCont: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 20,
  },
  cardCont: {
    marginVertical: 5,
  },
  searchCardImg: {
    width: 110,
    height: "100%",
  },
  cardImg: {
    width: SCREEN_WIDTH - 20,
    height: 125,
    borderRadius: 5,
  },
  textCont: {
    position: "absolute",
    bottom: -3,
    height: 30,
    left: 0,
    right: 0,
    zIndex: 111,
    backgroundColor: "rgba(95,95,95,0.8)",
    paddingVertical: 5,
    alignItems: "center",
  },
  searchTextCont: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  searchTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
