import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div>
        <h1 className="inline mx-4">Login</h1>
        <span className="text-blue-400">Chatty</span>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a href="#"> {"Don't"} have an account?</a>

          <button className="w-full block btn btn-sm btn-active btn-neutral sm:btn-sm md:btn-md lg:btn-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
