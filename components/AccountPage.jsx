import React, { useState } from 'react';

const AccountPage = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false)

  const [error,setError]=useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSubmit=(e)=>{
    e.preventDefault();

    const nameReg=/^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}$/;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let newError={ name: "", email: "", password: "" };

    if (name.length < 3 || !nameReg.test(name)){
      newError.name="Name is not valid";
    }

    if(!email || !emailReg.test(email)){
      newError.email="Enter valid email";
    }

    if(!password || password.length < 5){
      newError.password="Password must be at least 5 characters";
    }

    setError(newError);

    if (newError.name || newError.email || newError.password) return;

    setLoading(true);
    console.log("submitted");

    setTimeout(()=>{
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setError({
            email : "",
            name : "",
            password : ""
        })
    },3000);
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-lg w-[350px] flex flex-col gap-4"
      >

        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium">Name</label>
          <input 
            type="text"
            className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${
              error.name ? "border-red-500" : "focus:ring-blue-400"
            }`}
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-medium">Email</label>
          <input 
            type="text"
            className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${
              error.email ? "border-red-500" : "focus:ring-blue-400"
            }`}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="font-medium">Password</label>
          <input 
            type="password"
            value={password}
            className={`border p-2 rounded-lg focus:outline-none focus:ring-2 ${
              error.password ? "border-red-500" : "focus:ring-blue-400"
            }`}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
        </div>

        <button 
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"

          disabled={loading}
        >
          {loading ? 'submitting' : 'submit' }
        </button>

      </form>
    </div>
  )
}

export default AccountPage;
