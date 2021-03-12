import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, theme } from "../../constants";
export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "#151c25",
  },
  loaderCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listEmptyCont: {
    width: SCREEN_WIDTH,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
  },
  transformedImgCont: {
    height: 100,
    width: SCREEN_WIDTH,
    overflow: "hidden",
    position: "absolute",
    zIndex: 1,
  },
  transformedCharacterImg: {
    flex: 1,
  },
  transformedTitleCont: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 10,
  },
  transformedTitle: {
    fontSize: 15,
    textAlign: "center",
    color: theme.colors.white,
  },
  imgCont: {
    height: 250,
    width: SCREEN_WIDTH,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: "hidden",
  },
  backIcon: {
    position: "absolute",
    top: 40,
    left: 0,
    width: 70,
    height: 40,
    zIndex: 111,
    backgroundColor: "#26485e",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    opacity: 0.8,
  },
  characterImg: {
    flex: 1,
  },
  infoCont: {
    flex: 1,
    paddingHorizontal: 10,
  },
  characterName: {
    fontSize: 30,
    color: theme.colors.white,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  sectionCont: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#e47c81",
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionDesc: {
    fontSize: 14,
    color: theme.colors.white,
    textAlign: "left",
  },
});
