import React from 'react'
import { Text,StyleSheet, Image,View } from 'react-native'
import { Avatar, Button, Card,} from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from "../../../../assets/star"
import open from "../../../../assets/open"


import styled from 'styled-components';


const Address = styled(Text)`
font-size : ${(props) => props.theme.fontSizes.caption};
 
`; 
const Info = styled.View` 

padding : ${(props) => props.theme.space[3]}`;

const Rating = styled.View`
flex-direction : row;
padding-top : ${(props) => props.theme.space[2]};
padding-bottom : ${(props) => props.theme.space[2]};

`;

const Section = styled.View`
flex-direction : row;
align-items : center;
`;

const SectionEnd = styled.View`
flex : 1
flex-direction : row;
justify-content : flex-end;
`;

const Title = styled.Text`
    color : ${(props) => props.theme.colors.ui.primary};
    font-size : ${(props) => props.theme.fontSizes.body};
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
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;
    
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
            <Title>{name}</Title>
            <Section>
            <Rating>
            {
                ratingArray.map(() => <SvgXml xml={star} width={23} height={23}/>)
            }
            </Rating>
            <SectionEnd>
            {
                isClosedTemporarily ? (<Text variant = "label" style={{color : "red"}}>Closed Temporarily</Text>)
                : null
            }
            <View style={{paddingLeft : 16}}/>
            {
                isOpenNow ? <SvgXml xml={open} width={23} height={23}/> : null
            }
            <View style={{paddingLeft : 16}}/>

            <Image style={{ width : 15 , height : 15}} source = {{uri : icon}}/>
            </SectionEnd>
            </Section>
            <Address>{address}</Address>

            </Info>
        </RestaurantCard>
    )
}


export default RestaurantInfoCard
