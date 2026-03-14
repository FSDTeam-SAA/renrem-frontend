"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const baseInputClass =
    "w-full px-4 py-3 rounded-lg text-sm text-gray-800 bg-white border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition";

  return (
    <div className="min-h-screen flex">
      {/* LEFT PANEL */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-50">
        <Image
          width={400}
          height={400}
          src="/images/auth.png"
          alt="Food distribution"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-14 bg-white">
        <div className="w-full max-w-md">

          {/* header */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">
              Get started free
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create Your Account
            </h1>

            <p className="text-sm text-gray-500">
              Join Natiumpum AI and start your journey.
            </p>
          </div>

          {/* form */}
          <div className="space-y-4">

            {/* name row */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className={baseInputClass}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className={baseInputClass}
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className={baseInputClass}
              />
            </div>

            {/* password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Create Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`${baseInputClass} pr-10`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* confirm password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`${baseInputClass} pr-10`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* button */}
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm transition"
            >
              Sign Up
            </button>

            {/* login */}
            <p className="text-center text-sm text-gray-500 pt-2">
              Already have an account?{" "}
              <a
                href="/sign-in"
                className="text-blue-600 font-medium hover:underline"
              >
                Log In
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;