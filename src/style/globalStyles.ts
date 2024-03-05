import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  // Define your styles here
  container: {
    flex: 1,
    padding: 20,
    // gradient background from #06166B to #0E1A9A
    // backgroundColor: 'linear-gradient(180deg, #06166B 50%, #0E1A9A 100%)',
    // backgroundColor: '#0E1A9A',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  paragraph: {
    color: 'white',
    marginVertical: 8,
    lineHeight: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default globalStyles;