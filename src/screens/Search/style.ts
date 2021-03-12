import { StyleSheet } from "react-native";
import { theme } from "../../constants";
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
  searchCont: {
    height: 60,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 15,
    alignSelf: "center",
  },
  headerCont: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.accent,
    borderRadius: 20,
    marginEnd: 15,
  },
  headerLogo: {
    height: 150,
    width: 200,
  },
  headerLogoCont: {
    flex: 1,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    color: theme.colors.white,
    fontSize: 15,
    marginStart: 10,
  },
  cancelTextCont: {
    justifyContent: "center",
  },
  cancelText: {
    color: "#f08287",
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
  },

  listEmptyCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionDesc: {
    fontSize: 20,
    color: theme.colors.white,
    textAlign: "center",
  },
});
