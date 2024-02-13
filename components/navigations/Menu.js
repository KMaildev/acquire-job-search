import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { View, Image, Text, SafeAreaView } from 'react-native';

import Home from '../../screens/Home';
import News from '../../screens/News';
import Jobs from '../../screens/Jobs';

const Drawer = createDrawerNavigator();

const Menu = () => {

    const getDrawerIcon = (name, color, size) => (
        <Ionicons name={name} color={color} size={size} />
    );

    const CustomDrawerContent = (props) => (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    height: 260,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomColor: '#f4f4f4',
                    borderBottomWidth: 1,
                }}
            >
                <Image
                    source={require('../../assets/data/logo.png')} // Replace with your user image path
                    style={{
                        height: 130,
                        width: 130,
                        borderRadius: 65,
                    }}
                />
                <Text
                    style={{
                        fontSize: 22,
                        marginVertical: 6,
                        fontWeight: 'bold',
                        color: '#111',
                    }}
                >
                    Acquire Co.,Ltd
                </Text>
                <Text style={{ fontSize: 16, color: '#111' }}>
                    Overseas Employment Agency
                </Text>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    );

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#0069FB',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    drawerStyle: {
                        backgroundColor: '#fff',
                        width: 250,
                    },
                    drawerLabelStyle: {
                        color: '#111',
                    },
                }}
            >
                <Drawer.Screen
                    name='Home'
                    component={Home}
                    options={{
                        drawerIcon: ({ color, size }) => getDrawerIcon('home-outline', color, size),
                    }}
                />
                <Drawer.Screen
                    name='Jobs'
                    component={Jobs}
                    options={{
                        drawerIcon: ({ color, size }) => getDrawerIcon('briefcase-outline', color, size),
                    }}
                />
                <Drawer.Screen
                    name='News'
                    component={News}
                    options={{
                        drawerIcon: ({ color, size }) => getDrawerIcon('newspaper-outline', color, size),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Menu;
