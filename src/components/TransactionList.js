import React, { Component } from 'react';
import { StyleSheet, View,ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Fonts } from '../contants';

export default class TransactionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Date Time', 'ID', 'Amount', 'Currency'],
            tableData: [
                [
                    '2021/11/28 10:56:38',
                    '6789765',
                    '$4.5',
                    'CAD'],
                [
                    '2021/11/28 10:56:38',
                    '6789765',
                    '$4.5',
                    'CAD'],
                [
                    '2021/11/28 10:56:38',
                    '6789765',
                    '$4.5',
                    'CAD'],
                [
                    '2021/11/28 10:56:38',
                    '6789765',
                    '$4.5',
                    'CAD'],
            ],
            widthArr: [150, 100, 80, 80,],
            heightArr:[40,40,40,40]
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator = {true}>
                <Table borderStyle={{ borderWidth: 0.2, borderColor: 'black'}}>
                    <Row widthArr={state.widthArr} data={state.tableHead} style={styles.head} textStyle={styles.texta} />
                    <Rows widthArr={state.widthArr} heightArr={state.heightArr} data={state.tableData} textStyle={styles.textb} />
                </Table>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff',padding: 6,width:wp('100%') },
    head: { height: 40, backgroundColor: '#fff' },
    texta: { textAlign:'center',color:'#77767E',fontSize:14,fontFamily:Fonts.POPPINS_MEDIUM},
    textb: { textAlign:'center',color:'#232326',fontSize:15,fontFamily:Fonts.POPPINS_REGULAR}

});