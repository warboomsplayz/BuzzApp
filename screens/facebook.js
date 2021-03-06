import React from 'react';
import {Text,View} from 'react-native';

export default class Facebook extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>name of person</Text>
            <Text>when uploaded</Text>
            <Text>what is in the pic</Text>
            <Text>pic</Text>
            <Text>coment 1</Text>
            <Text>coment 2</Text>

            
            </View>
        );
    }
}