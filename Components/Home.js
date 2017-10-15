import React, { Component } from 'react';
import { View, Text, Button, Icon  } from 'react-native';


class Home extends Component {
  render() {
    return (
        
          <View>
            <Button
        //onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="open drawer"
      />
       <Button
        onPress={() => this.props.navigation.navigate('SecondScreen', {name: 'Lucy'})}
        //onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Go to profile"
      />
          </View>
        
      );
  }
}
 
 
export default Home;