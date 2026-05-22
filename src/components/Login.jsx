import Header from "./Header";
import { useState, useRef } from "react";
import checkVaildData from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    const message = checkVaildData(email.current.value, password.current.value);
    console.log(message);
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute p-12 bg-black/70 rounded-md  text-white w-4/12 right-0 left-0 mx-auto my-24"
      >
        <h1 className="text-3xl font-bold my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-sm my-2 border  bg-gray-500 border-none outline-none w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 border rounded-sm bg-gray-500 border-none outline-none w-full"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 rounded-sm bg-gray-500 border border-none outline-none  w-full"
        />
        <button
          onClick={handleButtonClick}
          className=" cursor-pointer p-3 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-semibold cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Nerflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
