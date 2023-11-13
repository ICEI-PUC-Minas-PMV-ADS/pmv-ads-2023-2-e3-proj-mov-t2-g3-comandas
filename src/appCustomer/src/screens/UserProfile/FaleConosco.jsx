import COLORS from '@/constants/colors';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useUser } from '@/context/UserContext';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LoadingBSheet from '@/components/BottomSheet/LoadingBSheet';
import logoComandas from '../../assets/Comandas-icon.png';

const SECTIONS = [
  {
    header: 'Dúvida',
    icon: 'fdf',
    items: [
      { id: 'name', icon: 'user', label: 'Nome', type: 'input' },
      { id: 'email', icon: 'mail', label: 'Email', type: 'input' },
      {
        id: 'duvida',
        icon: 'edit',
        label: 'Escreva sua Dúvida',
        type: 'input',
      },
    ],
  },
  {
    header: 'Sugestão',
    icon: 'edit',
    items: [
      { id: 'name', icon: 'user', label: 'Nome', type: 'input' },
      { id: 'email', icon: 'mail', label: 'Email', type: 'input' },
      {
        id: 'sugestao',
        icon: 'edit',
        label: 'Escreva sua Sugestão',
        type: 'input',
      },
    ],
  },
  {
    header: 'Comentário',
    icon: 'edit',
    items: [
      { id: 'name', icon: 'user', label: 'Nome', type: 'input' },
      { id: 'email', icon: 'mail', label: 'Email', type: 'input' },
      {
        id: 'comentario',
        icon: 'edit',
        label: 'Escreva seu Comentário',
        type: 'input',
      },
    ],
  },
  {
    header: 'Reclamação',
    icon: 'edit',
    items: [
      { id: 'name', icon: 'user', label: 'Nome', type: 'input' },
      { id: 'email', icon: 'mail', label: 'Email', type: 'input' },
      {
        id: 'reclamacao',
        icon: 'edit',
        label: 'Escreva sua Reclamação',
        type: 'input',
      },
    ],
  },
];

function FaleConosco() {
  const navigation = useNavigation();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [form] = React.useState({
    id: user.id,
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
  const [value, setValue] = React.useState(0);
  const [onChangeText] = React.useState();
  const { tabs, items } = React.useMemo(
    () => ({
      tabs: SECTIONS.map(({ header }) => ({
        header,
      })),
      items: SECTIONS[value].items,
    }),
    [value],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {isLoading ? (
          <LoadingBSheet
            headerText="Enviando..."
            welcomeBackText="Aguarde nosso retorno!"
            route={() => navigation.navigate('UserProfile')}
          />
        ) : null}
        <View style={styles.logoArea}>
          <Image source={logoComandas} style={styles.imageStyle} />
        </View>
        <View>
          <Text style={styles.headerName}>Fale Conosco</Text>
        </View>
        <View>
          <Text style={styles.headerText}>
            {'   '}
            Se você tem alguma{' '}
            <Text style={{ color: COLORS.primary, fontWeight: '500' }}>
              dúvida, sugestão, comentário ou reclamação,
            </Text>{' '}
            por favor, escreva abaixo e envie à nossa equipe. Teremos todo o
            prazer em atendê-lo naquilo que for possível. {'\n'}
          </Text>
        </View>

        {/* >>>>>>>>>>Body<<<<<<<<<<<< */}
        <View style={styles.content}>
          <View style={styles.tabs}>
            {tabs.map(({ header }, index) => {
              const isActive = value === index;

              return (
                <View
                  key={index}
                  style={[
                    styles.tabWrapper,
                    isActive && { borderBottomColor: COLORS.primary },
                  ]}
                >
                  <TouchableOpacity onPress={() => setValue(index)}>
                    <View style={styles.tab}>
                      <Text
                        style={
                          (styles.tabText,
                          {
                            color: isActive ? COLORS.primary : '#6b7280',
                          })
                        }
                      >
                        {header}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          {items.map(({ label, type, id, icon }, index) => (
            <View key={index} style={styles.rowWrapper}>
              <View style={styles.row}>
                <FeatherIcon
                  style={{ padding: 8 }}
                  name={icon}
                  size={18}
                  color={COLORS.placeholderText}
                />
                <Text style={styles.rowLabel}>{label}</Text>

                <View style={{ flex: 1 }} />
                {type === 'input' && (
                  <Text style={styles.rowValue}>{form[id]}</Text>
                )}
              </View>
            </View>
          ))}
          <View style={styles.textInput}>
            <TextInput
              editable
              multiline
              numberOfLines={12}
              height={90}
              maxLength={250}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ padding: 10 }}
            />
          </View>
          {/* >>>>>>>>>> Send Button <<<<<<<<<<<< */}
          <View>
            <TouchableOpacity
              onPress={() => {
                // handleUploadPicture
                setIsLoading(true);
              }}
            >
              <View style={styles.btnAction}>
                <Text style={styles.btnActionText}>Enviar</Text>
                <FeatherIcon name="edit-3" size={16} color={COLORS.white} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FaleConosco;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
  },
  container: {
    paddingVertical: 20,
    flexGrow: 1,
    textAlign: 'justify',
  },
  logoArea: {
    marginTop: 24,
  },
  imageStyle: {
    alignSelf: 'center',
    height: 75,
    width: 75,
    aspectRatio: 1 / 1,
  },
  header: {
    flex: 1,
    textAlign: 'justify',
    backgroundColor: COLORS.white,
    padding: 18,
    justifyContent: 'center',
    marginBottom: -20,
  },
  headerName: {
    marginVertical: 16,
    marginHorizontal: 24,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
  },
  headerText: {
    textAlign: 'justify',
    color: COLORS.greyDark,
    marginVertical: 20,
    marginHorizontal: 24,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
  },
  content: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  tabs: {
    flexDirection: 'row',

    padding: 8,
  },
  tabWrapper: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.greyLineStyle,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.placeholderText,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: COLORS.greyLineStyle,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 50,
  },
  rowLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.placeholderText,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
    marginRight: 4,
  },
  textInput: {
    backgroundColor: COLORS.white,
  },
  btnAction: {
    marginHorizontal: 12,
    marginVertical: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  btnActionText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    marginRight: 8,
  },
});
