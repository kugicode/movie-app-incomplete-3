import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import axios from 'axios';
import MovieCard from './components/MovieCard';
import MovieDetails from './pages/MovieDetails';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
const [movie, setMovie] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [result, setResult] = useState([]);
const [errorMessage, setErrorMessage] = useState('');


async function fetchMovieData(){

try{
  setIsLoading(true);
const API_URL = `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${import.meta.env.VITE_API_KEY}`;
const { data } = await axios.get(API_URL);



if (data.results.length === 0) {
  setErrorMessage('No movies found!');
  setResult([]); // Clear results if nothing found
} else {
  setErrorMessage('');
  setResult(data.results); // Set results if found
  console.log(data);
}


  setIsLoading(false)


}

catch(error){
setIsLoading(false);
setErrorMessage('An error has occured!');
console.error('Something went wrong! ', error);
}
  
}

  return (

    
    <>

    <Router>
      <Routes>
      <Route path="/" element={ <HomePage
          movie={movie}
          setMovie={setMovie}
          fetchMovieData={fetchMovieData}
          isLoading={isLoading}
          errorMessage={errorMessage}
          result={result}
        />
      }
    />
      <Route path="/MovieDetails" element={<MovieDetails />}/>
      </Routes>
      <div>

      </div>
    </Router>


    </>
  )
}

export default App