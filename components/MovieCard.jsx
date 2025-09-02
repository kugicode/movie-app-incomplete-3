
function MovieCard({ image }){
    return(
       <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie poster"/>

    )}

export default MovieCard;