import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import COLORS from '@/constants/colors';

export default function DeleteAccount() {
    const sheet = React.useRef();

    React.useEffect(() => {
        sheet.current.open();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.placeholder}>
                <View style={styles.placeholderInsert}>
                    {/* Conteúdo da página de fundo referente à ação da Bottom Sheet */}
                </View>
            </View>

            <RBSheet
                ref={sheet}
                customStyles={{ container: styles.sheet }}
                height={350}
                openDuration={250}
            >
                <View style={styles.sheetHeader}>
                    <Text style={styles.sheetHeaderTitle}>Excluir Conta</Text>
                </View>

                <View style={styles.sheetBody}>
                    <Text style={styles.sheetBodyText}>
                        Tem certeza que deseja{' '}
                        <Text
                            style={{ fontWeight: '700', color: COLORS.iconRed }}
                        >
                            excluir a sua conta
                        </Text>
                        ?{'\n'}Esta ação não pode ser desfeita!
                    </Text>

                    <TouchableOpacity
                        onPress={() => {
                            // Handle onPress Delete Conta
                        }}
                    >
                        <View
                            style={[
                                styles.btn,
                                { backgroundColor: COLORS.iconRed },
                            ]}
                        >
                            <Text style={styles.btnText}>Excluir Conta</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => sheet.current.close()}>
                        <View
                            style={[
                                styles.btn,
                                { backgroundColor: COLORS.iconBlue },
                            ]}
                        >
                            <Text style={styles.btnText}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </RBSheet>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sheet: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    sheetHeader: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderColor: '#e3e3e3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sheetHeaderTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: COLORS.iconRed,
    },
    sheetBody: {
        padding: 24,
    },
    sheetBodyText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
        color: COLORS.black,
        marginBottom: 24,
        textAlign: 'center',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        // backgroundColor: COLORS.iconRed,
        // borderColor: COLORS.iconRed,
        // borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    btnText: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '700',
        color: COLORS.white,
    },
    // Area de visão para a página de fundo a esta ação
    placeholder: {
        flex: 1,
        padding: 24,
    },
    placeholderInsert: {
        flex: 1,
        borderWidth: 4,
        borderColor: COLORS.placeholderText,
        borderStyle: 'dashed',
        borderRadius: 12,
    },
});
