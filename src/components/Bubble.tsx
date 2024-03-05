import { View, Text } from "react-native";

function Bubble(props: { size: number; color: string; name: string; }) {
  const { size, color, name } = props;
  // display the bubble with the given size and color and the name inside
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: color,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ color: 'white' }}>{name}</Text>
    </View>
  );
}

export default Bubble;