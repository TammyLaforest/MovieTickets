import React from 'react'
import PropTypes from 'prop-types'
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

// Get screen dimensions
const { width, height } = Dimensions.get('window')

// Num posters in each row and column
const cols = 3, rows = 3

export default class MoviePoster extends React.Component {

    render() {
        const { movie, movie: { title, genre, poster }, onOpen } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: poster }} style={styles.image} />
                </View>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.genre} numberOfLines={1}>{genre}</Text>
            </TouchableOpacity>
        )
    }
}

MoviePoster.propTypes = {
    movie: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginBottom: 10,
        height: (height - 20 - 20) / rows - 10,
        width: (width - 10) / cols - 10,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        borderRadius: 10,
        ...StyleSheet.absoluteFillObject, // fill up all space in a container
    },
    title: {
        fontFamily: 'Avenir'.text,
        fontSize: 14,
        marginTop: 4,
    },
    genre: {
        fontFamily: 'Avenir'.text,
        color: '#BBBBBB',
        fontSize: 12,
        lineHeight: 14,
    },
});
