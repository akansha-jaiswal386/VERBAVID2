import React from 'react'

const Login = () => {
  return (
    <div  style={{ 
      backgroundImage: `url('https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148888451.jpg?semt=ais_hybrid')`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat" 
    }} className=" min-h-screen w-full flex items-center justify-center">
  <form 
   
    className="w-[90%] max-w-sm md:max-w-md h-[500px] md:h-[550px] rounded-2xl shadow-lg p-8 flex flex-col justify-center"
  >
    <h2 className="text-2xl font-semibold text-center text-white">Login</h2>

    <div className="mt-6">
      <label className="block text-white">Email</label>
      <input 
        type="email" 
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-black" 
        placeholder="Enter your email" 
      />
    </div>

    <div className="mt-4">
      <label className="block text-white">Password</label>
      <input 
        type="password" 
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-black" 
        placeholder="Enter your password" 
      />
    </div>

    {/* Forgot Password & Sign Up Links */}
    <div className="flex justify-between text-sm mt-2">
      <a href="#" className="text-gray-300 hover:text-white transition">Forgot Password?</a>
      <a href="#" className="text-gray-300 hover:text-white transition">Sign Up</a>
    </div>

    <button className="w-full bg-purple-600 text-white py-2 mt-6 rounded-lg hover:bg-purple-700 transition">
      Login
    </button>
  </form>
</div>

  )
}

export default Login;
