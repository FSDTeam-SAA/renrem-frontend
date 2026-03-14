"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

function VerifyEmailForm() {
  const [otp, setOtp] = useState(["", "", "", "","",""]);
  const [seconds, setSeconds] = useState(59);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const formatTime = (s: number) => {
    const m = String(Math.floor(s / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${m}:${sec}`;
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-50">
        <Image
          src="/images/auth.png"
          alt="Auth image"
          width={400}
          height={400}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-14 bg-white">
        <div className="w-full max-w-md">
          {/* header */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">
              Email Verification
            </p>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verify Email
            </h1>

            <p className="text-sm text-gray-500">
              Enter the OTP sent to your email.
            </p>
          </div>

          {/* OTP */}
          <div className="flex gap-3 mb-5 w-full justify-between">
            {otp.map((val, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputRefs.current[i] = el;
                }}
                type="text"
                maxLength={1}
                value={val}
                onChange={(e) => handleOtpChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              />
            ))}
          </div>

          {/* timer */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
            <Clock size={16} />
            <span>{formatTime(seconds)}</span>
            <span>Didn&apos;t get a code?</span>

            <button
              type="button"
              disabled={seconds > 0}
              onClick={() => setSeconds(59)}
              className="text-blue-600 font-medium disabled:opacity-40"
            >
              Resend
            </button>
          </div>

          {/* button */}
          <button
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm transition"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmailForm;
