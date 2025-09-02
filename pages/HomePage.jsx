import SearchBar from "../components/SearchBar"
import MovieCard from "../components/MovieCard"


function HomePage({ movie, setMovie, fetchMovieData, isLoading, errorMessage, result }){
return (
    <>
     <SearchBar movie={movie} setMovie={setMovie}/>
      <button onClick={fetchMovieData}>search</button>


       
        {isLoading ? (
          <h3>Loading...</h3>
        ) : ( errorMessage.length > 0 ? (<h3 className='error-message'>{errorMessage}</h3>) : 
        result.map(m => (
          <div key={m.id}>
            <h3>{m.title}</h3>
            <MovieCard image={m.poster_path}/>
            </div>
 ))
    )}
  </>
)




}
export default HomePage
