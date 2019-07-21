import React from 'react'
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    StyleSheet,
    View
} from 'react-native'

import { movies } from '../data'
import MoviePoster from '../MoviePoster'
import MoviePopup from '../MoviePopup'

import { connect } from 'react-redux'

class Movies extends React.Component {
    state = {
        popupIsOpen: false,
        chosenDay: 0,
        chosenTime: null
    }

    openMovie = (movie) => {
        this.setState({
            popupIsOpen: true,
            movie,
        })
    }

    closeMovie = () => {
        this.setState({
            popupIsOpen: false,
            chosenDay: 0,
            chosenTime: null
        })
    }

    chooseDay = (day) => {
        this.setState({
            chosenDay: day,
        })
    }

    chooseTime = (time) => {
        this.setState({
            chosenTime: time,
        })
    }

    bookTicket = () => {
        if (!this.state.chosenTime) {
            alert('Please select show time');
        } else {
            this.closeMovie();

            // Need to update to new navigation
            this.props.navigation.navigate(
                'Confirmation', {
                    code: Math.random().toString(36).substring(6).toUpperCase()
                }
            )
        }
    }


    render() {
        const { movies, loading, refresh } = this.props
        return (
            <View style={styles.container}>
                {movies ?

                    <ScrollView
                        // Style
                        contentContainerStyle={styles.scrollContent}
                        // Scroll indicators
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        // Refresh
                        refreshControl={
                            <RefreshControl
                                refreshing={loading}
                                onRefresh={refresh}
                            />
                        }
                    >
                        {/* actual function to show posters */}
                        {movies.map((movie, index) =>
                            <MoviePoster
                                movie={movie}
                                onOpen={this.openMovie}
                                key={index}
                            />
                        )}
                    </ScrollView>
                    :
                    // Loading indicator!!!!
                    <ActivityIndicator
                        animating={loading}
                        style={styles.loader}
                        size="large"
                    />
                }
                <MoviePopup
                    movie={this.state.movie}
                    isOpen={this.state.popupIsOpen}
                    onClose={this.closeMovie}
                    chosenDay={this.state.chosenDay}
                    chosenTime={this.state.chosenTime}
                    onChooseDay={this.chooseDay}
                    onChooseTime={this.chooseTime}
                    onBook={this.bookTicket}
                />
            </View >
        )
    }
}

const mapStateToProps =
    state => ({
        movies: state.movies,
        loading: state.loading
    })


const getMovieData = () => dispatch => ({
    refresh: () => dispatch({ type: 'GET_MOVIE_DATA' })
})

export default connect(mapStateToProps, { getMovieData })(Movies)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})