//React libraries
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

//Components
import MovieCard from "./Card/MovieCard";

//Data
import {movies$} from "../../data/movies";

//Redux
import {selectMovies, setMovies} from "../../redux/movies/movieSlice";

//Typescript type
import {AppDispatch} from "../../store";

const MoviesSection = () => {
    //Use dispatch
    const dispatch = useDispatch<AppDispatch>();

    //Use selector
    const {movies} = useSelector(selectMovies);

    useEffect(() => {
        movies$.then((resolvedMovies) => dispatch(setMovies(resolvedMovies)));
    }, [dispatch]);

    return(
        <div>
            <div>
                <span>FILTERS</span>
            </div>

            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
                    {movies.map((movie) => <MovieCard movie={movie}/>)}
                </div>
            </div>
        </div>
    );
}

export default MoviesSection;