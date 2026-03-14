"use client";

import React, { useState } from "react";
import Image from "next/image";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

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
          alt="Auth image"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-14 bg-white">
        <div className="w-full max-w-md">

          {/* header */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">
              Account Recovery
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password
            </h1>

            <p className="text-sm text-gray-500">
              Enter your email and we will send you an OTP to reset your password.
            </p>
          </div>

          {/* form */}
          <div className="space-y-4">

            {/* email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@example.com"
                className={baseInputClass}
              />
            </div>

            {/* button */}
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm transition"
            >
              Send OTP
            </button>

            {/* login */}
            <p className="text-center text-sm text-gray-500 pt-2">
              Remember your password?{" "}
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

export default ForgotPasswordForm;