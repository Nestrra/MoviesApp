import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';




interface MovieDeatails {

    cast: Cast[];
    loading: boolean;
    movieFull?: MovieFull;

}



export const useMovieDetails = (movieId: number) => {

    const [state, setstate] = useState<MovieDeatails>({
        cast: [],
        movieFull: undefined,
        loading: true,

    });

    const getMovieDetails = async () => {

        const movieDetailPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)

        const [movieDetailResp, castPromiseResp] = await Promise.all([movieDetailPromise, castPromise])

        setstate({
            loading: false,
            movieFull: movieDetailResp.data,
            cast: castPromiseResp.data.cast,
        })
    }


    useEffect(() => {

        getMovieDetails()

    }, [])

    return {...state};


}
