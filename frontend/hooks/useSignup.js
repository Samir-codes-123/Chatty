import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/Authcontext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({ fullName, username, password, confirmPassword }) => {
    setLoading(true);
    const successs = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
    });
    if (!successs) return;
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      // set in local storage and get from context
      localStorage.setItem("auth-user", JSON.stringify(data));
      setAuthUser(data);

      //console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword }) {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password donot match");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be atleast 6 characters");
    return false;
  }
  return true;
}
