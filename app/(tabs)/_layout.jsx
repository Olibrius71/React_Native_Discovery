import {View, Text} from "react-native";
import {Tabs} from "expo-router";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{
                title: "Home",
                headerShown: false,
                //tabBarIcon: ({color, focused}) => ()
            }} />
            <Tabs.Screen name="bookmark" options={{
                title: "Bookmark",
                headerShown: false,
                //tabBarIcon: ({color, focused}) => ()
            }} />
            <Tabs.Screen name="create" options={{
                title: "Create",
                headerShown: false,
                //tabBarIcon: ({color, focused}) => ()
            }} />
        </Tabs>
    )
}

export default TabsLayout;