"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function SignUpForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const baseInputClass =
    "w-full px-4 py-3 text-sm text-gray-800 bg-white border border-[#616161] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // mutation
  const createUserMutation = useMutation({
    mutationFn: async (body: SignUpData) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create user");
      }

      return res.json();
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      router.push("/signin");
    },
    onError: (err: unknown) => {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    },
  });

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return toast.error("Please fill all fields");
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    createUserMutation.mutate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    });
  };

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
        <div className="w-full max-w-lg">
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`${baseInputClass} pr-10`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`${baseInputClass} pr-10`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg text-sm transition"
              disabled={createUserMutation.isPending}
            >
              {createUserMutation.isPending ? "Signing Up..." : "Sign Up"}
            </button>

            {/* login */}
            <p className="text-center text-sm text-gray-500 pt-2">
              Already have an account?{" "}
              <a
                href="/signin"
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