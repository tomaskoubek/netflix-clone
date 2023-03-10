import "./Movies.css"
import allMovies from "../Data"
import DelBtn from "./DelBtn"
import { useState } from "react"
import DelAll from "./DelAll"
import ResetMovies from "./ResetMovies"



const Movies = () => {
    const [movieList, setMovieList] = useState(allMovies)

    const resetMovies = () =>{
        setMovieList(allMovies)
    }
    const deleteAllMovies = () => {
        setMovieList([])
    }


    const deleteOneMovie = (idecko) => {
        const filteredMovies = movieList.filter((oneMovie) => {
            return oneMovie.id !== idecko
        })

        setMovieList(filteredMovies)
    }


    return <section>
        <div className="btn-container">
            <DelAll deleteMovies={deleteAllMovies} />        
            <ResetMovies resetMovies={resetMovies}/>
        </div>

        <div className="all-movies">
            {
                movieList.map((oneMovie) => {
                    const { id, image, title, age, tags, description } = oneMovie

                    return <div className="one-movie" key={id}>
                        <img src={image} alt="" />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <DelBtn deleteMovie={() => deleteOneMovie(id)} />
                    </div>

                })
            }
        </div>

    </section>
}

export default Movies