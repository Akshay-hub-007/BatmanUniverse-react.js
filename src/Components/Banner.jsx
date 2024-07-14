import React from 'react';

function Banner() {
  return (
    <div className=" h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end" style={{ 
       width:"100%",
      backgroundImage: 'url("https://images.thedirect.com/media/article_full/avengers-status.jpg")',
      backgroundSize: 'contain', 
      backgroundPosition: 'center', 
      backgroundRepeat:"no-repeat"
    }}>
      <div style={{
        width:"100%",
        background: "rgba(255, 255, 255, 0.2)",
        color:"white",
       display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"10px"
        }}>The Avengers</div>
    </div>
  );
}

export default Banner;
