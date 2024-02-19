
import React from 'react';
import { ScrollView, View } from 'react-native';
import { TextInput, Button, Checkbox, Text } from 'react-native-paper';

const SignIn = () => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            SignIn
          </Text>
          <Text>Welcome back! Please enter your details</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <TextInput
            style={{
              height: 40,
              width: 200,
              margin: 10,
              borderRadius: 10,
            }}
            label="Email"
          />
          <TextInput
            style={{
              height: 40,
              width: 200,
              margin: 10,
              borderRadius: 10,
            }}
            label="Password"
            secureTextEntry
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox status="checked"  />
          <Text>Remember</Text>
        </View>
        <Text>Forgot Password</Text>
        <Button
          onPress={() => console.log("Pressed")}
          mode="contained"
          style={{ margin: 10, borderRadius: 10,  }}
          buttonColor='skyblue'
        >
          Signin
        </Button>
      </View>
    </ScrollView>
  );
}

export default SignIn;
