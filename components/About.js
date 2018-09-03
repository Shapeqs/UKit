import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import style from '../Style';
import { Ionicons } from '@expo/vector-icons';
import NavigationBar from 'react-native-navbar';
import URLButton from './containers/buttons/URLButton';

export default class About extends React.Component {
    static navigationOptions = ({ navigation }) => {
        let title = 'À propos';
        let leftButton = (
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
                style={{
                    justifyContent: 'space-around',
                    paddingLeft: 5,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Ionicons
                        name="ios-arrow-back"
                        size={32}
                        style={{
                            color: 'white',
                        }}
                    />
                    <View
                        style={{
                            justifyContent: 'space-around',
                            marginLeft: 5,
                        }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            Retour
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
        return {
            title,
            header: (
                <View
                    style={{
                        backgroundColor: style.colors.blue,
                    }}>
                    <NavigationBar title={{ title, tintColor: 'white' }} tintColor={'transparent'} leftButton={leftButton} />
                </View>
            ),
        };
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={style.about.view}>
                    <Text style={style.about.title}>Ukit Bordeaux</Text>
                    <View style={style.about.content}>
                        <Text>Cette application a été développée par Jean B. dans le cadre du concours HackeTaFac 2017.</Text>
                    </View>

                    <Text style={style.about.title}>Me retrouver</Text>
                    <View style={style.about.content}>
                        <URLButton url="https://twitter.com/HackJack_" title="Twitter" />
                        <URLButton url="https://github.com/Jack3113" title="Github" />
                        <URLButton url="https://ukit-bordeaux.fr" title="Site web" />
                    </View>
                </View>
            </View>
        );
    }
}
