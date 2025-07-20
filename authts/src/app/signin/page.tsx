"use client";

import axios from "axios";
import { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await axios.post("/api/v1/signin", {
        username,
        password,
      });

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border p-4 flex flex-col gap-2">
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-1"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-1"
        />
        <button onClick={handleSignin} className="bg-black text-white px-4 py-1">
          Sign in
        </button>
      </div>
    </div>
  );
}
