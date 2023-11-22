import React, { useState, useMemo } from 'react'
import { ImageBackground, Text, View, Button } from 'react-native'
import { db } from '../utils/data'

import  Card  from '../components/Card'
import Header from '../components/Header'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#ed799c',
    // height: '100%',
    flex: 1,


  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
}




const HomeScreen = () => {


  return (
    <View style={styles.container}>
    
    <Header title="Posh~Pair" logoUrl={'https://res.cloudinary.com/dqhyudo4x/image/upload/v1700645885/bk6toxqapde9pzxwmzmi.jpg'} />
      <Card db={db} />
      
    </View>
  )
}

export default HomeScreen
