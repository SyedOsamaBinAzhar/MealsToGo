 import React from 'react'
 import { StatusBar as  ExpoStatusBar} from 'expo-status-bar';
 import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
 import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from "../Components/RestaurantInfoCard";
 
 const RestaurantScreen = () => {
     return (
         <>
        <SafeAreaView  style = {styles.container}>
        <View style={styles.search}>
        <Searchbar/>
        </View> 
        <View style={styles.list}>
        {/* <Text>LIST</Text> */}
        <RestaurantInfoCard/>
        </View>
        <ExpoStatusBar style="auto"/>

      </SafeAreaView>
         </>
     )
 }
 
 const styles = StyleSheet.create({
    container : {
      flex : 1 , marginTop : StatusBar.currentHeight
    }
    ,
    search : {
      padding : 16 , backgroundColor : "grey"
    },
    list : {
      padding : 16 , backgroundColor : "blue", flex : 1
    }
  });

 export default RestaurantScreen
 