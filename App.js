import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from "react-native";
import Signin from "./screen/SignIn";
import Monday from "./monday";

const App = () => {
  return (
    <>
    {/* <SafeAreaView style={{backgroundColor: "red"}}>
      <ScrollView>
        <Text>GFHJKL;'</Text>
      </ScrollView>
    </SafeAreaView> */}

    <View>
      <Monday/>
      {/* <Signin/> */}
    </View>
    

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA586',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default App;