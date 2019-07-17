import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import PropTypes from 'prop-types'

export default class Confirmation extends React.Component {
    render() {
        const code = this.props.navigation.getParam('code', 'code')
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Your confirmation code</Text>
                <Text style={styles.code}>{code}</Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('Home')} >
                    <Text style={styles.button}>Done</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
Confirmation.propTypes = {
    code: PropTypes.string.isRequired,
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontFamily: 'Avenir'.text,
        color: '#333',
        fontSize: 20,
    },
    code: {
        fontFamily: 'Avenir'.text,
        color: '#333',
        fontSize: 36,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#673AB7',
        borderRadius: 100,
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    button: {
        fontFamily: 'Avenir'.text,
        color: '#FFFFFF',
        fontSize: 18,
    },
})