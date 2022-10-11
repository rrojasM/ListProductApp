import React, { useState } from 'react';
import { Text, ScrollView, Linking, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/header';
import ListItem from '../../../components/listItem';
import EditableBox from '../../../components/editableBox';
import Button from '../../../components/Button';

const Settings = ({ navigation }) => {

    const [editing, setEditing] = useState(false);
    const [values, setvalues] = useState({ name: 'User', email: 'user@email.com' })

    const onEditPress = () => {
        setEditing(true);
    }

    const onSave = () => {
        setEditing(false);
    }

    const onChange = (key, value) => {
        setvalues(v => ({ ...v, [key]: value }))
    }

    const onItemPress = () => {
        Linking.openURL('https://google.com');
    }

    const goBack = () => {
        navigation.goBack();
    }

    console.log(values);
    return (
        <SafeAreaView style={styles.main}>
            <Header showBack onBackPress={goBack} title="Settings" />
            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                    </Pressable>
                </View>

                <EditableBox label="Name" onChangeText={(v) => onChange('name', v)} value={values.name} editable={editing} />
                <EditableBox label="Email" onChangeText={(v) => onChange('email', v)} value={values.email} editable={editing} />
                {editing ? (
                    <Button style={styles.button} onPress={onSave} title="Save" />
                ) : null}


                <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Help Center</Text>
                <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
                <ListItem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <ListItem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings); 
