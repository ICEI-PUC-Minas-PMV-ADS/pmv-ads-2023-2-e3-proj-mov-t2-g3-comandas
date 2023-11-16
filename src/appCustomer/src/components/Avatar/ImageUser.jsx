import { StyleSheet, Text, View, Alert, Button, Image } from 'react-native';
import React, { useState } from 'react';
import ImagePicker from 'expo-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function ImageUser() {
  // const [image, setImage] = useState(null);
  const [imageUri, setImageUri] = useState('');

  const openCamera = () => {
    const options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User canceles image picker');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: `data:image/jpeg;base64,${response.base64}` };
        setImageUri(source);
      }
    });
  };
  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'image',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User canceles image picker');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: `data:image/jpeg;base64,${response.base64}` };
        setimageUriGallery(source);
      }
    });
  };

  return (
    <View>
      <Button
        title="Choose Image"
        onPress={() => {
          openGallery();
        }}
      />
      <Button
        title="Choose Image"
        onPress={() => {
          openCamera();
        }}
      />
      {image && <Image source={imageUri} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

const styles = StyleSheet.create({});

// ANOTHER CODE WITH FILE SYSTEM

/* useEffect(() => {
    loadimage();
  }, []);

  const loadimage = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(imgDir);
    if (files.length > 0) {
      setImage(files.map((f) => imgDir + f));
    }
  };

  const selectImage = async (useLibrary) => {
    let result;
    try {
      if (useLibrary) {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          cameraType: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }
      if (!result.canceled) {
        saveImage(result.assets[0].uri);
        console.log(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert(`Error uploading image: ${error.message}`);
    }
  };

  const saveImage = async (uri) => {
    // check if exists a directory
    await ensureDirExists();
    // rename the file with date and time plus filename
    const filename = `${new Date().getTime()}.jpg`;
    // destination
    const dest = imgDir + filename;
    // to copy creating a new file in the destination with the new filename
    await FileSystem.copyAsync({ from: uri, to: dest });
    setImage([...image, dest]);
  };

  const deleteImage = async (uri) => {
    await FileSystem.deleteAsync(uri);
    setImage(image.filter((i) => i !== uri));
  };

  const uploadImage = async (uri) => {
    setIsLoading(true);

    await FileSystem.uploadAsync('http://192.168.0.187:8081/upload.php', uri, {
      httpMethod: 'POST',
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      fieldName: 'file',
    });
    console.log(uri);
    setIsLoading(false);
  };
 */
