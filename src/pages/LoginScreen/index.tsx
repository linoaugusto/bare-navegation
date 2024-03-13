import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

function LoginScreen() {
  const navigation = useNavigation();

  const handleActionGoToHome = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen!</Text>
      <Button
        title="Ir para Home"
        onPress={handleActionGoToHome}
      />
    </View>
  );
}

export default LoginScreen;