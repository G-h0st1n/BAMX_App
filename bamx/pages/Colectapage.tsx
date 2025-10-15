import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, Pressable, ScrollView, FlatList } from "react-native";
import { BarChart } from "react-native-gifted-charts";

var s = require('../styles/Colectapage')

 interface CampaingUserTotals {
        id: string;
        total_g: number;
        user_id: string;
        campaing_id: string;
    }


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);   

export default function Colectapage({route, navigation}: any){
    
    const { campaign, products } = route.params;
    // has colecta specific products and colecta information
        // need to calc progress again for progressbar
        // display colecta parameters

    // progress specific chart to show how close to foal
    
    // need to fetch user_product documents to get higher for leaderboard
        //leaderboard can be a numbered list

    const barData = [{value: 150, label:'Arroz'}, {value: 300, label:'Frijol'}, {value: 260, label:'Aceite'}];


    console.log(route.params)
    return(
        <View style={s.container}>
            <ScrollView>

            <Image
                style={s.headerImg}
                source={{uri: campaign.image_url}}
                />
            <Pressable 
                onPress = {() => {
                    navigation.navigate("Homepage")
                }}
                >
                <Image
                    source={require('../assets/goBack.png')}
                    style={s.goBackImg}
                    />
            </Pressable>
            <View style={s.header}>
                <Text style={s.headerText}>{campaign?.name ?? "Unknown campaign"}</Text>
                <Text style={s.subText}>{campaign.start?.toDate?.().toLocaleDateString() ?? "N/A"} - {campaign.end?.toDate?.().toLocaleDateString() ?? "N/A"}</Text>
            </View>

            <View style={s.desc}>
                <Text style={s.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper dapibus lorem quis posuere. Cras vitae imperdiet nibh. Curabitur fermentum hendrerit nunc sit amet blandit.</Text>

            </View>

            <View style={s.graphs}>
                <BarChart 
                    data={barData}
                    barWidth={24}
                    noOfSections={3}
                    barBorderRadius={4}
                    frontColor={'#5AB02F'}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    hideRules
                    showReferenceLine1
                    referenceLine1Position={300}
                    referenceLine1Config={{
                        color: 'gray',
                        dashWidth: 5,
                        dashGap: 4,
                    }}
                    
                    />;

                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />

            </View>


            <View style={s.desc}>
                <Text style={s.descText}>Articulos necesarios para la colecta: Arroz, Frijol, Aceite, etc etc</Text>

            </View>
            </ScrollView>

            <View style={s.footer_container}>
                <Image
                    source={require('../assets/bottomHU.png')}
                    style={s.imageFit}
                    />
            </View>
        </View>
    )
}

// VISTA CARRUSEL ENTRE LEADERBOARD Y CHART
// Typelist Leaderboard
// Bar chart donations
// Reference Line for goal 
