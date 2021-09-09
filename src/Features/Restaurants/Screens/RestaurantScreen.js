 import React from 'react'
 import { StatusBar as  ExpoStatusBar} from 'expo-status-bar';
 import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
 import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from "../Components/RestaurantInfoCard";
import styled from 'styled-components';

const SafeArea= styled(SafeAreaView)`
  flex : 1;
  ${StatusBar.currentHeight ? `margin-top : ${StatusBar.currentHeight}px` : null} 
  `;
 const SearchContainer= styled.View`
 padding : ${(props) => props.theme.space[3]}

 `;

 const RestaurantListContainer= styled.View`
  flex : 1;
  padding : ${(props) => props.theme.space[3]}
  background-color : ${(props) => props.theme.colors.bg.primary}
 `;

 const RestaurantScreen = () => {
     return (
         <>
        <SafeArea  >
        <SearchContainer >
        <Searchbar/>
        </SearchContainer> 
        <RestaurantListContainer >
        <RestaurantInfoCard/>
        </RestaurantListContainer>
      </SafeArea>
         </>
     )
 }
 
//  const styles = StyleSheet.create({
//     container : {
//       flex : 1 , marginTop : StatusBar.currentHeight
//     }
//     ,
//     search : {
//       padding : 16 , backgroundColor : "grey"
//     },
//     list : {
//       padding : 16 , backgroundColor : "blue", flex : 1
//     }
//   });

 export default RestaurantScreen
 