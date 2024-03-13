import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();

  const handleActionGoToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button
        title="Ir para Login"
        onPress={handleActionGoToLogin}
      />
    </View>
  );
}

export default HomeScreen;