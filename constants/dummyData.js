const myProfile = {
    name: "ByProgrammers",
    profile_image: require("../assets/images/header.jpg"),
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: require("../assets/icons/burger.png")
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: require("../assets/icons/cherry.png")
    },
    {
        id: 3,
        name: "Rice Item",
        icon: require("../assets/icons/rice.png")
    }
]

const hamburger = {
    id: 1,
    name: "Hamburger",
    description: "Chicken patty hamburger",
    categories: [1, 2],
    price: 15.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]

const sizes = [
    {
        id: 1,
        label: '12"'
    },
    {
        id: 2,
        label: '14"'
    },
    {
        id: 3,
        label: '16"'
    },
    {
        id: 4,
        label: '18"'
    }
]

 

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]


const genres = [
    {
        id: 1,
        name: "Male",
        icon: require("../assets/icons/male.png"),
    },
    {
        id: 2,
        name: "Female",
        icon: require("../assets/icons/female.png"),
    },
    {
        id: 3,
        name: "Not to say",
        icon: require("../assets/icons/male.png"),
    },
]

const levels = [
    {
        id: 61,
        name: "Beginner",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 62,
        name: "Intermediate",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
    {
        id: 63,
        name: "Advanced",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]





const weightbutton = [
    {
        id: 2011,
        name: "Select your weight",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1010"
    },
    {
        id: 2012,
        name: "Select your age",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1011"
    }
]
 

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]

const test = 
[{"latitude": 40.94926, "longitude": 39.94359}, {"latitude": 40.95107, "longitude": 39.94717}, {"latitude": 40.95115, "longitude": 39.94388}, {"latitude": 40.95026, "longitude": 39.941}, {"latitude": 40.95258, "longitude": 39.93975}, {"latitude": 40.95416, "longitude": 39.93696}, {"latitude": 40.955, "longitude": 39.93879}, {"latitude": 40.95725, "longitude": 39.94689}, {"latitude": 40.96023, "longitude": 39.96837}, {"latitude": 40.9621, "longitude": 39.97564}, {"latitude": 40.96148, "longitude": 39.98248}, {"latitude": 40.96325, "longitude": 39.99045}, {"latitude": 40.96239, "longitude": 39.99539}, {"latitude": 40.95773, "longitude": 40.00455}, {"latitude": 40.95643, "longitude": 40.00818}, {"latitude": 40.95703, "longitude": 40.01668}, {"latitude": 40.95748, "longitude": 40.02468}, {"latitude": 40.95646, "longitude": 40.03025}, {"latitude": 40.95354, "longitude": 40.03924}, {"latitude": 40.94787, "longitude": 40.04827}, {"latitude": 40.94371, "longitude": 40.05121}, {"latitude": 40.93709, "longitude": 40.05847}, {"latitude": 40.9355, "longitude": 40.05989}, {"latitude": 40.93413, "longitude": 40.05915}, {"latitude": 40.93028, "longitude": 40.05625}, {"latitude": 40.92276, "longitude": 40.04716}, {"latitude": 40.91669, "longitude": 40.0454}, {"latitude": 40.91317, "longitude": 40.04513}, {"latitude": 40.91005, "longitude": 40.04243}, {"latitude": 40.90166, "longitude": 40.0384}, {"latitude": 40.89466, "longitude": 40.03246}, {"latitude": 40.88215, "longitude": 40.02005}, {"latitude": 40.87817, "longitude": 40.0203}, {"latitude": 40.87675, "longitude": 40.02162}, {"latitude": 40.87253, "longitude": 40.0223}, {"latitude": 40.86803, "longitude": 40.01918}, {"latitude": 40.86377, "longitude": 40.019}, {"latitude": 40.85975, "longitude": 40.01654}, {"latitude": 40.85581, "longitude": 40.01127}, {"latitude": 40.85162, "longitude": 40.00835}, {"latitude": 40.84567, "longitude": 40.00478}, {"latitude": 40.84441, "longitude": 40.00128}, {"latitude": 40.84255, "longitude": 40.00103}, {"latitude": 40.83921, "longitude": 40.00092}, {"latitude": 40.83409, "longitude": 40.00028}, {"latitude": 40.82775, "longitude": 39.99932}, {"latitude": 40.82603, "longitude": 40.00111}, {"latitude": 40.82412, "longitude": 40.00139}, {"latitude": 40.81973, "longitude": 40.00181}, {"latitude": 40.81574, "longitude": 40.00172}, {"latitude": 40.81047, "longitude": 39.99871}, {"latitude": 40.80319, "longitude": 39.9971}, {"latitude": 40.79982, "longitude": 39.99667}, {"latitude": 40.79736, "longitude": 39.99584}, {"latitude": 40.794, "longitude": 39.99004}, {"latitude": 40.78975, "longitude": 39.98583}, {"latitude": 40.78705, "longitude": 39.98324}, {"latitude": 40.7842, "longitude": 39.98168}, {"latitude": 40.77868, "longitude": 39.97943}, {"latitude": 40.77515, "longitude": 39.97931}, {"latitude": 40.77122, "longitude": 39.97637}, {"latitude": 40.76936, "longitude": 39.97319}, {"latitude": 40.76717, "longitude": 39.96664}, {"latitude": 40.76342, "longitude": 39.96078}, {"latitude": 40.76046, "longitude": 39.95821}, {"latitude": 40.75805, "longitude": 39.95336}, {"latitude": 40.75496, "longitude": 39.94909}, {"latitude": 40.74846, "longitude": 39.94506}, {"latitude": 40.74602, "longitude": 39.94123}, {"latitude": 40.74323, "longitude": 39.93836}, {"latitude": 40.73943, "longitude": 39.93342}, {"latitude": 40.73726, "longitude": 39.92893}, {"latitude": 40.73531, "longitude": 39.92417}, {"latitude": 40.73421, "longitude": 39.9203}, {"latitude": 40.729, "longitude": 39.91686}, {"latitude": 40.72264, "longitude": 39.91132}, {"latitude": 40.71691, "longitude": 39.90053}, {"latitude": 40.70925, "longitude": 39.89225}, {"latitude": 40.70478, "longitude": 39.89049}, {"latitude": 40.70046, "longitude": 39.89157}, {"latitude": 40.6982, "longitude": 39.89194}, {"latitude": 40.69704, "longitude": 39.89501}, {"latitude": 40.69402, "longitude": 39.89826}, {"latitude": 40.68764, "longitude": 39.90102}, {"latitude": 40.6789, "longitude": 39.90057}, {"latitude": 40.67282, "longitude": 39.90171}, {"latitude": 40.66776, "longitude": 39.90439}, {"latitude": 40.6649, "longitude": 39.9064}, {"latitude": 40.66103, "longitude": 39.90662}, {"latitude": 40.65296, "longitude": 39.91028}, {"latitude": 40.64662, "longitude": 39.91231}, {"latitude": 40.64345, "longitude": 39.91223}, {"latitude": 40.64233, "longitude": 39.91444}, {"latitude": 40.63879, "longitude": 39.91738}, {"latitude": 40.63422, "longitude": 39.92127}, {"latitude": 40.62981, "longitude": 39.92667}, {"latitude": 40.63063, "longitude": 39.92746}, {"latitude": 40.629, "longitude": 39.92921}, {"latitude": 40.62462, "longitude": 39.9361}, {"latitude": 40.6214, "longitude": 39.93887}, {"latitude": 40.61813, "longitude": 39.94304}, {"latitude": 40.61729, "longitude": 39.94678}, {"latitude": 40.61949, "longitude": 39.944}, {"latitude": 40.61407, "longitude": 39.95283}, {"latitude": 40.61032, "longitude": 39.95199}, {"latitude": 40.60753, "longitude": 39.95113}, {"latitude": 40.60425, "longitude": 39.95319}, {"latitude": 40.60283, "longitude": 39.95362}, {"latitude": 40.60192, "longitude": 39.95653}, {"latitude": 40.5967, "longitude": 39.96404}, {"latitude": 40.59177, "longitude": 39.96744}, {"latitude": 40.59077, "longitude": 39.96909}, {"latitude": 40.59158, "longitude": 39.97495}, {"latitude": 40.59072, "longitude": 39.97971}, {"latitude": 40.58894, "longitude": 39.98578}, {"latitude": 40.58803, "longitude": 39.99273}, {"latitude": 40.58878, "longitude": 39.99525}, {"latitude": 40.58699, "longitude": 39.99853}, {"latitude": 40.58499, "longitude": 40.00372}, {"latitude": 40.58414, "longitude": 40.01084}, {"latitude": 40.58114, "longitude": 40.01579}, {"latitude": 40.57637, "longitude": 40.02154}, {"latitude": 40.57151, "longitude": 40.02678}, {"latitude": 40.5687, "longitude": 40.0267}, {"latitude": 40.56784, "longitude": 40.02772}, {"latitude": 40.56964, "longitude": 40.03009}, {"latitude": 40.56932, "longitude": 40.036}, {"latitude": 40.56703, "longitude": 40.03935}, {"latitude": 40.56505, "longitude": 40.03874}, {"latitude": 40.56149, "longitude": 40.03422}, {"latitude": 40.5576, "longitude": 40.03057}, {"latitude": 40.5457, "longitude": 40.02892}, {"latitude": 40.53644, "longitude": 40.02779}, {"latitude": 40.53353, "longitude": 40.02514}, {"latitude": 40.52932, "longitude": 40.0208}, {"latitude": 40.52266, "longitude": 40.01894}, {"latitude": 40.51926, "longitude": 40.01599}, {"latitude": 40.51635, "longitude": 40.01582}, {"latitude": 40.47831, "longitude": 40.02549}, {"latitude": 40.47648, "longitude": 40.02872}, {"latitude": 40.47677, "longitude": 40.03389}, {"latitude": 40.47075, "longitude": 40.03897}, {"latitude": 40.46867, "longitude": 40.04859}, {"latitude": 40.46566, "longitude": 40.05112}, {"latitude": 40.46177, "longitude": 40.05043}, {"latitude": 40.45469, "longitude": 40.05349}, {"latitude": 40.44953, "longitude": 40.05569}, {"latitude": 40.44836, "longitude": 40.05867}, {"latitude": 40.44545, "longitude": 40.05816}, {"latitude": 40.44126, "longitude": 40.055}, {"latitude": 40.43473, "longitude": 40.05955}, {"latitude": 40.43046, "longitude": 40.061}, {"latitude": 40.42191, "longitude": 40.06099}, {"latitude": 40.41125, "longitude": 40.06508}, {"latitude": 40.40551, "longitude": 40.06701}, {"latitude": 40.40248, "longitude": 40.06929}, {"latitude": 40.4034, "longitude": 40.07321}, {"latitude": 40.40332, "longitude": 40.07702}, {"latitude": 40.39932, "longitude": 40.07882}, {"latitude": 40.39522, "longitude": 40.08109}, {"latitude": 40.39095, "longitude": 40.08724}, {"latitude": 40.38529, "longitude": 40.09106}, {"latitude": 40.37938, "longitude": 40.08929}, {"latitude": 40.37321, "longitude": 40.09075}, {"latitude": 40.36463, "longitude": 40.09569}, {"latitude": 40.36172, "longitude": 40.09939}, {"latitude": 40.36113, "longitude": 40.10037}, {"latitude": 40.35111, "longitude": 40.10684}, {"latitude": 40.34823, "longitude": 40.10934}, {"latitude": 40.34637, "longitude": 40.11597}, {"latitude": 40.33974, "longitude": 40.12481}, {"latitude": 40.33406, "longitude": 40.12579}, {"latitude": 40.31827, "longitude": 40.12509}, {"latitude": 40.31378, "longitude": 40.1233}, {"latitude": 40.3083, "longitude": 40.11964}, {"latitude": 40.30706, "longitude": 40.12}, {"latitude": 40.30482, "longitude": 40.12276}, {"latitude": 40.29879, "longitude": 40.12909}, {"latitude": 40.29218, "longitude": 40.13613}, {"latitude": 40.28935, "longitude": 40.13976}, {"latitude": 40.28822, "longitude": 40.14456}, {"latitude": 40.28793, "longitude": 40.15348}, {"latitude": 40.28397, "longitude": 40.16176}, {"latitude": 40.27726, "longitude": 40.16526}, {"latitude": 40.27738, "longitude": 40.17415}, {"latitude": 40.277, "longitude": 40.18023}, {"latitude": 40.27317, "longitude": 40.18978}, {"latitude": 40.26516, "longitude": 40.20415}, {"latitude": 40.25875, "longitude": 40.21211}, {"latitude": 40.25676, "longitude": 40.20727}, {"latitude": 40.25322, "longitude": 40.20313}, {"latitude": 40.24967, "longitude": 40.19969}, {"latitude": 40.24859, "longitude": 40.18858}, {"latitude": 40.24643, "longitude": 40.17182}, {"latitude": 40.24175, "longitude": 40.16185}, {"latitude": 40.23583, "longitude": 40.14444}, {"latitude": 40.23389, "longitude": 40.13351}, {"latitude": 40.22941, "longitude": 40.11578}, {"latitude": 40.22508, "longitude": 40.10502}, {"latitude": 40.22251, "longitude": 40.08662}, {"latitude": 40.22408, "longitude": 40.07433}, {"latitude": 40.22315, "longitude": 40.06893}, {"latitude": 40.22242, "longitude": 40.06414}, {"latitude": 40.21783, "longitude": 40.05118}, {"latitude": 40.21015, "longitude": 40.03384}, {"latitude": 40.20176, "longitude": 40.00737}, {"latitude": 40.2003, "longitude": 39.99576}, {"latitude": 40.19769, "longitude": 39.98991}, {"latitude": 40.19313, "longitude": 39.96813}, {"latitude": 40.19269, "longitude": 39.96376}, {"latitude": 40.19256, "longitude": 39.96155}, {"latitude": 40.19131, "longitude": 39.94742}, {"latitude": 40.18706, "longitude": 39.93282}, {"latitude": 40.18245, "longitude": 39.92059}, {"latitude": 40.17392, "longitude": 39.90864}, {"latitude": 40.16864, "longitude": 39.89722}, {"latitude": 40.16609, "longitude": 39.89391}, {"latitude": 40.16272, "longitude": 39.89269}, {"latitude": 40.16026, "longitude": 39.89222}, {"latitude": 40.15683, "longitude": 39.89}, {"latitude": 40.15234, "longitude": 39.89038}, {"latitude": 40.14918, "longitude": 39.88911}, {"latitude": 40.14618, "longitude": 39.89063}, {"latitude": 40.14048, "longitude": 39.88997}, {"latitude": 40.13899, "longitude": 39.89211}, {"latitude": 40.13483, "longitude": 39.89082}, {"latitude": 40.13054, "longitude": 39.89226}, {"latitude": 40.12569, "longitude": 39.88911}, {"latitude": 40.11645, "longitude": 39.88992}, {"latitude": 40.11469, "longitude": 39.88824}, {"latitude": 40.11241, "longitude": 39.88879}, {"latitude": 40.10802, "longitude": 39.88624}, {"latitude": 40.10436, "longitude": 39.88389}, {"latitude": 40.10206, "longitude": 39.88176}, {"latitude": 40.09892, "longitude": 39.88114}, {"latitude": 40.0943, "longitude": 39.88194}, {"latitude": 40.08964, "longitude": 39.8806}, {"latitude": 40.08186, "longitude": 39.87965}, {"latitude": 40.07437, "longitude": 39.87654}, {"latitude": 40.06542, "longitude": 39.87643}, {"latitude": 40.05588, "longitude": 39.87391}, {"latitude": 40.05, "longitude": 39.86846}, {"latitude": 40.04478, "longitude": 39.86053}, {"latitude": 40.04023, "longitude": 39.84956}, {"latitude": 40.03357, "longitude": 39.84147}, {"latitude": 40.02945, "longitude": 39.83431}, {"latitude": 40.02716, "longitude": 39.83346}, {"latitude": 40.02505, "longitude": 39.83038}, {"latitude": 40.01725, "longitude": 39.81967}, {"latitude": 40.01588, "longitude": 39.81704}, {"latitude": 40.01237, "longitude": 39.81461}, {"latitude": 40.00918, "longitude": 39.8122}, {"latitude": 40.0052, "longitude": 39.81074}, {"latitude": 40.00005, "longitude": 39.80715}, {"latitude": 39.99529, "longitude": 39.80709}, {"latitude": 39.99471, "longitude": 39.80075}, {"latitude": 39.99322, "longitude": 39.78697}, {"latitude": 39.99223, "longitude": 39.77178}, {"latitude": 39.994, "longitude": 39.76539}, {"latitude": 39.99734, "longitude": 39.75519}, {"latitude": 39.99821, "longitude": 39.75088}, {"latitude": 39.99346, "longitude": 39.74561}, {"latitude": 39.98644, "longitude": 39.73848}, {"latitude": 39.98291, "longitude": 39.73522}, {"latitude": 39.97557, "longitude": 39.73404}, {"latitude": 39.97235, "longitude": 39.73507}, {"latitude": 39.97078, "longitude": 39.73604}, {"latitude": 39.96927, "longitude": 39.73889}, {"latitude": 39.9595, "longitude": 39.75102}, {"latitude": 39.95755, "longitude": 39.75346}, {"latitude": 39.95238, "longitude": 39.75676}, {"latitude": 39.94822, "longitude": 39.75576}, {"latitude": 39.9457, "longitude": 39.75313}, {"latitude": 39.93978, "longitude": 39.74803}, {"latitude": 39.93721, "longitude": 39.74666}, {"latitude": 39.9343, "longitude": 39.74695}, {"latitude": 39.92906, "longitude": 39.74382}, {"latitude": 39.92592, "longitude": 39.73982}, {"latitude": 39.92444, "longitude": 39.73874}, {"latitude": 39.92351, "longitude": 39.73825}, {"latitude": 39.92275, "longitude": 39.73501}]

const fromLocs = [
    {
        latitude: 41.102697,
        longitude: 39.716763,
    },
    {
        latitude: 	40.9490318,
        longitude: 39.9426112,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]

const kfc = require("../assets/dummyData/kfc.png")
const pizzaHut = require("../assets/dummyData/pizza_hut.png")
const mcDonald = require("../assets/dummyData/mcdonald.png")
const burgerKing = require("../assets/dummyData/burger_king.png")
const domino = require("../assets/dummyData/domino_pizza.png")
const starbucks = require("../assets/dummyData/starbucks.png")
const veg_biryani = require("../assets/dummyData/veg_biryani.png")
const wrap_sandwich = require("../assets/dummyData/wrap_sandwich.png")

const orderHistories = [
    {
        title: "19 Sep 2021",
        data: [
            {
                id: 18888,
                name: "Pizza Hut",
                image: pizzaHut,
                price: 35.30,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 3,
                deliveredTime: "19 Sep, 14:30"
            },
            {
                id: 28888,
                name: "KFC",
                image: kfc,
                price: 55.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "19 Sep, 12:30"
            },
            {
                id: 38888,
                name: "Domino's Pizza",
                image: domino,
                price: 15.50,
                status: "C",
                status_desc: "Order Cancel",
                itemCount: 1,
                deliveredTime: "19 Sep, 10:30"
            },
        ]
    },
    {
        title: "15 Sep 2021",
        data: [
            {
                id: 48888,
                name: "Starbucks",
                image: starbucks,
                price: 40.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "15 Sep, 10:00"
            }
        ]
    }
]

const upcomingOrders = [
    {
        title: "",
        data: [
            {
                id: 88888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 98888,
                name: "McDonald",
                image: mcDonald,
                price: 20.00,
                status: "O",
                status_desc: "Food on the way",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
        ]
    },
    {
        title: "Latest Orders",
        data: [
            {
                id: 68888,
                name: "Starbucks",
                image: starbucks,
                price: 10.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 10:00"
            },
            {
                id: 78888,
                name: "Burger King",
                image: burgerKing,
                price: 12.00,
                status: "D",
                status_desc: "Order Delivered",
                itemCount: 4,
                deliveredTime: "27 Sep, 8:00"
            }
        ]
    }
]

const availableCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "KFC",
        image: kfc,
        description: 'Valid until 01 Jan 2022',
        discountPercent: 10,
    },
    {
        id: 3,
        name: "Pizza Hut",
        image: pizzaHut,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 35,
    },
    {
        id: 4,
        name: "Starbucks",
        image: starbucks,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 15,
    },
    {
        id: 5,
        name: "Domino's Pizza",
        image: domino,
        description: 'Valid until 01 Feb 2022',
        discountPercent: 30,
    },
]

const usedCoupons = [
    {
        id: 1,
        name: "Burger King",
        image: burgerKing,
        description: 'Used on 2 Sep 2021',
        discountPercent: 20,
    },
    {
        id: 2,
        name: "Starbucks",
        image: starbucks,
        description: 'Used on 18 Sep 2021',
        discountPercent: 15,
    },
]

const notifications = [
    {
        title: "Today",
        data: [
            {
                id: 1,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "a few seconds ago"
            },
            {
                id: 2,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "5 mins ago"
            },
        ]
    },
    {
        title: "Yesterday",
        data: [
            {
                id: 3,
                image: domino,
                title: "Domino's - Buy 1 get 1 free",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            },
            {
                id: 4,
                image: veg_biryani,
                title: "Veg Biryani - 35% sale today",
                desc: "Buy 1 get 1 free for small sizes until Nov 30, 2021",
                duration: "1 day ago"
            }
        ]
    }
]

const deliveryMan = {
    name: "Williams Adam",
    avatar: require("../assets/dummyData/delivery_man.png")
}


 

 
export default {
    myProfile,
    categories,
    menu,
    sizes,
    myCards,
    allCards,
    fromLocs,
    orderHistories,
    upcomingOrders,
    availableCoupons,
    usedCoupons,
    notifications,
    deliveryMan,
    test,
    levels,
    genres,
    weightbutton,
}