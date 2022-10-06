import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

const Chair = (props) => {

    const [isBig, setIsBig] = useState(false);

    const { theme } = props; //Object Destructuring
    /*  useEffect(() => {
         console.log("INSIDE USE EFFECT");
         return () => {
         }
     }, [isBig]) */

    const changeState = () => {

        setIsBig(!isBig);
    }

    return (
        <View>
            <Text style={{ fontSize: isBig ? 24 : 15, color: theme === 'dark' ? 'grey' : 'purple' }} onPress={changeState}>This is a Chair</Text>
        </View>
    )
}

export default Chair