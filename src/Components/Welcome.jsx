import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    const localStorageuserExist=localStorage.getItem("user")
    if(localStorageuserExist)
    {
     navigate("/home")
    }
  },[])
  return (
    <div className="h-screen  text-white">
      <div className="h-3/5 flex items-center justify-center bg-cover bg-center relative" style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/your-hero-image.jpg')`,
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MovieZone</h1>
          <p className="text-xl italic mb-8">"Your Next Favorite Movie Awaits!"</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="px-6 py-2 bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-6 py-2 bg-gray-500 rounded-md hover:bg-gray-700"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-60 p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold mb-2">Personalized Suggestions</h3>
            <p>Find movies tailored to your taste with our smart algorithms.</p>
          </div>
          <div className="w-60 p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold mb-2">Create Your Watchlist</h3>
            <p>Save movies to watch later and never miss your favorites.</p>
          </div>
          <div className="w-60 p-4 bg-gray-700 rounded-md">
            <h3 className="text-xl font-bold mb-2">User Reviews</h3>
            <p>Read reviews from other movie enthusiasts like you.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-4 text-center bg-gray-900">
        <p className="text-sm">© 2024 MovieZone. All rights reserved.</p>
        <p className="text-sm">
          Follow us on{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Instagram
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Welcome;
