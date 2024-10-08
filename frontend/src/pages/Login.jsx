import React from "react";
import { Link } from "react-router-dom";

import useLogin from "../hooks/useLogin";

const Login = () => {
  const { loading, login } = useLogin();
  const [inputs, setInputs] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await login(inputs);
  };
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div>
            <h1 className="inline mx-4">Login</h1>
            <span className="text-blue-400">Chatty</span>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full input input-bordered h-10"
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                  value={inputs.username}
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
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                  value={inputs.password}
                />
              </div>
              <Link to={`/signup`}> {"Don't"} have an account?</Link>

              <button className="w-full block btn btn-sm btn-active btn-neutral sm:btn-sm md:btn-md lg:btn-lg">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
