import React, { Component } from 'react';
import { View, Text, Button  } from 'react-native';


class Profile extends Component {
	 static navigationOptions = ({ navigation }) => ({
    title: 'Profile',
    headerRight: <Button title="Info" />,
    headerStyle: { backgroundColor: '#9b59b6'},
    headerTintColor: 'white',
  });
  render() {
    return (
       <View>
   <Button
        onPress={() => this.props.navigation.navigate('Home', {name: 'Lucy'})}
        //onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Go to profile"/>
    </View>
    );
  }
}
 
export default Profile;