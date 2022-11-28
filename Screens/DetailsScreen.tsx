
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const DetailsScreen = ({route}) => {
    return (
        <View style={styles.container}>
            <Text
              style={{textAlign: 'center', color: '#000', alignSelf: 'center'}}>
              {route.params.item.post.id}
            </Text>
            <Text
              style={{textAlign: 'center', color: '#000', alignSelf: 'center'}}>
              {route.params.item.post.name}
            </Text>
            {/* <Image
              style={{height: 100, width: 100}}
              source={{uri: route.params.item.post.name}}
            /> */}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

export default DetailsScreen;
