import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    width: width - 25,
    borderBottomWidth: 1,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderColor: "#ccc",
    alignSelf: "center",
  },
  imageContainer: {
    width: (width - 15) / 3,
    aspectRatio: 3 / 4,
    borderWidth: 1,
    alignSelf: "center",
    marginRight: 10,
    borderColor: "#ccc",
  },
  detailBox: {
    // borderWidth: 1,
    // height: 190,
    width: (width + 25) / 2,
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
    justifyContent: "center",
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
    // borderWidth: 1,
  },
  discountedPriceText: {
    fontSize: 17,
    marginHorizontal: 8,
    fontWeight: "bold",
    color: "#444",
  },
  buttonContainer: {
    width: width - 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
    // marginTop: 5,
  },
  buttonBox: {
    width: (width - 20) / 2 - 25,
    height: 40,
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
    marginLeft: 8,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
  plusBox: {
    borderWidth: 1,
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
});

export default styles;
