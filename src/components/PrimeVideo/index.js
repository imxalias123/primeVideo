// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-img"
        />
      </div>
      <div className="movies-container">
        <div className="">
          <h1 className="movie-h1">Action Movies</h1>
          <MoviesSlider moviesList={actionMovieList} />
        </div>
        <div className="">
          <h1 className="movie-h1">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovieList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
