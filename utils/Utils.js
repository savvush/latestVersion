import { createUser } from "../src/graphql/mutations";
import { Amplify, API, graphqlOperation } from 'aws-amplify'

import { Dimensions, Platform } from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
 
import { Auth } from 'aws-amplify';
import { User } from "../src/models";

const { height: D_HEIGHT, width: D_WIDTH } = (() => {
    const { width, height } = Dimensions.get('window');
    if (width === 0 && height === 0) {
      return Dimensions.get('screen');
    }
    return { width, height };
  })();
  
  const X_WIDTH = 375;
  const X_HEIGHT = 812;
  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;
  
  export const IS_IPHONE_X = (() => {
    if (Platform.OS === 'web') {
      return false;
    }
    return (
      (Platform.OS === 'ios' &&
        ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
          (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))) ||
      (D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH) ||
      (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)
    );
  })();
  
  export const rnd = (max = 256) =>
    Math.random() * max;
  
  export const generateColor = () =>
    `rgb(${rnd()},${rnd()},${rnd()})`;



function isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
    if (value == "") {
        setEmailError("")
    }
    else if (isValidEmail(value)) {
        setEmailError("")
    } 
    else {
        setEmailError("Invalid Email")
    }
}

function validatePassword(value, setPasswordError) {
    if (value.length < 9) {
        setPasswordError("Password must be 9 characters")
    } else {
        setPasswordError("")
    }
}

function validateInput(value, minLength, setError) {
    if (value.length < minLength) { 
        setError("Invalid Input")
    } else {
        setError("")
    }
}

function calculateAngle(coordinates) {
    let startLat = coordinates[0]["latitude"]
    let startLng = coordinates[0]["longitude"]
    let endLat = coordinates[1]["latitude"]
    let endLng = coordinates[1]["longitude"]
    let dx = endLat - startLat
    let dy = endLng - startLng

    return Math.atan2(dy, dx) * 180 / Math.PI
}


async function saveEmptyUser() {
    try {

        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: false })
        const { attributes } = authUser;
     
        if (!attributes) return

        const input = {
            id: attributes.sub,
            username: attributes.email,
            gender: "",
            weight: "0",
            height: "0",
            age: "0",
            goalTrainingTypes: [],
            goalMuscleGroups: [],
            recipes: [],
            DietRecipeProgresses: [],
            //goalTrainingTypes: selectedGoal.id,
            userType: "REGULAR",
        }

        
        // console.log(input);


        await DataStore.save(
            new User(input)
        );


        // const user = await API.graphql(
        //     graphqlOperation(
        //         createUser, {
        //         input
        //     })
        // )

        

    } catch (err) {
        console.log('error creating user:', err)
    }
}


async function saveUser(userInput) {
    try {

        const authUser = await Auth.currentAuthenticatedUser({ bypassCache: false })
        const { attributes } = authUser;
        const { selectedAge, selectedFHeight, selectedFWeight, selectedGenre, selectedGoal } = userInput;

        if (!attributes) return
      
        const input = {
            id: attributes.sub,
            username: attributes.email,
            gender: selectedGenre,
            weight: selectedFHeight,
            height: selectedFWeight,
            age: "" + selectedAge,
            //goalTrainingTypes: selectedGoal.id,
            userType: "REGULAR",
        }
        console.log(selectedFWeight + ' = ' + attributes.email + ' = ' + selectedGenre + ' = ' + selectedGoal   );
        console.log(input  );

        const user = await API.graphql(
            graphqlOperation(
                createUser, {
                input
            })
        )

        console.log("1111111112"+ selectedAge);
        const currentUser = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(currentUser , {
          'custom:gender':  ""+selectedGenre,
          'custom:age' : ""+selectedAge
        });


        console.log(user);

    } catch (err) {
        console.log('error creating user:', err)
    }
}

const utils = {
    isValidEmail,
    validateEmail,
    validatePassword,
    validateInput,
    calculateAngle,
    saveUser,
    saveEmptyUser,
};

export default utils;