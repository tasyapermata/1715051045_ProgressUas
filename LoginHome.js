import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Button } from 'react-native';
import Header from "./Header";


export default class LoginHome extends React.Component {
  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"SISTEM INFORMASI ABSENSI MAHASISWA"} />

      <Image style = {{marginLeft:100,width: 200, height: 220}} source={require("./loginpic.png")}/>

      <View style={styles.slider}>
                <View style={styles.masuk}>
                    <Text style={styles.text3}>Username :</Text>
                    <TextInput style = {{height: 40, backgroundColor:'#D8D8D8', margin:20,padding: 10}}
                    placeholder="Masukkan Username"
                    onChangeText={
                        (username)=>this.setState({username})
                    }
                    keyboardType = 'text'
                    />
                </View>

                <View style={styles.masuk}>
                <Text style={styles.text3}>Password :</Text>
                <TextInput style = {{height: 40, backgroundColor:'#D8D8D8', margin:20,padding: 10}}
                    placeholder="Masukkan Username"
                    onChangeText={
                        (password)=>this.setState({password})
                    }
                    keyboardType = 'numeric'
                    />
                </View>

    <View style={styles.vButton}>
        <Button
            color='#D2691E'
            title="LOGIN"
            />
          </View>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    flex: 2,
    flexDirection: 'column'
  },
  vButton:{
    width: "50%",
    paddingTop: 20,
    marginRight: 50,
    marginLeft: 100,
    borderRadius: 30
  },
  

  box1: {
    flex: 1,
    backgroundColor: '#480000',
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#FFFFFF",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },


  button2Style: {
    flex: 0.2,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: '#CD5C5C',
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 5,
  },
 
  

  slider:{
    flex: 0.6,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent : 'center',
  },

  masuk:{
    flex : 0.5,
    flexDirection: 'row',
  },

  text3: {
    fontSize: 15,
    color: 'black',
    margin:15,
  },
});


