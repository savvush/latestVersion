import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';

const Search = () => {

    React.useEffect(() => {
        console.log("I am in Search");
    },[]
    )

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Search</Text>
        </View>
    )
}

export default Search