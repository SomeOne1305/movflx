import React from 'react'
import "./movies.css"
import axios from "axios"
import { changeLanguage } from '../../context'
export default function Movies() {
    const [value, ] = React.useContext(changeLanguage)
    const [movie, setMovie] = React.useState([])
    React.useEffect(()=>{
        async function getMovie(){
            let data = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=35fa8784c15d0825d778234c487a5807&language=${localStorage.getItem('Language')}&page=1`)
            setMovie(data.data.results)
        }
        getMovie()
    },[value])
   


    function loadAnim(e){
        return(
            <div className="loadCard" key={e}>
                <div className="image">
                    <div className="lds-dual-ring"></div>
                </div>
                <div className="loadInfo">
                    <div className="loadText"></div>
                </div>
            </div>
        )
    }
    function loadImage(){
        <div className="image">
            <div className="lds-dual-ring"></div>
        </div>
    }
    return (
        <div className="movies" id='upcoming'>
            <div className="container">
            <div className="title">
                <span>ONLINE STREAMING</span>
                <h2>Upcoming Movies</h2>
            </div>
            <div className="moviesBlock">
                {
                    movie.map((item)=>{
                       return <a href='' style={{textDecoration:"none"}} key={item.id}>
                        <div className="movie">
                            <img onLoad={loadImage()} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                            <div className="info">
                                <div className="part">
                                    <h4 className="movieName">{item.title}</h4>
                                    <span className="movieYear">{item.release_date.split('-')[0]}</span>
                                </div>
                                <div className="part">
                                    <span className="hd">hd</span>
                                    <div className="ratingTime">
                                        <div className="time">
                                            <i className="fa-regular fa-clock"></i>
                                            <span>90 min</span>
                                        </div>
                                        <div className="rating">
                                            <i className="fa-solid fa-thumbs-up"></i>
                                            <span>{item.vote_average}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    })
                }
            </div>
            </div>
        </div>
    )
}
