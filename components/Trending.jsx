import {View, Text, FlatList, TouchableOpacity, ImageBackground, Image, Dimensions} from "react-native";
import {useState, useRef, useCallback} from "react";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";

const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.9,
  },
  1: {
    opacity: 1,
    scale: 0.8,
  },
};
const zoomIn = {
  0: {
    opacity: 1,
    scale: 0.8,
  },
  0.5: {
    opacity: 1,
    scale: 0.9,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

const thumbnails = [
  "https://images3.alphacoders.com/136/1365701.jpeg",
  "https://images4.alphacoders.com/587/587526.jpg",
  "https://images6.alphacoders.com/133/1330040.jpeg"
];
const getRandomImage = () => {
  return thumbnails[Math.floor(Math.random() * thumbnails.length)];
};

const TrendingItem = ({ activeItem, item }) => {
  const [play, setPlay] = useState(false);
  
  return (
    <Animatable.View
      className="m-3"
      animation={activeItem?.id === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      
      {play ? (
        <View>
          <Text className="text-xl text-white" onPress={() => setPlay(false)}>Playing</Text>
        </View>
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity="0.8"
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: item.poster }}
            className="w-52 h-72 rounded-[35px] my-6 overflow-hidden shadow-xl shadow-black"
            resizeMode="cover"
          />
          
          <Image
            source={icons.play}
            className="absolute w-10 h-10"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  )
}

const Trending = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(posts[1] || null);
  
  // Config for viewability threshold
  const viewabilityConfig = { itemVisiblePercentThreshold: 68 };
  
  // Handle viewable items change
  const viewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].item); // Set the full item
    }
  }, []);
  
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      horizontal
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    />
  )
}

export default Trending;
