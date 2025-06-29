import { useState } from "react";
import { GrGoogle } from "react-icons/gr";
// import { useContext, useState } from "react";


const Authentication = () => {
  const [login, setLogin] = useState(true);

const handleLogin = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const email = formData.get("email")
  const password = formData.get("password")
  const username = formData.get("username")
  const fullName = formData.get("fullname")
}
//  if(user){ 
//         return <Navigate to={'/'}/>
//    }

    return (
        <div className="container mx-auto min-h-screen flex justify-around">
           <div className="flex justify-center items-center">
        <img className=" animate-pulse" src="https://png.pngtree.com/png-vector/20220427/ourmid/pngtree-vector-login-icon-login-design-shadow-vector-png-image_13266424.png" alt="login photo" />
           </div>

           <div  className="flex justify-start items-center">
            <div className=" text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
  <div className="text-center mb-5">
      
  </div>

  {

    // Login Form

    login ? <form onSubmit={handleLogin} className="mb-4 text-sm">
      <p className=" text-2xl font-bold text-center mb-4 text-gray-400">
      Sign In
    </p>
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="email"
        placeholder="Phone number, email or username"
        name="email"
      />
    </div>

    <div className="mb-6">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
    </div>


      <button
        className="bg-[#687FE5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit"
      >
        Log In
      </button>
      <p className="text-red-500 pt-2 text-center"></p>
      
      
  </form> 
  :

  // Registration Form

  <div>

 <p className=" text-2xl font-bold text-center mb-4 text-gray-400">
      Sign up
    </p>
  <form className="mb-4 text-sm">
   
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="email"
        placeholder="Email"
        name="email"
        />
    </div>
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="password"
        placeholder="Password"
        name="password"
        />
    </div>
    <div className="mb-4">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        
        type="text"
        placeholder="Full name"
        name="fullname"
        />
    </div>

    <div className="mb-6">
      
      <input required
        className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="username"
        placeholder="User name"
      />
    </div>


      <button 
        className="bg-[#687FE5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        type="submit"
        >
        Sign Up
      </button>
      <p className="text-red-500 pt-2 text-center"></p>
      
      
  </form> 
        </div>
  }


 { !login ? <p className="text-center text-gray-500 text-sm">
    Already have an account?
    <a onClick={() => setLogin(!login)} className="text-blue-500 hover:text-blue-800 cursor-pointer"> Sign In</a>
  </p> :
  <p className="text-center text-gray-500 text-sm">
    Don't have an account?
    <a onClick={() => setLogin(!login)} className="text-blue-500 hover:text-blue-800 cursor-pointer"> Sign Up</a>
  </p>}
</div>
           </div>
        </div>
    );
};

export default Authentication