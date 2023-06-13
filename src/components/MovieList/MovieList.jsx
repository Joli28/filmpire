import React from 'react';
import { Grid } from '@mui/material';
import Movie from '../Movie/Movie';

import useStyles from './styles';

const MovieList = ({ movies }) => {
    const classes = useStyles();
    console.log("Movie List");
    return (
        <Grid contaniner className={classes.moviesContainer}>
            {movies.results.map((movie, i) => (
                <Movie key={i} movie={movie} i={i} />
            ))}
        </Grid>
    );
};

export default MovieList;
