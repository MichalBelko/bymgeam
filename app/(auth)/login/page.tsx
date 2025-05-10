"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    if (email === "test@gmail.com" && password === "test") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="w-full max-w-md bg-white m-4 p-8 shadow-2xl flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <span className="text-4xl font-extrabold text-dark-color tracking-wide mb-2">
            BymGeam
          </span>
          <span className="text-gray-500 text-sm text-center">
            Welcome! Please log in to your BymGeam account.
            <br />
            <span className="font-medium text-gray-900">
              If you want to see products, you have to log in.
            </span>
          </span>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-dark-color"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-dark-color"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && (
            <div className="mb-4 text-dark-color text-sm text-center">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#FF4410] text-white py-2 px-4 cursor-pointer font-semibold hover:bg-[#CC3400] transition-colors delay-0.5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
