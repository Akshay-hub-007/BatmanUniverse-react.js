import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ResetPassword() {
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const navigate=useNavigate()
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleRequest=async(e)=>{
        e.preventDefault();
    try{
         const res=await axios.post("http://localhost:3000/api/reset",{email,password})
        if(res.data.success)
        {
          alert("password reseted successfully")
           navigate("/login")   
        }
    }catch(err)
    {
        console.log(err)
    }
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    return (
        <>
        <div className="w-auto flex flex-row items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">

        <div className='w-[25rem] h-auto p-4 border-2 border-slate-400 rounded-md  bg-gray-700 '>
            <h1 className='text-center  font-medium text-white'>Reset Password</h1>
            <form action=""
            onSubmit={handleRequest}
             >
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='text-white'>Email:</label>
                    <input
                        type="text"
                        id="email"
                        className="p-1 w-[20rem] border-2 border-slate-400 bg-[#F0F0F0]   rounded-md focus:outline-none"
                        onChange={handleEmail}
                    />
                   <label htmlFor="password" className='text-white'>New Pasword:</label>
                    <input
                        type="password"
                        id="password"
                        className=" p-1 w-[20rem] border-2 border-slate-400 bg-[#F0F0F0]   rounded-md focus:outline-none"
                        onChange={handlePassword}
                    />
                    <div className='flex flex-col'>
                    <input className=" w-[20rem] border-2 mt-4 bg-blue-400 border-slate-400 rounded-md focus:outline-none"
                        type="submit"  />
                       
                    </div>
                </div>
             
            </form>
        </div>
    </div>
  </>
    )
}

export default ResetPassword