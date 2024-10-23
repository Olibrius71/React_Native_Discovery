import {View, Text, Image} from "react-native";
import {Tabs} from "expo-router";

import { icons } from "../../constants";
import { colors } from "../../constants";


const TabIcon = ({ icon, color }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-7 h-7"
            />
        </View>
    );
}

const TABS = [
    { name: 'home', title: 'Home', icon: icons.home },
    { name: 'bookmark', title: 'Bookmark', icon: icons.bookmark },
    { name: 'create', title: 'Create', icon: icons.plus },
    { name: 'profile', title: 'Profile', icon: icons.profile }
];

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 1,
                    paddingTop: 10,
                    height: 57
                }
            }}
        >
            {TABS.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <TabIcon icon={tab.icon} color={color} />
                        )
                    }}
                />
            ))}
        </Tabs>
    );
}


export default TabsLayout;