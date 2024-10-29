import {View, Text, FlatList, Image, RefreshControl} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import {useEffect, useState} from "react";
import Video from "../../models/Video";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const [videos, setData] = useState([]);
  const VideoInstance = new Video();
  
  useEffect(() => {
    const fetchData = async () => setData(await VideoInstance.getAllVideos());
    fetchData();
    return () => {};
  }, []);
  
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = () => {
    setRefreshing(true);
    //RECHARGER
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  
  return (
    <SafeAreaView className="bg-black h-full w-full">
      <FlatList
        data={videos}
        keyExtractor={ (item) => item.id }
        renderItem={ ( {item} ) => (
          <VideoCard
            video={item}
          />
        )}
        ListHeaderComponent={() => (
          <View className=" flex-col items-center justify-between px-2 mt-1 mb-20 space-y-5">
            <View className="justify-between w-full flex-row">
              <View className="flex-col">
                <Text className="text-cyan-500 text-3xl">REACT</Text>
                <Text className="text-white text-2xl">Native</Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  className="w-8 h-9"
                />
              </View>
            </View>
            
            <SearchInput />
            
            <View className="flex-1 flex-col w-full py-4">
              <Text className="text-white text-2xl font-semibold">
                Latest Videos
              </Text>
              
              <Trending posts={videos}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text className="text-white text-2xl font-semibold">
            Y a rien
          </Text>
        )}
        refreshControl={<RefreshControl />}
      />
    </SafeAreaView>
  )
}

export default Home;