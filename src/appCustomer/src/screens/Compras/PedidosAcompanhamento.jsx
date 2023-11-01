import { BASE_URL, API_KEY, ADMIN_TOKEN } from '@env';
import COLORS from '@/constants/colors';
import { useUser } from '@/context/UserContext';
import { StyleSheet, Text, View, SafeAreaView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import axios from 'axios';
import Button from '@/components/Buttons/Button';


const OrderList = () => {
    const [items, setItems] = useState([]);
    const { user } = useUser();
    const [isLoading, setLoading] = useState(false);

    const [DetailVisivel, setDetailVisible] = useState(false);

    const [Valor, setValor] = useState("Shurek");
    const [Restaurante, setRestaurante] = useState("Shurek");
    const [statusPedido, setStatusPedido] = useState("open");

  
    useEffect(() => {
        // Função para buscar itens da API
        const fetchItemsFromAPI = async () => {
        
      try {
        const response = await axios.get(BASE_URL + "customer/" + user.id + "/order", {
          headers: {
            'x-api-key': API_KEY,
            Authorization: ADMIN_TOKEN
          }
        });
        
        if (Array.isArray(response.data) && response.data.length > 0) {
            // Check if the response data is an array with elements
            setItems(response.data);
            setLoading(true);

          } else {
            // Handle the case where no data is returned or the data is an empty array
            console.log('No data received from the API.');
          }
        } catch (error) {
            setLoading(false);

            
            if(error?.response?.status === 404){
            console.log("Sem items");
            setLoading(true);
            }
            else{
            console.error('Erro ao buscar itens da API', error);
            }
        }


      };

    fetchItemsFromAPI();
  }, []);

  // tela de carregamento
if(!isLoading){

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View>
          <Text style={styles.profileText}>
            Ta carregando meu filho
          </Text>
        </View>
      </SafeAreaView>
    );
  }

 // tela de quando o usuario nao tem pedidos
if(items.length === 0){

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
      <Text  style={styles.profileName}> Olá {user.name}  </Text>
      </View>
      <View>
        <Text style={styles.profileText}>
          Você ainda nao possue nenhum pedido cadastrado
        </Text>
      </View>
    </SafeAreaView>
  );
}
// tela de pedidos do usuario
else{

    return (
      <View>
          <Text  style={styles.profileName}> Meus pedidos </Text>

<FlatList
  data={items}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <View style={styles.wrapperContainer}>
      <Text> R$ {item.total}</Text>
      <Text>status: {item.status}</Text>
      <Button
        title='teste'
        onPress={() => {setDetailVisible(true),
            setValor(item.total)
            setRestaurante(item.shop.userInfo.name)
            setStatusPedido(item.status)
        }}
      />
     
    </View>
  )}
/>
<Modal visible={DetailVisivel} animationType="slide">

<Button
        title='Fechar '
        onPress={() => {setDetailVisible(false)}}
      />
      
       <Text>Restaurante: {Restaurante}</Text>
       <Text>Valor total: {Valor}</Text>
       <Text>Status do pedido: {statusPedido}</Text>

    
</Modal>

      </View>
    );
  }
};

export default OrderList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      wrapperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    
        borderRadius: 15,
        backgroundColor: COLORS.neutrlWhite,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    
        elevation: 2,
      },
  scrollContent: {
    flexGrow: 1, // Permite que o ScrollView cresça para preencher o espaço disponível
  },
  container: {
    paddingVertical: 20,
    flexGrow: 1,
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
    marginHorizontal: 24,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.linkTextGreen,
    textAlign: 'center',
  },
  profileText: {
    marginTop: 20,
    marginHorizontal: 24,
    fontSize: 17,
    fontWeight: '400',
    color: COLORS.placeholderText,
    textAlign: 'center',
  },
});
