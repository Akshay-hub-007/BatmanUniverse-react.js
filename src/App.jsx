import "./App.css";
import Navbar from './Components/Navbar.jsx';
import Movies from "./Components/Movies.jsx";
import Watchlist from "./Components/Watchlist.jsx";
import Banner from "./Components/Banner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState,useEffect} from "react"
function App() {
 
  const [watchList,setwatchList]=useState([])
      
  const handleWatchList=(movieObj)=>{
    let newwatchList=[...watchList,movieObj]

    setwatchList(newwatchList)
    localStorage.setItem("moviesApp", JSON.stringify(newwatchList));
  }
  const removeWatchList = (movieObj) => {
    const filteredWatchlist = watchList.filter((movie) => movieObj.Title !== movie.Title);
    setwatchList(filteredWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
  };
  
  useEffect(()=>{
    const localStorageMovies=localStorage.getItem("moviesApp")
    if(!localStorageMovies)
    {
      return 
    }
    setwatchList(JSON.parse(localStorageMovies))
  },[])
  return (
    
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Banner />
              <Movies handleWatchList={handleWatchList} removeWatchList={removeWatchList} watchList={watchList}/>
            </div>
            </>} />
            <Route path="/watchlist" element={<Watchlist watchList={watchList} setWatchList={setwatchList} removeWatchList={removeWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
