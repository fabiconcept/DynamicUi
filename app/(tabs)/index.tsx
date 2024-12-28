import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function HomeScreen() {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', (newDimensions) => {
      setDimensions(newDimensions.window);
    })

    return () => subscription?.remove();
  }, []);

  const { width, height } = dimensions;
  const isLargeScreen = width > 500;
  const isSmallScreen = width < 300;
  const isMediumScreen = width >= 300 && width < 500;

  const isTallScreen = height > 600;


  return (
    <View style={styles.container}>
      <View style={[styles.box, isLargeScreen ? styles.box_w_lg : styles.box_w_md, isTallScreen ? styles.box_h_md : styles.box_h_lg]}>
        <Text style={[isLargeScreen && styles.text_xl, isMediumScreen && styles.text_lg, isSmallScreen && styles.text_sm]}>Welcome Hi!</Text>
        <Text style={[isLargeScreen && styles.text_xl, isMediumScreen && styles.text_lg, isSmallScreen && styles.text_sm]}>{width}, {height}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box_w_lg: {
    width: "90%",
  },
  box_h_lg: {
    height: "90%",
  },
  box_w_md: {
    width: "70%",
  },
  box_h_md: {
    height: "60%",
  },
  text_lg: {
    fontSize: 24,
  },
  text_sm: {
    fontSize: 12,
  },
  text_xl: {
    fontSize: 36,
  },
});