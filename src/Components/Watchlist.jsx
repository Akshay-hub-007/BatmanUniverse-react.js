import React, { useEffect, useState } from 'react';

const Watchlist = ({ watchList, setWatchList,removeWatchList }) => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState(["All genre"])
  const [currGenre,setcurrGenre]=useState("All genre")
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const decreasingOrder = () => {
    const newWatchlist = [...watchList].sort((movieA, movieB) => {
      return movieB.Year > movieA.Year ? 1 : -1;
    });
    setWatchList(newWatchlist);
  };

  const increasingOrder = () => {
    const newWatchlist = [...watchList].sort((movieA, movieB) => {
      return movieA.Year > movieB.Year ? 1 : -1;
    });
    setWatchList(newWatchlist);
  };

   const filterGenre=(type)=>{
    setcurrGenre(type)
   }
  useEffect(() => {
    const genres = [...new Set(watchList.map(movie => movie.Type))];
    setGenre(['All genre', ...genres]);
  }, [watchList]);

  return (
    <>
     <div style={{ display: "flex", justifyContent: "center", gap: "5rem", marginTop: "1rem" }}>
  {genre.map((type, index) => (
    type && <div
      key={index}
      onClick={() => filterGenre(type)}
      style={{
        padding: "1rem 2rem",
        borderRadius: "2rem",
        backgroundColor: currGenre === type ? "#4299e1" : "gray",
        cursor: "pointer"
      }}
    >
      {type}
    </div>
  ))}
</div>

      <div style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search movies"
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
            margin: "10px",
            overflowX: 'hidden'
          }}
        />
      </div>
      <div>
        <table style={{
          width: "98%",
          borderRadius: "10px",
          margin: "10px",
          borderCollapse: "collapse"
        }}>
          <thead style={{ borderBottom: "2px solid gray" }}>
            <tr>
              <th style={{ padding: "10px", textAlign: "center" }}>Poster</th>
              <th style={{ padding: "10px", textAlign: "center" }}>Name</th>
              <th style={{ padding: "10px",textAlign: "center", display: "flex", alignItems: "center"}}>
                <div onClick={increasingOrder} style={{ cursor: "pointer", }}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>  
                <div style={{ padding: "10px", textAlign: "center", }}>Year</div>
                <div onClick={decreasingOrder} style={{ cursor: "pointer" }}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th style={{ padding: "10px", textAlign: "center" }}>Gener</th>
              <th style={{ padding: "10px", textAlign: "center", color: "red" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movie)=>{
              if(currGenre=="All genre")
            {
              return true
            }
            else
            {
              return movie.Type==currGenre 
            }
             })

            .filter((movie) => {
              return movie.Title && movie.Title.toLowerCase().includes(search.toLowerCase());
            }).map((movie) => (
              <tr key={movie.Title} style={{ borderBottom: "1px solid gray" }}>
                <td style={{ padding: "10px", textAlign: "center", verticalAlign: "middle" }}>
                  <img src={movie.Poster} alt="poster" style={{ width: "4rem", height: "6em" }} />
                </td>
                <td style={{ padding: "10px", textAlign: "center", verticalAlign: "middle" }}>{movie.Title}</td>
                <td style={{ padding: "10px", textAlign: "center", verticalAlign: "middle" }}>{movie.Year}</td>
                <td style={{ padding: "10px", textAlign: "center", verticalAlign: "middle" }}>{movie.Type}</td>
                <td  onClick={()=>{removeWatchList(movie)}} style={{ padding: "10px", textAlign: "center", verticalAlign: "middle", color: "red", cursor:"pointer" }}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
