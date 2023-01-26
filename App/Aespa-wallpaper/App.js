import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://pouriaafshari.github.io/React-wallpaper-app/DATA-BASE/AespaWallpapers/All/2.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  }
});
