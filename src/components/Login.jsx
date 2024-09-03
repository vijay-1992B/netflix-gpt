import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-[length:135%] 
       bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg')]"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50"></div>

        <Header />

        <form className="absolute bg-black bg-opacity-70  text-white  w-4/12 left-0 right-0 mx-auto top-28 p-16 rounded-md">
          <h1 className="font-bold text-3xl my-5">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Name"
            className="p-4 my-3  w-full rounded-md text-black "
          />}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 my-3  w-full rounded-md text-black "
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-3 w-full rounded-md"
          />
          <button className="w-full my-3 p-3 rounded-md opacity-95 bg-[#C11119]">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-5 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
