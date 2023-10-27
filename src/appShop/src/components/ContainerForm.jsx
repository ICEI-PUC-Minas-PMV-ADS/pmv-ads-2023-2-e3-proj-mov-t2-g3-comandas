import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
    FontSize,
    FontFamily,
    Color,
    Border,
    Padding,
} from '../../GlobalStyles';

function ContainerForm({
    imageDimensions,
    imageDimensionsText,
    imageCode,
    imageCodeText,
}) {
    return (
        <View
            style={[
                styles.searchAnythingMenuParent,
                styles.searchParentFlexBox,
            ]}
        >
            <View style={styles.searchAnythingMenu}>
                <View
                    style={[
                        styles.searchAnythingMenu1,
                        styles.searchParentFlexBox,
                    ]}
                >
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={imageDimensions}
                    />
                    <Text
                        style={[
                            styles.searchAnythingMenu2,
                            styles.searchAnythingMenu2Typo,
                        ]}
                    >
                        Search anything menu
                    </Text>
                </View>
            </View>
            <Image
                style={styles.notifIcon}
                contentFit="cover"
                source={imageDimensionsText}
            />
            <View style={styles.profileWrapper}>
                <View style={[styles.profile, styles.searchParentFlexBox]}>
                    <Image
                        style={styles.imageIcon}
                        contentFit="cover"
                        source={imageCode}
                    />
                    <View
                        style={[
                            styles.wardahSeptianiPutriParent,
                            styles.searchParentFlexBox,
                        ]}
                    >
                        <Text
                            style={[
                                styles.wardahSeptianiPutri,
                                styles.searchAnythingMenu2Typo,
                            ]}
                        >
                            UserRest
                        </Text>
                        <Image
                            style={styles.icon1}
                            contentFit="cover"
                            source={imageCodeText}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchParentFlexBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchAnythingMenu2Typo: {
        textAlign: 'left',
        fontSize: FontSize.size_sm,
    },
    icon: {
        width: 24,
        overflow: 'hidden',
        height: 24,
    },
    searchAnythingMenu2: {
        fontFamily: FontFamily.interRegular,
        color: Color.colorDarkgray_200,
        width: 148,
        marginLeft: 16,
        height: 16,
    },
    searchAnythingMenu1: {
        width: 188,
        height: 24,
        alignItems: 'center',
    },
    searchAnythingMenu: {
        borderRadius: Border.br_3xs,
        width: 520,
        justifyContent: 'center',
        paddingHorizontal: Padding.p_base,
        paddingVertical: 0,
        height: 50,
        backgroundColor: Color.colorWhite,
    },
    notifIcon: {
        width: 50,
        height: 50,
    },
    imageIcon: {
        width: 32,
        height: 32,
    },
    wardahSeptianiPutri: {
        fontWeight: '500',
        fontFamily: FontFamily.poppinsMedium,
        color: Color.colorGray_200,
    },
    icon1: {
        width: 16,
        marginLeft: 49,
        height: 16,
        overflow: 'hidden',
    },
    wardahSeptianiPutriParent: {
        width: 127,
        height: 21,
        marginLeft: 16,
        alignItems: 'center',
    },
    profile: {
        width: 175,
        height: 32,
        alignItems: 'center',
    },
    profileWrapper: {
        borderRadius: Border.br_base,
        shadowColor: 'rgba(204, 204, 204, 0.25)',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 94,
        elevation: 94,
        shadowOpacity: 1,
        width: 207,
        height: 48,
        paddingHorizontal: 0,
        paddingVertical: Padding.p_5xs,
        backgroundColor: Color.colorWhite,
        alignItems: 'center',
    },
    searchAnythingMenuParent: {
        width: 824,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default ContainerForm;
