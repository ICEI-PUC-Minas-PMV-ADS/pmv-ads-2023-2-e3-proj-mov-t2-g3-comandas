import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BarraLateral from '../components/BarraLateral';
import ContainerForm from '../components/ContainerForm';
import CategoriasReservas from '../components/CategoriasReservas';
import MenuReservaConteiner from '../components/MenuReservaConteiner';
import RequestsContainer1 from '../components/RequestsContainer1';
import { Padding, Color } from '../../GlobalStyles';

function Reservas() {
    return (
        <View style={[styles.reservas, styles.reservasFlexBox]}>
            <BarraLateral
                dimensions={require('../assets/comandas-degrade-1.png')}
                frameViewWidth={206}
                frameViewHeight="unset"
                frameViewOverflow="hidden"
            />
            <View style={[styles.frameParent, styles.reservasFlexBox]}>
                <ContainerForm
                    imageDimensions={require('../assets/7.png')}
                    imageDimensionsText={require('../assets/notif.png')}
                    imageCode={require('../assets/image.png')}
                    imageCodeText={require('../assets/47.png')}
                />
                <View style={styles.categoriesWrapper}>
                    <CategoriasReservas />
                </View>
                <MenuReservaConteiner />
            </View>
            <RequestsContainer1 />
        </View>
    );
}

const styles = StyleSheet.create({
    reservasFlexBox: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    categoriesWrapper: {
        height: 72,
        justifyContent: 'space-between',
    },
    frameParent: {
        height: 772,
        paddingHorizontal: 0,
        paddingVertical: Padding.p_5xl,
        justifyContent: 'space-between',
    },
    reservas: {
        backgroundColor: Color.colorWhitesmoke_200,
        flex: 1,
        width: '100%',
        height: 900,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Reservas;
