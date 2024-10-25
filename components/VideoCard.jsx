import { View, Text, Image } from "react-native";

const VideoCard = ({ video: {id, title, poster} }) => {console.log(poster)
  return (
    <View className="flex-col justify-evenly items-center px-3 mb-16 w-full h-1/6">
      <View className="flex-row gap-4 items-start flex-1 h-full bg-amber-400">
        <View className="justify-center items-center flex-row flex-1 bg-primary">
          <Image
            source={{ uri: poster }}
            className="w-24 h-24 rounded-3xl"
            resizeMode="contain"
          />
        </View>
      </View>
      
      <Text className="text-white text-2xl">{title}</Text>
    </View>
  )
}

export default VideoCard;
