"use client";

import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    if (!username || !password) {
      setMessage("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post("/api/v1/signup", {
        username,
        password,
      });

      setMessage(res.data.message || "Signed up successfully!");
    } catch (error: any) {
      if (error.response) {
        setMessage(error.response.data.message || "Signup failed");
      } else {
        setMessage("Something went wrong");
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-6 flex flex-col gap-4 w-80">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={handleSignup}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign up
        </button>
        {message && (
          <p className="text-sm text-center text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
}
