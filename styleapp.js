import { StyleSheet, Text, View, Image } from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        flexDirection: 'column',
    },
    one: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    a1: {
        marginTop: 32,
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    a11: {
        flex: 1,
        backgroundColor: 'white',
    },
    a12: {
        flex: 4,
        backgroundColor: 'white',
    },
    a2: {
        flex: 2,
        backgroundColor: 'yellow',
        flexDirection: 'row',
    },
    a21: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },


    a22: {
        flex: 3,
        backgroundColor: 'white'
    },
    two: {
        flex: 2,
        backgroundColor: '#3670E5',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexDirection: 'column',
    },
    t1: {
        width: 360,
        height: 160,
        backgroundColor: '#3670E5',
        //        alignItems: 'center',
        //  justifyContent: 'center',
    },
    t11: {
        width: 190,
        height: 130,
        backgroundColor: '#4F84F0',
        marginTop: 13,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20
    },
    t12: {
        width: 50,
        height: 40,
        backgroundColor: '#4F84F0',
        borderTopStartRadius: 20,
    },
    t13: {
        flex: 1,
        backgroundColor: '#3670E5',
        flexDirection: 'row',
    },
    t131: {
        flex: 1,
        backgroundColor: '#4F84F0',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20
    },

    t14: {
        flex: 1,
        backgroundColor: '#3670E5',
        marginLeft: 20,
        marginTop: 7,
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 5,
        flexDirection: 'row',
    },
    t141: {
        flex: 1,
        backgroundColor: '#4F84F0',
        borderBottomStartRadius: 10,
        borderTopStartRadius: 10
    },
    t142: {
        flex: 4,
        backgroundColor: '#4F84F0',
    },
    t143: {
        flex: 1,
        backgroundColor: '#4F84F0',
        borderBottomEndRadius: 10,
        borderTopEndRadius: 10
    },
    t15: {
        flex: 1,
        backgroundColor: 'blue',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        borderRadius: 10,
        flexDirection: 'row'
    },
});








export default styles;