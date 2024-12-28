import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome Hi!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
  },
  box: {
    // padding: 20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});