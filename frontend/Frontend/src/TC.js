import React from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from "react-native";

const TC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.textBox}>
            <Text style={styles.heading}>AGREEMENT TO TERMS</Text>
            <Text style={styles.text}>
              These Terms and Conditions constitute a legally binding agreement
              made between you, whether personally or on behalf of an entity,
              and Tip-Top NX, concerning your access to and use of our mobile
              application Tip-Top NX. You agree, that by accessing the
              Application, you have read, understood, and agree to be bound by
              all of these Terms and Conditions Use. If you{" "}
              <Text style={styles.boldText}>do not agree</Text> to all of these
              Terms and Conditions, then you are{" "}
              <Text style={styles.boldText}>
                expressly prohibited from using the application{" "}
              </Text>
              and must discontinue use immediately.
            </Text>
            <Text style={styles.heading}>OWNER DECLARATIONS</Text>
            <Text style={styles.text}>
              By using the Application, you agree to all these points stated by
              the app owner :
            </Text>
            <Text style={[styles.text, { marginTop: -10 }]}>
              1. All registration information submitted by the user is true,
              accurate, current, and complete, also the whole{" "}
              <Text style={styles.boldText}>responsibilty of data</Text> has to
              be taken by the user.
            </Text>
            <Text style={[styles.text, { marginTop: -10 }]}>
              2. <Text style={styles.boldText}>No fake or spam orders</Text>{" "}
              will be entertained, the owner has all the rights to take any
              legal action against the same.
            </Text>
            <Text style={[styles.text, { marginTop: -10 }]}>
              3. User will be able to use the earned points only to claim{" "}
              <Text style={styles.boldText}>
                discount on an in-store purchase
              </Text>
              , as the points will not be exchanged for cash.
            </Text>
            <Text style={[styles.text, { marginTop: -10 }]}>
              4. Cancellation of any order will be considered only{" "}
              <Text style={styles.boldText}>before the order is confirmed</Text>{" "}
              by the owner.
            </Text>
            <Text style={[styles.text, { marginTop: -10 }]}>
              5. Registration of complains (if any), will be entertained only
              upto <Text style={styles.boldText}>three days</Text> after the
              order has been delivered, that too only if all the{" "}
              <Text style={styles.boldText}>product tags</Text> are intact.
            </Text>
            <Text style={[styles.text, { marginTop: -10 }]}>
              6. All the rights regarding order delivery are{" "}
              <Text style={styles.boldText}>in possession by the owner</Text>,
              subject to stock availability and delivery options.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TC;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    //flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  textBox: {
    marginTop: 18,
    marginLeft: 15,
    marginRight: 10,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
    flexDirection: "row",
    paddingVertical: 12,
    letterSpacing: 0.4,
  },
  boldText: {
    fontWeight: "bold",
  },
});
