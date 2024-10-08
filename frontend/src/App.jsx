import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/Authcontext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex">
      <Routes>
        <Route
          path="/"
          element={!authUser ? <Navigate to={`/signup`} /> : <Home />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={`/`} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={`/`} /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
