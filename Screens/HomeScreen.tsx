import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
  Button
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAirLines,searchAir} from '../redux/action/action';
import {types} from '../redux/action/actiontypes';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    // dispatch(fetchAirLines());
    
  },[]);


  const list = useSelector(state => state);

  // console.log(list.post + 'hh');
  const [search, setSearch] = useState('');

  const onSearch=()=>{
    dispatch(searchAir(search));
    
    if(!list.loading){
      console.log(list.post.id +"id");
      navigation.navigate("Details",{item:list});
    }
  }

  const renderItemAPI = ({item,index}) => {
    if (item.country !== undefined) {
      if (item.country.includes(search)) {
       
        return (
          <View
          key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              margin: 10,
            }}>
            <Text
              style={{textAlign: 'center', color: '#000', alignSelf: 'center'}}>
              {item.name}
            </Text>
            <Image
              style={{height: 100, width: 100}}
              source={{uri: item.logo}}
            />
          </View>
        );
      }
    }
  };
  // if (list.loading) {
  //   return (
  //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //       <ActivityIndicator size="large" color="#00ff00" />
  //     </View>
  //   );
  // }
  // if (list.error) {
  //   console.log(state.post.error);
  // }
  return (
    <View>
      <View>
        <TextInput
          style={{borderWidth: 2, margin: 10, borderRadius: 10}}
          placeholder="Enter"
          onChangeText={text => {
            setSearch(text);
          }}
        />
      </View>
      <View
        style={{
          borderWidth: 2,
          height: '80%',
          width: '80%',
          alignSelf: 'center',
        }}>
          <Button 
          title='Search'
          onPress={onSearch}
          />
        {/* <FlatList
          data={list.post.slice(0, 50)}
          renderItem={renderItemAPI}
          keyExtractor={index => index}
        /> */}
      </View>
    </View>
  );
};

export default HomeScreen;
