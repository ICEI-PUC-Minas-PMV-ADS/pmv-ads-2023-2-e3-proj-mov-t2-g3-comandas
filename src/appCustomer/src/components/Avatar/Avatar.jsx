import COLORS from '@/constants/colors';
import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AvatarExemple from '../../assets/UserAvatar.png';

function Avatar({ navigation, ...props }) {
  const [imgUrl, setImgUrl] = useState(props.imgUrl || AvatarExemple);

  const handleEditImg = (newImgUrl) => {
    setImgUrl(newImgUrl);
  };

  const handelUserImg = (userUri) => {
    setImgUrl(userUri);
  };

  const handleSubmit = () => {
    props.onFormSubmit({
      id: props.id,
      imgUrl,
    });
    setImgUrl(AvatarExemple);
  };

  return (
    <View style={styles.profileAvatarWrapper}>
      <Image
        alt="Profile Picture"
        source={{ uri: imgUrl }}
        style={styles.profileAvatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 80,
  },
  body: {
    flexDirection: 'row',
    gap: 30,
  },
  btn: {
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.iconBlue,
  },
  profile: {
    backgroundColor: COLORS.white,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -20,
  },
  profileName: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.linkTextGreen,
    textAlign: 'center',
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 99,
    borderColor: COLORS.linkTextGreen,
    borderWidth: 0.2,
  },
  profileAvatarWrapper: {
    position: 'relative',
  },
  profileAction: {
    width: 24,
    height: 24,
    borderRadius: 99,
    backgroundColor: COLORS.linkTextGreen,
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    backgroundColor: COLORS.iconRed,
    width: 60,
    height: 60,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.iconRed,
    borderRadius: 99,
    borderWidth: 3,
  },
  logoutLabel: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Avatar;
