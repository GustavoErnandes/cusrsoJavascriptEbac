export const listMovies = (movies) =>{
  return movies.forEach(element => (
    console.log (element.label)
  ))
}

const filteredMovies = (movies) => {
  return movies.filter(movie => (
    movie.year >= 2000
  ))
}

export const listFilteredMovies = (movies) => {
  return filteredMovies(movies).map(resp => (
    <h4 key={resp.label}>
      {resp.label}
    </h4>
  ))
}

export const reduceMovies = (movies) => {
  movies.reduce((prev, next)=>{
    if(prev === undefined){
      console.log(next.year)
    }else if(next === undefined){
      console.log(prev.year)
    }else{
      console.log(prev.year + next.year)
    }
  })
}