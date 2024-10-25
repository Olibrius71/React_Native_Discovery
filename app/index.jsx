import { StatusBar } from 'expo-status-bar';
import {Image, Text, View} from 'react-native';
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import {useGlobalContext} from "../context/GlobalProvider";

export default function App() {

    
    return (
        <SafeAreaView className="bg-black h-full">
            <View className="w-full h-full justify-evenly items-center">
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    className="w-1/3 h-5"
                />
                <Image
                    source={images.cards}
                    resizeMode="contain"
                    className="w-full h-1/4"
                />
                
                <View className="w-full h-1/4 items-center">
                    <Text className="w-2/3 text-3xl text-white text-center">
                        Discover Endless Posibilities With <Text className="font-bold text-primary">React Native</Text>
                    </Text>
                </View>
                
                <CustomButton label="Get Started" fontSizeClass="text-xl" clickFunction={() => router.push("/sign-up")}></CustomButton>
            </View>
        </SafeAreaView>
    );
}