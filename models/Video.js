import * as FileSystem from 'expo-file-system';

// Define path to the data directory and videos.json file within the app's document directory
const dataDirPath = `${FileSystem.documentDirectory}data`;
const videosFilePath = `${dataDirPath}/videos.json`;

// Default content for videos.json
const defaultVideos = [
  { id: 1, title: "Vladivostok", poster: "https://www.leblogdesarah.com/wp-content/uploads/2019/03/vladivostok-russie.jpg" },
  { id: 2, title: "Centre-ville de marrakech", poster: "https://www.larousse.fr/encyclopedie/data/images/1315270-Marrakech.jpg" },
  { id: 3, title: "Centro de Sao paulo", poster: "https://i.natgeofe.com/n/c4e193b2-a612-4e00-9e4b-026f33bf8ad6/skyline-sao-paulo-brazil.jpg" }
];

// Helper function to ensure the data directory and videos.json file exist with default content
const ensureVideosFileExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(dataDirPath);
  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(dataDirPath, { intermediates: true });
  }
  
  const fileInfo = await FileSystem.getInfoAsync(videosFilePath);
  if (!fileInfo.exists) {
    // Initialize videos.json with default content if it doesn't exist
    await FileSystem.writeAsStringAsync(videosFilePath, JSON.stringify(defaultVideos, null, 2));
  }
};

// Helper function to read videos from videos.json
const readVideosFile = async () => {
  await ensureVideosFileExists();
  const videosData = await FileSystem.readAsStringAsync(videosFilePath);
  return JSON.parse(videosData);
};

// Helper function to write videos to videos.json
const writeVideosFile = async (data) => {
  await FileSystem.writeAsStringAsync(videosFilePath, JSON.stringify(data, null, 2));
};

const deleteVideosFile = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(videosFilePath);
    
    if (fileInfo.exists) {
      await FileSystem.deleteAsync(videosFilePath);
      console.log('videos.json deleted successfully');
    } else {
      console.log('videos.json does not exist');
    }
  } catch (error) {
    console.error('Error deleting videos.json:', error);
  }
};

class Video {
  async getAllVideos() {
    return readVideosFile();
  }
}

export default Video;
