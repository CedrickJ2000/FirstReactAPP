import React, { useState } from "react";
import { Image, StyleSheet, Text, Button, View } from 'react-native';
import FlatButton from "./components/button";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bangers-Regular': require("./assets/fonts/Bangers-Regular.ttf"),
};

export default class App extends React.Component {

  state = {
    value: 3,
    fontsLoaded: false,
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  Clear = () => {
    this.setState({
      value: 3,
    })
    console.log("value: " + (this.state.value))
  }
NextRound = () => {
  this.setState({
    value: this.state.value + 2,
  })
  console.log("value: " + (this.state.value))
}
  incrementValue = () => {
      this.setState({
        value: this.state.value + 1,
      })
      console.log("value: " + (this.state.value + 1))
  }
  incrementValuetwo = () => {
    this.setState({
      value: this.state.value + 2,
    })
    console.log("value: " + (this.state.value + 2))
}
incrementValuethree= () => {
  this.setState({
    value: this.state.value + 3,
  })
  console.log("value: " + (this.state.value + 3))
}
incrementValuefour= () => {
  this.setState({
    value: this.state.value + 4,
  })
  console.log("value: " + (this.state.value + 4))
}
  decrementValue = () => {
    this.setState({
      value: this.state.value - 1,
    })
    console.log("value: " + (this.state.value - 1))
}
decrementValuetwo = () => {
  this.setState({
    value: this.state.value - 2,
  })
  console.log("value: " + (this.state.value - 2))
}
decrementValuethree = () => {
  this.setState({
    value: this.state.value - 3,
  })
  console.log("value: " + (this.state.value - 3))
}
decrementValuefour = () => {
  this.setState({
    value: this.state.value - 4,
  })
  console.log("value: " + (this.state.value - 4))
}

  render(){
   
    if (this.state.fontsLoaded) {
      return (
    
        <View style={styles.container}>
        
          {/* Header */}
         
          <Image source={{ uri: "https://cdn.discordapp.com/attachments/869593417829715999/890908913183109172/PicsArt_09-24-06.32.43.png" }} style={{ width: 300, height: "20%", marginTop: 50,}} />
          <Text style={styles.SectionTitle}> 
          
           Energy Count
          </Text>
          <Text style={styles.SectionTitleBelow}> 
           By Zed & Kenneth
          </Text >
          <Text style={styles.Enemy}>
            Enemy Energy Remaining
          </Text>
          <Text style={styles.Count}>
          {this.state.value}
          </Text>
          <View style={styles.Main}>
          <FlatButton text="+1" onPress={this.incrementValue}/>
          <FlatButton text="+2" onPress={this.incrementValuetwo}/>
          <FlatButton text="+3" onPress={this.incrementValuethree}/>
          <FlatButton text="+4" onPress={this.incrementValuefour}/>
          </View>
          <View style={styles.MainBelow}>
          <FlatButton text="-1" onPress={this.decrementValue}/>
          <FlatButton text="-2" onPress={this.decrementValuetwo}/>
          <FlatButton text="-3" onPress={this.decrementValuethree}/>
          <FlatButton text="-4" onPress={this.decrementValuefour}/>
          </View>
          <View style={styles.MainBelow}>
          <FlatButton text="Clear" onPress={this.Clear}/>
          <FlatButton text="Next Round" onPress={this.NextRound}/>
          </View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004445',
    alignItems: 'center',
  },
  
  SectionTitle:{
    marginLeft: 30,
    alignItems: 'center',
    fontSize: 35,
    color: 'white',
    width: 200,
    fontFamily: "Bangers-Regular",
    
  },
  SectionTitleBelow:{
    marginLeft: 30,
    color: 'white',
    width: 100,
    fontFamily: "Bangers-Regular"
  },
  Enemy:{
    marginLeft: 20,
    fontSize: 24,
    width: 210,
    color: 'white',
   paddingTop: 40,
   fontFamily: "Bangers-Regular"
  },
  Count:{
    color:'white',
    fontSize: 60,
    paddingTop: 20,
    paddingHorizontal: 10,
  
    
  },
 Main:{
   marginTop: 25,
   paddingHorizontal: 30,
   paddingVertical: 10,
   flexDirection: 'row',

 },
 MainBelow:{
  marginTop: 25,
  paddingHorizontal: 30,
  paddingVertical: 10,
  flexDirection: 'row'
}

});
