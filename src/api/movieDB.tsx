import axios from "axios";



const movieDB = axios.create({

    baseURL: "https://api.themoviedb.org/3/movie",
    params:{
        api_key:'7278c9cb6bea133a2ebc1810925b58c1',
        language:'es-ES',
        
    }

})

export default movieDB;