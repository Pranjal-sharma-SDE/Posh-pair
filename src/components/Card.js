import React, { useState, useMemo } from 'react'
import { ImageBackground, Text, View, Button,TouchableOpacity } from 'react-native'
import TinderCard from 'react-tinder-card'
import { FontAwesome,Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '80%',
    height: '70%',
    backgroundColor: '#f5d5d5',
    borderRadius: 20,
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '100%',
    maxWidth: 260,
    height: 300,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 260,
    height: 300,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    elevation: 5,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    justifyContent: 'center',
   
    
    // alignItems: 'center',
  },
  descriptionContainer: {
    padding: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    // backgroundColor: 'rgba(0,0,0,0.1)',
    
 
  },
  cardTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  buttons: {
    margin: 20,
    zIndex: -100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    pading: 20,
    margin: 20,
  },
  buttonContainer: (color) => ({
    width: 50, // Adjust the size of the circular background
    height: 50, // Adjust the size of the circular background
    borderRadius: 25, // Make it half of the width and height for a perfect circle
    backgroundColor: color || 'blue', // Set your desired background color or use blue as a default
    justifyContent: 'center',
    alignItems: 'center',
  }),
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  },
  buttonIcon:(color) => ({
    fontSize: 30,
    color: color || '#fff',
    borderRadius: 2,

  }),
  matchIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  matchIcon: {
    fontSize: 20,
    color: 'green', // You can customize the color
    marginRight: 5,
  },
  matchPercentage: {
    fontSize: 16,
    color: 'green', // You can customize the color
  },
}



// This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const Card = ({ db }) => {
  // State variables
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();
  const [matchedCharacter, setMatchedCharacter] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const navigation = useNavigation();
  const alreadyRemoved = [];
  let charactersState = db;

  // Create refs dynamically based on the length of the characters array
  const childRefs = useMemo(() => Array(db.length).fill(0).map(() => React.createRef()), [db]);

  // Function to handle swiping action
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction);
    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);

    if (direction === 'right') {
      const currentCharacter = characters.find(character => character.name === nameToDelete);
      if (currentCharacter && currentCharacter.matchPercentage > 90) {
        setMatchedCharacter(currentCharacter);
        // Navigate to the MatchScreen with matched character details
        navigation.navigate('MatchScreen', { matchedCharacter: currentCharacter });
      }
    }
  };

  // Function to handle when a card leaves the screen
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
    setCurrentCard(null);
    charactersState = charactersState.filter(character => character.name !== name);
    setCharacters(charactersState);
  };

  // Function to trigger swipe action programmatically
  const swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name));
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name;
      const index = db.map(person => person.name).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      // Check if the index is within the bounds of the childRefs array
      if (index >= 0 && index < childRefs.length && childRefs[index].current) {
        childRefs[index].current.swipe(dir);
      }
    }
  };

  // JSX structure for rendering the component
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {characters.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            key={index.toString()}  // Use index as the key
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <View style={styles.card}>
              <ImageBackground style={styles.cardImage} source={{ uri: character.img }}>
                <View style={styles.descriptionContainer}>
                  {character.match && (
                    <View style={styles.matchIndicator}>
                      <FontAwesome name="check-circle" style={styles.matchIcon} />
                      <Text style={styles.matchPercentage}>{`${character.matchPercentage}%`}</Text>
                    </View>
                  )}
                  <Text style={styles.cardTitle}>{character.name}, {character.age}</Text>
                  <Text style={styles.cardDescription}><Entypo name="location-pin" style={styles.buttonIcon} size={24} color={'#000'} />{character.location}</Text>
                </View>
              </ImageBackground>
            </View>
          </TinderCard>
        ))}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => swipe('left')} style={styles.buttonContainer('#fff')}>
          <FontAwesome name="close" style={styles.buttonIcon} size={30} color={'red'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swipe('up')} style={styles.buttonContainer('#eb79ed')} >
          <FontAwesome name="star" style={styles.buttonIcon} size={36} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swipe('right')} style={styles.buttonContainer('#ed799c')}>
          <FontAwesome name="heart" style={styles.buttonIcon} size={30} color={'#79ed9c'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
