import './App.css';
import Filmes from './data/filmes';
import {
  listMovies,
  listFilteredMovies,
  reduceMovies
} from './script';

function App() {
  return (
    <div className="App">
      {        
        listFilteredMovies(Filmes)        
      }
      {
        listMovies(Filmes)
      }
      {
        reduceMovies(Filmes)
      }
    </div>
  );
}

export default App;
