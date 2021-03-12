import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, theme } from "../../constants";
export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  activityIndicatorCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerCont: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  listCont: {
    flex: 1,
  },
  headerCont: {
    height: 100,
    width: SCREEN_WIDTH,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: theme.colors.accent,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    paddingBottom: 20,
    paddingTop: 45,
    marginBottom: 15,
  },
  headerLogo: {
    height: 150,
    width: 200,
  },
  headerLogoCont: {
    flex: 1,
    alignItems: "center",
  },
});
