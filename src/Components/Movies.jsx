import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard'; 
import axios from 'axios';
import Pagination from "./Pagination"
const Movies = ({handleWatchList,removeWatchList,watchList}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo,setpageNo]=useState(9)
  

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=Batman&page=${pageNo}&apikey=171b626c`).then((res) => {
      setMovies(res.data.Search); 
      console.log(res.data);
    }).catch((error) => {
      console.error('Error fetching data:', error);
    });
  },[pageNo]);


  const decrementPage = () => {
    if(pageNo==1)
    {
       setpageNo(1)
    }
    else{
      setpageNo(prevPageNo => prevPageNo - 1);
    }
   
  };
  
  const incrementPage=()=>{
     setpageNo(prevPageNo => prevPageNo + 1);
  }


  return (
    <div>
      <div style={{
        fontSize: "1.39rem",
        textAlign: "center",
        fontWeight: "bold"
      }}>
        Batman Universe
      </div>
      <div style={{
        margin:"5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        flex:"1"
      }}>
        {movies.map((movie, index) => (
          <MovieCard key={index} movieObj={movie}  name={movie.Title} moviePath={movie.Poster} handleWatchList={handleWatchList} removeWatchList={removeWatchList} watchList={watchList}/>
        ))}
      </div>
      <Pagination page={pageNo} decrement={decrementPage} increment={incrementPage} />    </div>
  );
};

export default Movies;
