import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {
    Color,
    Border,
    FontSize,
    FontFamily,
    Padding,
} from '../../GlobalStyles';

function ContainerFrame() {
    return (
        <View style={[styles.frame, styles.frameParentFlexBox]}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
                <View style={[styles.frameGroup, styles.frameFlexBox1]}>
                    <View style={[styles.frame1, styles.frameLayout2]}>
                        <Text style={styles.totalOrders}>Total Orders</Text>
                        <View style={[styles.parent, styles.parentSpaceBlock]}>
                            <Text style={[styles.text, styles.textClr]}>
                                521
                            </Text>
                            <View style={[styles.frame2, styles.frameFlexBox]}>
                                <View style={styles.group}>
                                    <Image
                                        style={styles.icon}
                                        contentFit="cover"
                                        source={require('../assets/122.png')}
                                    />
                                    <Text
                                        style={[styles.text1, styles.textTypo]}
                                    >
                                        4.2%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require('../assets/group-48096203.png')}
                    />
                </View>
                <View style={[styles.frameGroup, styles.frameFlexBox1]}>
                    <View style={[styles.frame3, styles.frameLayout2]}>
                        <Text style={styles.totalOrders}>Total Canceled</Text>
                        <View
                            style={[styles.container, styles.parentSpaceBlock]}
                        >
                            <Text style={[styles.text, styles.textClr]}>
                                128
                            </Text>
                            <View style={[styles.frame4, styles.frameFlexBox]}>
                                <View
                                    style={[
                                        styles.frameView,
                                        styles.parent2SpaceBlock,
                                    ]}
                                >
                                    <Image
                                        style={styles.icon}
                                        contentFit="cover"
                                        source={require('../assets/1221.png')}
                                    />
                                    <Text
                                        style={[styles.text3, styles.textTypo]}
                                    >
                                        3.2%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require('../assets/group-48096207.png')}
                    />
                </View>
                <View style={[styles.frameParent1, styles.frameFlexBox1]}>
                    <View style={[styles.frame5, styles.frameLayout1]}>
                        <Text style={styles.totalOrders}>Total Profit</Text>
                        <View style={[styles.parent1, styles.parentLayout]}>
                            <Text style={[styles.text4, styles.textClr]}>
                                146
                            </Text>
                            <View style={[styles.frame6, styles.frameFlexBox]}>
                                <View
                                    style={[
                                        styles.parent2,
                                        styles.parent2SpaceBlock,
                                    ]}
                                >
                                    <Image
                                        style={styles.icon}
                                        contentFit="cover"
                                        source={require('../assets/1222.png')}
                                    />
                                    <Text
                                        style={[styles.text5, styles.textTypo]}
                                    >
                                        1.8%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require('../assets/group-48096204.png')}
                    />
                </View>
                <View style={[styles.frameParent1, styles.frameFlexBox1]}>
                    <View style={[styles.frame7, styles.frameLayout1]}>
                        <Text style={styles.totalOrders}>Total Pre-Orders</Text>
                        <View style={[styles.parent3, styles.parentLayout]}>
                            <Text style={[styles.text4, styles.textClr]}>
                                257
                            </Text>
                            <View style={[styles.frame2, styles.frameFlexBox]}>
                                <View style={styles.group}>
                                    <Image
                                        style={styles.icon}
                                        contentFit="cover"
                                        source={require('../assets/1223.png')}
                                    />
                                    <Text
                                        style={[styles.text7, styles.textTypo]}
                                    >
                                        6.2%
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Image
                        style={styles.frameChild}
                        contentFit="cover"
                        source={require('../assets/group-48096206.png')}
                    />
                </View>
            </View>
            <View style={[styles.frameParent3, styles.maskGroupLayout]}>
                <View style={[styles.maskGroupWrapper, styles.maskGroupLayout]}>
                    <View style={styles.maskGroupLayout}>
                        <Image
                            style={styles.maskGroupChild}
                            contentFit="cover"
                            source={require('../assets/group-48095786.png')}
                        />
                        <View
                            style={[
                                styles.estatsticasDoRestauranteParent,
                                styles.frameParentFlexBox,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.estatsticasDoRestaurante,
                                    styles.textClr,
                                ]}
                            >{`Estatísticas do restaurante `}</Text>
                            <View style={styles.ellipseParent}>
                                <Image
                                    style={styles.ellipseIcon}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-140.png')}
                                />
                                <Text style={styles.totalOrder}>
                                    Total Order
                                </Text>
                            </View>
                            <View style={styles.ellipseParent}>
                                <Image
                                    style={styles.ellipseIcon}
                                    contentFit="cover"
                                    source={require('../assets/ellipse-1401.png')}
                                />
                                <Text style={styles.totalOrder}>Pre-Order</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.frame9, styles.frameLayout]}>
                    <View style={[styles.frameChild2, styles.frameLayout]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frameParentFlexBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    frameFlexBox1: {
        backgroundColor: Color.colorWhite,
        borderRadius: Border.br_base,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    frameLayout2: {
        height: 82,
        overflow: 'hidden',
    },
    parentSpaceBlock: {
        marginTop: 24,
        height: 42,
        flexDirection: 'row',
    },
    textClr: {
        color: Color.colorGray_200,
        textAlign: 'left',
    },
    frameFlexBox: {
        marginLeft: 8,
        height: 37,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
    },
    textTypo: {
        marginLeft: 4,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        textAlign: 'left',
        lineHeight: 16,
    },
    parent2SpaceBlock: {
        paddingBottom: Padding.p_12xs,
        height: 17,
        flexDirection: 'row',
    },
    frameLayout1: {
        height: 88,
        overflow: 'hidden',
    },
    parentLayout: {
        height: 48,
        marginTop: 24,
        flexDirection: 'row',
    },
    maskGroupLayout: {
        height: 284,
        width: 571,
    },
    frameLayout: {
        width: 80,
        alignItems: 'center',
    },
    totalOrders: {
        color: Color.colorGray_400,
        textAlign: 'left',
        fontFamily: FontFamily.poppinsRegular,
        lineHeight: 16,
        fontSize: FontSize.size_sm,
    },
    text: {
        width: 49,
        fontSize: FontSize.size_13xl,
        color: Color.colorGray_200,
        fontFamily: FontFamily.poppinsRegular,
        height: 42,
    },
    icon: {
        width: 16,
        height: 16,
        overflow: 'hidden',
    },
    text1: {
        color: Color.neutral1,
    },
    group: {
        height: 17,
        width: 48,
        alignItems: 'center',
        flexDirection: 'row',
    },
    frame2: {
        width: 48,
        marginLeft: 8,
        height: 37,
    },
    parent: {
        width: 105,
    },
    frame1: {
        width: 105,
    },
    frameChild: {
        width: 56,
        height: 56,
    },
    frameGroup: {
        width: 263,
        padding: Padding.p_5xl,
    },
    text3: {
        color: Color.primary,
    },
    frameView: {
        width: 47,
    },
    frame4: {
        width: 47,
    },
    container: {
        width: 104,
    },
    frame3: {
        width: 107,
        alignItems: 'center',
    },
    text4: {
        fontSize: FontSize.size_13xl,
        color: Color.colorGray_200,
        fontFamily: FontFamily.poppinsRegular,
    },
    text5: {
        color: Color.accent,
    },
    parent2: {
        width: 45,
    },
    frame6: {
        width: 45,
    },
    parent1: {
        width: 104,
    },
    frame5: {
        width: 104,
    },
    frameParent1: {
        width: 264,
        paddingHorizontal: Padding.p_5xl,
        paddingTop: Padding.p_5xl,
        paddingBottom: Padding.p_lg,
    },
    text7: {
        color: Color.semantic5,
    },
    parent3: {
        width: 112,
    },
    frame7: {
        width: 115,
        alignItems: 'center',
    },
    frameParent: {
        width: 555,
        height: 318,
        paddingHorizontal: 0,
        paddingVertical: Padding.p_base,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    maskGroupChild: {
        top: 85,
        left: 0,
        height: 199,
        position: 'absolute',
        width: 571,
    },
    estatsticasDoRestaurante: {
        fontSize: FontSize.title1_size,
        textTransform: 'capitalize',
        fontWeight: '600',
        fontFamily: FontFamily.poppinsSemiBold,
    },
    ellipseIcon: {
        width: 8,
        height: 8,
    },
    totalOrder: {
        lineHeight: 24,
        color: Color.colorGray_100,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        marginLeft: 8,
        textAlign: 'left',
        fontSize: FontSize.size_sm,
    },
    ellipseParent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    estatsticasDoRestauranteParent: {
        top: 24,
        left: 24,
        width: 488,
        position: 'absolute',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    maskGroupWrapper: {
        justifyContent: 'flex-end',
        height: 284,
        backgroundColor: Color.colorWhite,
        borderRadius: Border.br_base,
        alignItems: 'center',
        flexDirection: 'row',
    },
    frameChild2: {
        height: 105,
    },
    frame9: {
        height: 190,
        overflow: 'hidden',
    },
    frameParent3: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    frame: {
        width: 1154,
        height: 316,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
});

export default ContainerFrame;
