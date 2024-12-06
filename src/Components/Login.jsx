import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import image from "../assets/Image.svg"
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate()


    async function handleRequest(e) {

        e.preventDefault()
        if (!email || !password) {
            console.error("Email and Password are required");
            return;
        }
        try {
            const res = await axios.post("https://moviebackend-7pgm.onrender.com/api/login", { email, password })
            console.log(res)
            if (res.data.success) {
                console.log(res.data)
                localStorage.setItem('user', JSON.stringify({ name: res.data.name, email: res.data.email }));

                navigate("/home")
            }
        } catch (e) {
            alert("user does not exist")
            console.log("eRror in login")
        }



    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className="w-auto flex flex-col md:flex-row items-center justify-center h-screen md:space-x-8 space-y-8 mt-8 md:mt-0">
                <div>
                    <img src={image} alt="" className='w-[30rem]' />
                </div>
                <div className='w-[25rem] h-[20rem] p-4 border-2 border-slate-400 rounded-md'>
                    <h1 className='text-center w-3 font-bold text-4xl shadow-md'>Login</h1>
                    <form action="" onSubmit={handleRequest} className='mt-2'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email" className='font-bold'>Email:</label>
                            <input
                                type="text"
                                id="email"
                                className=" w-[20rem] border-2 border-slate-400 bg-[#F0F0F0]   rounded-md focus:outline-none p-1"
                                onChange={handleEmail}
                            />
                            <label htmlFor="password" className='font-bold'>Password:</label>
                            <input type="password" id="password"
                                className=" w-[20rem] border-2 border-slate-400 rounded-md focus:outline-none p-1"
                                onChange={handlePassword}
                            />
                            <div className='flex flex-col'>
                                <input className=" w-[20rem] border-2 mt-4 bg-blue-400 border-slate-400 rounded-md focus:outline-none cursor-pointer"
                                    type="submit" />
                                <NavLink to="/reset">
                                    <span className=' text-sm text-blue-500 flex flex-row-reverse mr-[3rem]'>forgot-password</span>
                                </NavLink>
                            </div>
                        </div>
                        <NavLink to="/signup">
                            <div className='text-center mt-5 text-blue-500'>Don't have account create one</div>

                        </NavLink>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login