import React from 'react'
import PropTypes from 'prop-types'
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'


// Colors for smooth transition when user chosess an option
const colorDefault = 'rgba(255, 255, 255, 1)',  // white
    colorSelected = 'rgba(103,58,183, 1)';        // purple

export default class Options extends React.Component {
    state = {
        background: new Animated.Value(0)
    }

    // Animate option selection if value was already chosen not by a user
    componentDidMount() {
        if (this.props.isChosen) {
            this.animateSelect();
        }
    }

    getDerivedStateFromProps(nextProps) {
        if (!this.props.isChosen && nextProps.isChosen) {
            this.animateSelect();
        } else if (this.props.isChosen && !nextProps.isChosen) {
            this.animateDeselect();
        }
    }

    animateSelect() {
        Animated.timing(this.state.background, {
            toValue: 100,
            duration: 200,
        }).start();
    }

    animateDeselect() {
        Animated.timing(this.state.background, {
            toValue: 0,
            duration: 200,
        }).start();
    }

    render() {
        const { value, isChosen, onChoose } = this.props;
        const backgroundColorAnimation = this.state.background.interpolate({
            inputRange: [0, 100],
            outputRange: [colorDefault, colorSelected],
        });
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={onChoose}
            >
                <Animated.View
                    style={[styles.container, { backgroundColor: backgroundColorAnimation }]}
                >
                    <Text style={{ color: isChosen ? colorDefault : colorSelected }}>
                        {value}
                    </Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }
}

Options.propTypes = {
    value: PropTypes.string.isRequired,
    isChosen: PropTypes.bool.isRequired,
    onChoose: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: colorSelected,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    text: {
        fontFamily: 'Avenir',
    }
});