import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import {
    Header,
    HeaderDiet,
    IconButton,
   
    IconLabel,
    LineDivider,
 
 
    TextButton
} from "../../components"
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../constants"
import { getDietDayDetails, listDietDayDetails } from '../../src/graphql/queries';
import { API, Auth } from 'aws-amplify';
import { RichEditor } from 'react-native-pell-rich-editor';
const DietDetails = ({ navigation, route }) => {

    const [selectedSize, setSelectedSize] = React.useState("")
    const [foodItem, setFoodItem] = React.useState([])
    const [qty, setQty] = React.useState(1)

    const [diet, setDiet] = React.useState({});
    const [dietDays, setDietDays] = React.useState([])

    React.useEffect(() => { 
        console.log("I am in Diet Details");
        //first understand if the user started to diet
        

        fetchDietDetails();
    }, []
    )
    const fetchDietDetails = async () => {
        console.log("q " + route.params.id);
        const dayId = route.params.id;
        let filter = {
            dietdaysID: { eq: dayId },
            _deleted :  { ne:true}
        }; 
  
        const progresses = await API.graphql({
            query: listDietDayDetails, variables:{ filter:filter    }
        });
        
         
        console.log(JSON.stringify(progresses?.data.listDietDayDetails?.items[0]));
        setDiet(progresses?.data.listDietDayDetails?.items[0])
        return false;
    }

    // Render

    function renderHeader() {
        return (
            <HeaderDiet
                title="DETAILS"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                         
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
               
            />
        )
    }

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Food Card */}
                <View
                    style={{
                        height: 190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >
                    {/* Calories & Favourite */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius,
                        }}
                    >
                        {/* Calories */}
                        <View
                            style={{ flexDirection: 'row' }}
                        >
                            <Image
                                source={icons.calories}
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                            />
                            <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>{foodItem?.calories} calories</Text>
                        </View>

                        {/* Favourite */}
                        <Image
                            source={icons.love}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        />

                    </View>

                    {/* Food Image */}
                    <Image
                        source={foodItem?.image}
                        resizeMode="contain"
                        style={{
                            height: 170,
                            width: "100%"
                        }}
                    />
                </View>

                {/* Food Info */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Name & Description */}
                    <Text style={{ ...FONTS.h1 }}>{foodItem?.name}</Text>

        
                    
                    <RichEditor
                        ref={(r) => this.richtext = r}
                        initialContentHTML={diet.recipe}
                        
                        />
                    {/* Ratings & Duration & Shipping */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        {/* Ratings */}
                        <IconLabel
                            containerStyle={{
                                backgroundColor: COLORS.primary
                            }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{
                                color: COLORS.white
                            }}
                        />

                        {/* Duration */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                            }}
                            icon={icons.clock}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="30 Mins"
                        />

                        {/* Shipping */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: SIZES.radius,
                                paddingHorizontal: 0
                            }}
                            icon={icons.dollar}
                            iconStyle={{
                                tintColor: COLORS.black
                            }}
                            label="Free shipping"
                        />
                    </View>

                    {/* Sizes */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>Sizes:</Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginLeft: SIZES.padding
                            }}
                        >
                            {dummyData.sizes.map((item, index) => {
                                return (
                                    <TextButton
                                        key={`Sizes-${index}`}
                                        buttonContainerStyle={{
                                            width: 55,
                                            height: 55,
                                            margin: SIZES.base,
                                            borderWidth: 1,
                                            borderRadius: SIZES.radius,
                                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                            ...FONTS.body2
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                )
                            })}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Image */}
                <Image
                    source={images.profile}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                />

                {/* Info */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.h3 }}>ByProgrammers</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>1.2 KM away from you</Text>
                </View>

                 
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
              

                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    label="Buy Now"
                    label2="$15.99"
                    onPress={() => navigation.navigate("MyCart")}
                />
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}

            <ScrollView>
                {/* Food Details */}
                {renderDetails()}

                <LineDivider />

                {/* Restaurant */}
                {renderRestaurant()}
            </ScrollView>

            {/* Footer */}
            <LineDivider />

            {renderFooter()}
        </View>
    )
}

export default DietDetails;