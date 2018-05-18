import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

export default class SearchScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Search',
    headerTitleStyle: {
      color: '#444',
      fontWeight: 'normal',
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Button
          title='Search for Songs'
          onPress={()=> this.props.navigation.navigate('Profile')}
          //onPress={() => this.props.navigation.navigate('Song')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})