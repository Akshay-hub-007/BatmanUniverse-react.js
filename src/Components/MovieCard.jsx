import React from 'react';
import '../index.css'; 

const MovieCard = ({ movieObj, name, moviePath, handleWatchList, removeWatchList, watchList }) => {
  function doesContain() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].imdbID === movieObj.imdbID)
        return true
    }
    return false
  }
  return (
    <div className="movie-card"
      style={{
        width: "11vw",
        height: "40vh",
        marginTop: "15px",
        backgroundImage: `url(${moviePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "relative"
      }}
    >
   {doesContain() ? (
        <div onClick={() => removeWatchList(movieObj)} style={{ position: "absolute", right: "5px", top: "10px", background: "rgba(255, 255, 255, 0.2)", borderRadius: "10px", display: "grid", placeItems: "center" }}>&#10060;</div>
      ) : (
        <div onClick={() => handleWatchList(movieObj)} style={{ position: "absolute", right: "5px", top: "10px", background: "rgba(255, 255, 255, 0.2)", borderRadius: "10px", display: "grid", placeItems: "center" }}>&#128525;</div>
      )} <div style={{
        width: "11vw",
        padding: "10px",
        background: "rgba(255, 255, 255, 0.2)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: "10px",
        textAlign: "center"
        // padding:"20px"
      }}> {name}</div>
    </div>
  );
};

export default MovieCard;
