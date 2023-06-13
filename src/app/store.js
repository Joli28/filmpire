import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';

export default configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
