import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome Hi!</Text>
      </View>
    </View>
  );
}

const windowsWidth = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: windowsWidth < 300 ? 100 : 300,
    height: windowsHeight < 300 ? 100 : 300,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: windowsWidth < 300 ? 10 :24,
  }
});