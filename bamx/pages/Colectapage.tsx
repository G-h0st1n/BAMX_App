import { useEffect, useState } from "react";
import { db } from "../App";
import { View, Text, TouchableOpacity, Image, Pressable, FlatList, ImageBackground } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { collection, getDocs, DocumentReference } from "firebase/firestore";
import { Button } from "@rneui/base";

var s = require('../styles/Colectapage')

interface CampaingUserTotals {
    id: string;
    total_g: number;
    user_id: string;
    campaing_id: string;
}

interface CampaignProduct {
  id: string;
  campaign_id: any; // Firestore DocumentReference
  received_kg: number; 
  campaignId: string;
  product_name: string;
  minimum_kg: number; // goal of kgs
}

//REPLACE DATA VARIABLES WITH FIREBASE ONES
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

const Leaderboard = ({title}: ItemProps) => (
    <View style={s.board}>
    <Text style={s.title}>{title}</Text>
  </View>
);

export default function Colectapage({route, navigation}: any){
    const { campaign } = route.params;
    const { products } = route.params as { products: CampaignProduct[] };
    
    // need to fetch user_product documents to get higher for leaderboard
    const [userProduct, setUserProduct] = useState<CampaingUserTotals[]>([]);
    const [loading, setLoading] = useState(true);
        
    useEffect(() => {
        async function fetchData(){
            setLoading(true);
            
            const userSnapshot = await getDocs(collection(db, "campaign_user_totals"));
            console.log(userSnapshot);
            const userProdData: CampaingUserTotals[] = userSnapshot.docs.map((doc) => {
                const data = doc.data() as CampaingUserTotals;
                return {
                    ...data,
                    id: doc.id,
                }
            })
            
            // filter through only campaing unser totals that reference the route params campaign
            const relatedUsers = userProdData.filter((u) => u.campaing_id === campaign.id); 
            setUserProduct(relatedUsers);
            console.log(userProduct);

            setLoading(false);
        }

        fetchData();
    }, []);

    const barData = products.map((p) =>({
        value: p.received_kg ?? 0,
        label: p.product_name ?? "Na",
    }))

    const numProducts = products.length || 1;
    const dividedGoal = (campaign.goal_kg ?? 1000) / numProducts;

    //console.log(route.params)
    return(
        <View style={s.container}>
            <ImageBackground
                source={require('../assets/homeColecta_bg.png')}
                style={s.bg}
            >
                <ImageBackground
                        style={s.headerImg}
                        source={{uri: campaign.image_url}}
                >
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


                </ImageBackground>
                
                <View style={s.header}>
                    <Text style={s.headerText}>{campaign?.name ?? "Unknown campaign"}</Text>
                    <Text style={s.subText}>{campaign.start?.toDate?.().toLocaleDateString() ?? "N/A"} - {campaign.end?.toDate?.().toLocaleDateString() ?? "N/A"}</Text>


                    <Pressable
                            onPress = {() => {
                            navigation.navigate("addColecta")
                        }}>

                            <Image
                                source={require('../assets/addColecta.png')}
                                style={s.addImg}
                            />        
                    </Pressable>

                </View>

                <View style={s.content}>
                    <View style={s.desc}>
                        <Text style={s.descText}>{campaign.description}</Text>

                    </View>

                    <View style={s.graphs}>
                        <BarChart 
                            data={barData}
                            barWidth={30}
                            noOfSections={4}
                            maxValue={dividedGoal + 100}
                            barBorderRadius={3}
                            frontColor={'#5AB02F'}
                            yAxisThickness={0}
                            xAxisThickness={1}
                            hideRules
                            showReferenceLine1
                            referenceLine1Position={dividedGoal}
                            referenceLine1Config={{
                                color: 'gray',
                                dashWidth: 5,
                                dashGap: 4,
                                labelText: String(dividedGoal) + " kg",
                            }}
                            />
                    </View>

                    <Text style={s.boardText}>Ranking de Donaciones</Text>

                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Leaderboard title={item.title} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

// VISTA CARRUSEL ENTRE LEADERBOARD Y CHART
// Typelist Leaderboard
// Bar chart donations
// Reference Line for goal 
