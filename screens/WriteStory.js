import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
  ToastAndroid} from 'react-native';

import db from '../config';
import firebase from 'firebase';

import {Header} from 'react-native-elements'

export default class WriteStoryScreen extends Component{
 constructor(){
 super()    

 this.state = {
     //userId: firebase.auth().currentUser.email,
     storyName:"",
    authorName: "",
    story:"",
  }


 }
 createUniqueId(){ return Math.random().toString(36).substring(7); }
 addStory = (storyName,authorName,story)=>{


var storyId = this.createUniqueId()
db.collection("MyStory").add({
story_id : storyId,
author_name : authorName,
story_name: storyName,
story : story,
})
this.setState({storyName : "", authorName : "", story :""})
 ToastAndroid.show("Story Saved Sucessfully",ToastAndroid.SHORT)
}
    render(){
        return(
            <View style={{flex:1}}>
             <Header
            centerComponent={{ text: 'My Story', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                <TextInput
                    style ={styles.formTextInput}
                    placeholder={"enter author name"}
                    onChangeText={(text)=>{
                        this.setState({
                            authorName:text
                        })
                    }}
                    value={this.state.authorName}
                  />
                  
                  <TextInput
                    style ={styles.formTextInput}
                    placeholder={"enter story name"}
                    onChangeText={(text)=>{
                        this.setState({
                            storyName:text
                        })
                    }}
                    value={this.state.storyName}
                  />
                  <TextInput
                    style ={[styles.formTextInput,{height:300}]}
                    multiline
                    numberOfLines ={8}
                    placeholder={"Write your story"}
                    onChangeText ={(text)=>{
                        this.setState({
                            story:text
                        })
                    }}
                    value ={this.state.story}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.addStory(this.state.storyName,this.state.authorName,this.state.story)}}
                    >
                    <Text>Submit</Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      keyBoardStyle : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'pink',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"pink",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },
      }
    )
    