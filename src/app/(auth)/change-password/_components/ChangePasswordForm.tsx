"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

function ChangePasswordForm() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const inputBaseClass =
    "w-full px-4 py-3 pr-12 rounded-lg text-sm text-gray-800 bg-white border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition";

  return (
    <div className="min-h-screen flex">

      {/* LEFT PANEL */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-14 py-12 bg-gray-50 relative">
        {/* Form Container */}
        <div className="relative max-w-md w-full mx-auto z-10">
          {/* Heading */}
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#2471a3", letterSpacing: "-0.3px" }}>
            Change Password
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Enter your new password to update your account securely
          </p>

          {/* New Password */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                placeholder="••••••••"
                className={inputBaseClass}
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-7">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                className={inputBaseClass}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full text-white font-semibold py-3 rounded-lg text-sm tracking-wide transition-all"
            style={{ background: "#1a5276" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#154360")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1a5276")}
          >
            Change Password
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <Image
          src="/images/auth.png"
          alt="Secure change password"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default ChangePasswordForm;