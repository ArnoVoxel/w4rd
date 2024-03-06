import { Pressable, Text, View, Dimensions, ImageBackground } from "react-native";
import globalStyles from "../../style/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import Bubble from "../../components/Bubble";

function Homepage({ navigation }: { navigation: any }) {
  const bubbles = ['Recherche', 'Camera', 'Notes', 'Mail', 'Upward', 'Gyro', 'Profil', 'Actualités', 'Agenda']; // Add more if needed
  const { width, height } = Dimensions.get('window');
  const bubbleSize = 100;
  const verticalSpacing = 100; // Adjust as needed
  const horizontalSpacing = width / 4; // Adjust as needed

  const image = { uri: '../../assets/fond2@3x.png' };

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#06166B', '#0046C9', 'rgba(72, 14, 57, 0.8)']}
      locations={[0.2, 0.8, 1]}
      end={{ x: 1, y: 1 }}
      style={globalStyles.container}
    >
    <View style={globalStyles.container}>
      <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
      <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {bubbles.map((bubble, index) => {

          return (
            <Pressable
              key={bubble}
              onPress={() => {
                if (bubble === 'Camera') {
                  navigation.navigate('Camera');
                } else if (bubble.includes('Gyro')) {
                  navigation.navigate('Gyroscope')
                }
              }}

            >
              <Bubble size={bubbleSize} color="red" name={bubble} />
            </Pressable>
          );
        })}
        </View>
      </ImageBackground>
    </View>
    </LinearGradient> 
  );
}

export default Homepage;