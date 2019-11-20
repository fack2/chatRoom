import React, {Component} from 'react'
import {View, Button, Image, Text, StyleSheet} from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'CHAT_ROOM',
  }
  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text style={styles.textChat}>A room for online chatting.</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://image.freepik.com/free-vector/characters-people-chatting-through-smartphones_53876-43013.jpg',
          }}
        />
        <View style={styles.Button}>
          <Button
            title="signup"
            color="#8A50B8"
            onPress={() => navigate('SignUp')}
          />

          <Button
            title="login"
            color="#61B4CE"
            onPress={() => navigate('Login')}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Button: {
    padding: 45,
    marginLeft: 80,
    width: 250,
    height: 200,
    justifyContent: 'space-between',
  },

  image: {
    width: 300,
    height: 300,
    alignItems: 'center',
    marginLeft: 50,
    marginTop: 20,
  },
  textChat: {
    fontSize: 30,
    textAlign: 'center',
    padding: 7,
  },
})

export default Home
