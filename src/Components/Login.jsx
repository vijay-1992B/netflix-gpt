import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <div
        className=" w-[100%] h-[100vh]
       bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg')]  bg-cover"
      >
        <div className="bg-[rgba(0,0,0,0.4)] w-[100%] h-[100vh]">
          <Header />
          <form className="bg-black mt-8 p-14 max-w-[470px] mx-auto text-white bg-opacity-70 rounded-md flex flex-wrap">
            <h1 className="mb-5 text-4xl font-bold">
              {isSignIn ? "Sign In" : "Sign up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 my-3  w-full rounded-md bg-transparent border border-gray-500"
              />
            )}
            <input
              type="text"
              placeholder="Email"
              className="p-4 my-3  w-full rounded-md bg-transparent border border-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 my-3  w-full rounded-md bg-transparent border border-gray-500"
            />
            <button className="w-full my-3 p-3 rounded-md opacity-95 bg-[#C11119]">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className="mt-8 cursor-pointer" onClick={handleSignIn}>
              {isSignIn
                ? <>New to Netflix? <span className="font-bold">Sign up now.</span></>
                : <>Already a user? <span className="font-bold">Sign In Now</span></>}
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
