import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  overAllContainer: {
    width: width,
    // borderWidth: 1,
    // minHeight: "100%",
    height: "100%",
  },
  container: {
    width: width,
    // height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    flex: 1,
  },
  filterType: {
    width: "35%",
    // borderWidth: 1,
    height: "100%",
  },
  filteredOptionsStyle: {
    width: "65%",
    // borderWidth: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  headerStyle: {
    width: "100%",
    height: 50,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eachFilter: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 10,
    justifyContent: "center",
  },
  eachFilterText: {
    fontSize: 13,
    color: "#777",
  },
  buttonBoxStyle: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "flex-end",
  },
  buttonBox: {
    width: 170,
    height: 40,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2185B",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
