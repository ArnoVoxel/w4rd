import React, { useState, useEffect } from 'react';
import { Button, Image, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  console.log(permission);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View >
        <Text >We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take a photo" onPress={takeImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}