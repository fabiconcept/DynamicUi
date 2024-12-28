import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import CustomButton from './Components/CustomButton/CustomButton';

export default function HomeScreen() {

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome Hi!</Text>
          <CustomButton title="Hello" onPress={()=>alert("Hello Clicked")} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  container: {
    flex: 1,
  },
  box: {
    // padding: 20
  },
  text: {
    fontSize: 24,
    ...Platform.select({
      android: {
        fontFamily: 'monospace',
        fontStyle: 'italic',
      }
    }),
    fontWeight: 'bold',
    textAlign: 'center',
  }
});