import { Text, StyleSheet } from "react-native";
import colors from "../assets/themes/colors";
export function Line() {
  return (
    <Text style={styles.LineContainer}></Text>
  );
}

export const styles = StyleSheet.create({
  LineContainer: {
    backgroundColor: colors.light.blue,
    width: '90%',
    height: 2,
    marginVertical: '2%',
    alignItems: 'center',
    justifyContent:'center',
  }
});