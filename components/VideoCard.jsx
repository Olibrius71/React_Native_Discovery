import { View, Text, Image } from "react-native";
import {icons} from "../constants";

const VideoCard = ({ video: {id, title, poster} }) => {
  return (
    <View className="flex-col justify-between items-center px-3 w-full h-[33vh] my-14">
      <View className="flex-row gap-1 items-center w-full h-1/4 border-t-2 border-t-cyan-50">
        <View className="w-1/6 h-3/4 justify-center">
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&s" }}
            className="w-full h-full"
            resizeMode="contain"
          />
        </View>
        
        <View className="flex-col justify-between items-start flex-1">
          <Text className="text-white text-lg">{title}</Text>
          <Text className="text-white text-base">Ville très touristique</Text>
        </View>
        
        <View className="w-1/6 h-3/4 justify-center">
          <Image
            source={icons.menu}
            className="w-3/5 h-3/5"
            resizeMode="contain"
          />
        </View>
      </View>
      
      <View className="w-full">
        <Image
          source={{ uri: poster }}
          className="w-full h-full rounded-3xl"
          resizeMode="contain"
        />
      </View>
    </View>
  )
}

export default VideoCard;
