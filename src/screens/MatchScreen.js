import React,{useEffect} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const MatchScreen = ({ route, navigation }) => {
  const { matchedCharacter } = route.params;
  useEffect(() => {
    // You can navigate back to the main screen after the animation finishes
    const timeout = setTimeout(() => {
      navigation.goBack();
    }, 3000); // Adjust the duration as needed (in milliseconds)

    // Cleanup the timeout on unmount
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/Animation - 1700640978460.json')}
          autoPlay
          loop={true}
          style={styles.animation}
        />
      </View>

      <View style={styles.matchedInfo}>
        <View style={styles.centeredContent}>
          <Image
            source={{ uri: matchedCharacter.img }}
            style={styles.matchedImage}
            resizeMode="cover"
          />
          <Text style={styles.matchedName}>{matchedCharacter.name}</Text>
        </View>

        <View style={styles.matchedDetails}>
          <Text style={styles.matchedDescription}>{matchedCharacter.description}</Text>
        </View>
      </View>

      <Text style={styles.matchText}>It's a Match!</Text>

      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/Animation - 1700644785870.json')}
          autoPlay
          loop={true}
          style={styles.animation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  animationContainer: {
    marginBottom: 20,
  },
  animation: {
    width: 200,
    height: 200,
  },
  matchedInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  matchedImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  centeredContent: {
    alignItems: 'center',
  },
  matchedDetails: {
    marginTop: 15,
    alignItems: 'center',
  },
  matchedName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  matchedDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  matchText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 20,
  },
});

export default MatchScreen;
