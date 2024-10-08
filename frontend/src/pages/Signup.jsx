import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "./../hooks/useSignup.js";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { signup, loading } = useSignup();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);
  };
  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div>
            <h1 className="inline mx-4">Signup</h1>
            <span className="text-blue-400">Chatty</span>
            <form>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Fullname</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Fullname"
                  className="w-full input input-bordered h-10"
                  value={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full input input-bordered h-10"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
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
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="w-full input input-bordered h-10"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>
              <Link to="/login"> Already have an account?</Link>

              <button
                className="w-full block btn btn-sm btn-active btn-neutral sm:btn-sm md:btn-md lg:btn-lg"
                onClick={handleSubmit}
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
