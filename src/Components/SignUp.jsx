import axios from 'axios'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import image from "../assets/Image1.svg"

function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
   const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://moviebackend-7pgm.onrender.com/api/signup", { name, email, password });
      console.log("Account created successfully:", res.data.success);

      if (res.data.success) {
        navigate("/home");
      } else {
        console.error("Signup was unsuccessful:", res.data.message || "Unknown error.");
      }
    } catch (error) {
      console.error("Error creating account:", error.response?.data || error.message);
    }
   
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <>
      <div className="w-auto flex flex-row items-center justify-center h-screen gap-5 ">
        <div>
          <img src={image} alt="" className='w-[30rem]'/>
        </div>
        <div className='w-[25rem] h-[24rem] p-4 border-2 shadow-md'>
          <h1 className="text-center font-bold text-4xl " >Sign-up</h1>
          <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label htmlFor="name" className='font-bold'>UserName</label>
              <input type="text" id="name"
                className=" w-[20rem] border-2 border-slate-400 rounded-md focus:outline-none p-1"
                onChange={handleName}
              />
              <label htmlFor="email" className='font-bold'>Email</label>
              <input type="text" id='email'
                className=" w-[20rem] border-2 border-slate-400 rounded-md focus:outline-none p-1"
                onChange={handleEmail}
                required
              />
              <label htmlFor="password" className='font-bold '>Password:</label>
              <input type="password" id="password"
                className=" w-[20rem] border-2 border-slate-400 rounded-md focus:outline-none p-1"
                onChange={handlePassword}
              />
              <input type="submit"
                className=" w-[20rem] border-2 mt-4 bg-blue-400 border-slate-400 rounded-md focus:outline-none p-1 cursor-pointer " />
            </div>

          </form>
          <div className='mt-2 text-center'>
             <NavLink to="/login"><span className="text-blue-500">already have an account</span></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp