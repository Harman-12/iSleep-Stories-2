import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';

export default class ReadScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'red'}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent = {{
                        text : 'iSleep Stories',
                        style : { color: 'white', fontSize: 20}
                    }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <Text>Read a Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  }
});