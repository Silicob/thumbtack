import {Text, ScrollView} from "react-native";
import React, {useState} from "react";
import styles from "../styles/global";
import LocationFormInputs from "./LocationFormInputs";
import {Button, Divider} from "react-native-paper";
import CoordinateInfo from "./CoordinateInfo";
import ApproximateAddress from "./ApproximateAddress";

const EditLocation = () => {
    const [dateLocated, setDateLocated] = useState('');
    const [longitude, setLongitude] = useState(0);
    const [latitude, setLatitude] = useState(0);
    const [approxAddress, setApproxAddress] = useState('');

    const saveLocation = () => {
        console.log('Test output: location saved!');
    };

    return (
        <ScrollView style={styles.container}>
            <LocationFormInputs />

            <Divider style={styles.divider}/>

            <CoordinateInfo dateLocated={dateLocated} longitude={longitude} latitude={latitude}/>

            <Divider style={styles.divider}/>

            <ApproximateAddress approxAddress={approxAddress}/>

            <Button raised primary mode='contained' icon='map-marker-plus' style={styles.submitButton}
                    onPress={saveLocation}>Save Location</Button>
        </ScrollView>
    );
};

export default EditLocation;