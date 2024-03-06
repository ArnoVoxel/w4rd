import { Pressable, Text, View, Dimensions, ImageBackground } from "react-native";
import globalStyles from "../../style/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import Bubble from "../../components/Bubble";

function Homepage({ navigation }: { navigation: any }) {
  const bubbles = ['Gyro1', 'Camera', 'Gyro3', 'Gyro4', 'Gyro5', 'Gyro6']; // Add more if needed
  const { width, height } = Dimensions.get('window');
  const bubbleSize = 100;
  const verticalSpacing = 200; // Adjust as needed
  const horizontalSpacing = width / 4; // Adjust as needed

  const image = { uri: '../../assets/fond2@3x.png' };

  return (
    // <LinearGradient
    //   // Background Linear Gradient
    //   colors={['#06166B', '#0046C9', 'rgba(72, 14, 57, 0.8)']}
    //   locations={[0.2, 0.8, 1]}
    //   end={{ x: 1, y: 1 }}
    //   style={globalStyles.container}
    // >
    <View style={globalStyles.container}>
      <ImageBackground source={image} style={{ width: '100%', height: '100%' }}>
      <View style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        {bubbles.map((bubble, index) => {
          const level = Math.floor(Math.log2(index + 1));
          const offset = index - Math.pow(2, level) + 1;
          const x = width / 2 + (offset * 2 - 1 - Math.pow(2, level)) * horizontalSpacing / 2;
          const y = level * verticalSpacing;
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
              style={{
                position: 'absolute',
                left: x - bubbleSize / 2,
                top: y,
              }}
            >
              <Bubble size={bubbleSize} color="red" name={bubble} />
            </Pressable>
          );
        })}
        </View>
      </ImageBackground>
    </View>
    // </LinearGradient> 
  );
}

export default Homepage;