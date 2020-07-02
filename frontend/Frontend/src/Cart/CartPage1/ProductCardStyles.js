import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    width: 350,
    borderBottomWidth: 1,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    alignSelf: "center",
  },
  imageContainer: {
    height: 160,
    width: 120,
    borderWidth: 1,
    alignSelf: "center",
    marginRight: 10,
    borderColor: "#ccc",
  },
  detailBox: {
    // borderWidth: 1,
    height: 190,
    width: 200,
    alignItems: "center",
    paddingVertical: 5,
  },
  nameStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    paddingVertical: 3,
    paddingHorizontal: 5,
    margin: 3,
  },
  subBox: {
    justifyContent: "space-evenly",
    // borderWidth: 1,
    width: "90%",
    margin: 2,
  },
  smallBox: {
    marginVertical: 7,
    alignItems: "center",
    // borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    paddingVertical: 5,
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  discountedPriceText: {
    fontSize: 17,
    marginHorizontal: 8,
    fontWeight: "bold",
    color: "#444",
  },
  buttonContainer: {
    width: 350,
    borderTopWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonBox: {
    width: 150,
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 15,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  minusBox: {
    borderWidth: 1,
    width: 22,
    height: 22,
    marginHorizontal: 5,
    borderRadius: 11,
  },
  plusBox: {
    borderWidth: 1,
    width: 22,
    height: 22,
    marginHorizontal: 5,
    borderRadius: 11,
  },
});

export default styles;