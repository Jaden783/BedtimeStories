import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

export default class ReadStory extends Component{
  constructor(){
    super()
    this.state = {
      storyList : [],
    search : "",
    dataSource : [],
    }
  }

  getStoryList =()=>{
    var allStories
   allStories = db.collection("MyStory")
    .onSnapshot((snapshot)=>{
      var requestedStoryList = snapshot.docs.map(document => document.data());
      this.setState({
        storyList : requestedStoryList
      });
    })
  }

  componentDidMount(){
    this.getStoryList()
  }

  

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.story_name}
        subtitle={item.story}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
       
        bottomDivider
      />
    )
  }

  render(){
    return(
     
       
        <View style={{flex:1}}>
          <SearchBar style={{marginTop: 150}} placeholder="Story Name" onChangeText={query =>
             { this.setState({ search : query}); }} value={this.state.search} />
          
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.storyList}
                renderItem={this.renderItem}
              />
            
        </View>
    )
    }
}

const styles = StyleSheet.create({
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})