import { useEffect, useState } from "react";
import { db, auth } from "../App";
import { View, Text, TouchableOpacity, Image, Pressable, FlatList, ImageBackground } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { collection, getDocs, getDoc, query, where, doc } from "firebase/firestore";
import { Button } from "@rneui/base";


var s = require('../styles/Colectapage')

interface CampaingUserTotals {
    id: string;
    total_kg: number;
    user_id: any;
    campaing_id: any;
    user?: User | null; 
}

interface User {
  id: string;
  user: string;
  anonymous?: boolean;
  noLeaderboard?: boolean;
  displayName?: string;
}

interface LeaderboardEntry {
  id: string;
  total_kg: number;
  username: User | null;
}

interface CampaignProduct {
  id: string;
  campaign_id: any; // Firestore DocumentReference
  received_kg: number; 
  campaignId: string;
  product_name: string;
  minimum_kg: number; // goal of kgs
}

type ItemProps = {rank: number, title: string, total_kg: number;};

const Leaderboard = ({title, total_kg, rank}: ItemProps) => (
    <View style={s.board}>
        <Text style={s.title}>{rank}. {title} — {total_kg} kg</Text>
    </View>
);

export default function Colectapage({route, navigation}: any){
    const { campaign } = route.params;
    const { products } = route.params as { products: CampaignProduct[] };
    
    // need to fetch user_product documents to get higher for leaderboard
    const [userLeaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [userRole, setUserRole] = useState<string | null>(null);
        
    useEffect(() => {
        async function fetchLeaderboard() {
            setLoading(true);
            const campaignRef = doc(db, "campaign", campaign.id);
            const q = query(
                collection(db, "campaign_user_totals"),
                where("campaign_id", "==", campaignRef),
            );
            const snapshot = await getDocs(q);
            
            const userSnapshot = await getDocs(collection(db, "campaign_user_totals"));
            console.log(userSnapshot);
            const userProdData: CampaingUserTotals[] = userSnapshot.docs.map((doc) => {
                const data = doc.data() as CampaingUserTotals;
                return {
                    ...data,
                    id: doc.id,
                }
            })

            const currentUser = auth.currentUser;
            if(currentUser){
                const userDocRef = doc(db, "users", currentUser.uid);
                const userDocSnap = await getDoc(userDocRef);

                if(userDocSnap.exists()) {
                    const data = userDocSnap.data();
                    setUserRole(data.role || null);
                    console.log("user Role:",data.role);
                } else {
                    console.log("Didnt find user doc")
                }
            }

            const totals = snapshot.docs.map((d) => {
                const data = d.data() as Omit<CampaingUserTotals, "id">;
                return {
                    id: d.id,
                    ...data,
                };
            });

            const rawLeaderboard: (LeaderboardEntry | null)[] = await Promise.all(
                totals.map(async (t) => {
                    if (!t.user_id) return null;

                    const userDoc = await getDoc(t.user_id);
                    if (!userDoc.exists()) return null;

                    const data = userDoc.data() as User;
                    // ternary operator      condition      if tru if false new ternary 
                    const displayName = data.noLeaderboard ? null : data.anonymous? "**********" : data.user
                    if (!displayName) return null;

                    const user: User = {
                        ...data,
                        id: userDoc.id,
                        displayName,
                    };

                    return {
                        id: t.id,
                        total_kg: t.total_kg,
                        username: user,
                    };
                })
            );
            
            const leaderboardWithUsers: LeaderboardEntry[] = rawLeaderboard
            .filter((entry): entry is LeaderboardEntry => entry !== null)
            .sort((a, b) => b.total_kg - a.total_kg);

            setLeaderboard(leaderboardWithUsers);
        }

        fetchLeaderboard();
    }, [campaign.id]);

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
                            navigation.replace("Homepage")
                        }}
                        >
                        <Image
                            source={require('../assets/goBack.png')}
                            style={s.goBackImg}
                            />
                    </Pressable>


                </ImageBackground>

                <View style={s.header}>
                    <Text style={s.headerText}>
                        {campaign?.name ?? "Unknown campaign"}
                    </Text>
                    <Text style={s.subText}>
                        {campaign.start?.toDate?.().toLocaleDateString() ?? "N/A"} - {campaign.end?.toDate?.().toLocaleDateString() ?? "N/A"}
                    </Text>

                    {(userRole === "voluntario" || userRole === "admin") && (
                    <Pressable
                        style={s.addButton}
                        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        onPress={() =>
                            navigation.replace("AddDonation", {campaign: campaign,products:products})
                        }
                    >
                        <Image
                            source={require('../assets/addButton.png')}
                            style={s.addImg}
                        />
                    </Pressable>
                        )}
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

                    <Text style={s.boardText}>Ranking de donadores</Text>

                    <FlatList
                        data={userLeaderboard}
                        renderItem={({item, index}) => 
                            <Leaderboard 
                                rank={index + 1 }
                                title={item.username?.displayName ?? "Unknown"} 
                                total_kg={item.total_kg} 
                            />
                        }
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
