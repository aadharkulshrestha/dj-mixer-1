import React, { Component } from 'react';
import { Button, View,Text } from 'react-native';


export class RedButton extends Component{
  render(){
    return(
        <Button color="red" title="Click Me"></Button>
    )
  }
}
export class BlueButton extends Component{
  render(){
    return(
        <Button color="blue" title="Click Me"></Button>
    )
  }
}
export class GreenButton extends Component{
  render(){
    return(
        <Button color="green" title="Click Me"></Button>
    )
  }
}
export class YellowButton extends Component{
  render(){
    return(
        <Button color="yellow" title="Click Me"></Button>
    )
  }
}
export class PurpleButton extends Component{
  render(){
    return(
        <Button color="purple" title="Click Me"></Button>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 200, marginLeft:100 ,  width: "50%"}}>
        <RedButton/>
        <BlueButton/>
        <GreenButton/>
        <YellowButton/>
        <PurpleButton/>
      
      </View>
    );
  }
}