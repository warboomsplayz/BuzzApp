import React from 'react';
import {Text,View} from 'react-native';

export default class Instagram extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>@person</Text>
            <Text>#something</Text>
            <Text>pic of something</Text>

            
            </View>
        );
    }
}