import { useEffect, useState } from "react";

import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)
    const [cartelera, setCartelera] = useState<Movie[]>([])


const getMovies = async () => {


        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
        setCartelera(resp.data.results);
        setisLoading(false)

    }


    useEffect(() => {
        getMovies();

    }, [])


    return {
        cartelera,
        isLoading
    }




}