import { useUser } from '@/context/UserContext';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function useAuthVerify(navigation) {
  const { signed } = useUser();

  useEffect(() => {
    if (!signed) {
      Alert.alert(
        'Usuário não conectado !',
        'Para acessar essa tela é necessário estar conectado em uma conta!',
      );
      navigation.navigate('Welcome');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);
}
