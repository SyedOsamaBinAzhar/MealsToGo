import React from 'react'
import { Text,StyleSheet } from 'react-native'
import { Avatar, Button, Card,} from 'react-native-paper';

import styled from 'styled-components';

const Title = styled.Text`
    padding : 16px;
    color : ${(props) => props.theme.colors.ui.error  };
`;

const RestaurantCard = styled(Card)`
background- color : ${(props) => props.theme.colors.bg.primary};

`;

const RestaurantCardCover = styled(Card.Cover)`
background- color : ${(props) => props.theme.colors.bg.primary};
padding : 16px;  

`;

const RestaurantInfoCard = ({restaurant = {}}) => {
    
    const {
        name = "some restaurant",
        icon,
        photos = ["https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    
    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    )
}


export default RestaurantInfoCard
