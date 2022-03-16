
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Fonts } from '../contants';

export default class Benefi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Date Time', 'Name', 'Country', 'Currency'],
            tableData: [
                [
                
        '2021/11/28 10:56:38',
    'Aziz Nepal',
    'Canada',
        'CAD'],
                [
                    '2021/11/28 10:56:38',
    'Aziz Nepal',
    'Canada',

        'CAD'],
                [
                    '2021/11/28 10:56:38',
    'Aziz Nepal',
    'Canada',

        'CAD'],
                [
                    '2021/11/28 10:56:38',
    'Aziz Nepal',
    'Canada',

        'CAD'],
            ]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 0.5, borderColor: 'black'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.texta} />
                    <Rows data={state.tableData} textStyle={styles.textb} imageStyle={styles.image} />
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff',padding: 6,width:wp('100%') },
    head: { height: 40, backgroundColor: '#fff' },
    texta: { textAlign:'center',color:'#77767E',fontSize:14,fontFamily:Fonts.POPPINS_MEDIUM},
    textb: { textAlign:'center',color:'#232326',fontSize:15,fontFamily:Fonts.POPPINS_REGULAR},
    image:{ height:hp('3%'),
    width:wp('8%')}
});




















