import React from 'react'

function Pagination({page,decrement,increment}) {
    return (

        <div style={{
            marginTop: "30px",
            padding: "10px",
            backgroundColor: "rgb(220,220,220)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div 
            style={{
                padding:"10px",
                backgroundColor:"white",
                borderRadius:"50%"
            }}
            onClick={decrement}><i className="fa-solid fa-arrow-left"></i></div>

            <div 
            style={{
                padding:"10px"
            }}>{page}</div>
            <div style={{
                 padding:"10px",
                 backgroundColor:"white",
                 borderRadius:"50%"
            }}   onClick={increment}>
                <i className="fa-solid fa-arrow-right"></i>
            </div>

        </div>
    )
}

export default Pagination