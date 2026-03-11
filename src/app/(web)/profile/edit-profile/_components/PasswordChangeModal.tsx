"use client";

import { KeyRound, Save, X, Eye, EyeOff } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type PasswordChangeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PasswordChangeModal({
  isOpen,
  onClose,
}: PasswordChangeModalProps) {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const togglePassword = (field: keyof typeof showPassword) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const resetForm = () => {
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setShowPassword({
      currentPassword: false,
      newPassword: false,
      confirmPassword: false,
    });
  };

  const handleClose = useCallback(() => {
    resetForm();
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    console.log("Password changed:", formData);
    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="change-password-title"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-4xl rounded-[20px] bg-[#f5f5f5] shadow-[0_18px_48px_rgba(0,0,0,0.2)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Title */}
        <div className="flex items-start justify-end gap-4 px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">
       

          <button
            type="button"
            onClick={handleClose}
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-full text-[#7d7d7d] transition hover:bg-white hover:text-[#1239e6]"
            aria-label="Close change password modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Card */}
        <div className="mx-5 mb-6 mt-6 rounded-[20px] ">
          {/* Top Header */}
          <div className="flex flex-col gap-4 border-b border-[#ececec] pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef3ff]">
                <KeyRound className="h-6 w-6 text-[#1239e6]" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#222] sm:text-[24px]">
                  Password Settings
                </h2>
                <p className="mt-1 text-sm text-[#7d7d7d] sm:text-[15px]">
                  Enter your current password and choose a new one
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 sm:space-y-6">
            <PasswordField
              label="Current Password"
              value={formData.currentPassword}
              onChange={(value) => handleChange("currentPassword", value)}
              visible={showPassword.currentPassword}
              onToggle={() => togglePassword("currentPassword")}
            />

            <PasswordField
              label="New Password"
              value={formData.newPassword}
              onChange={(value) => handleChange("newPassword", value)}
              visible={showPassword.newPassword}
              onToggle={() => togglePassword("newPassword")}
            />

            <PasswordField
              label="Confirm New Password"
              value={formData.confirmPassword}
              onChange={(value) => handleChange("confirmPassword", value)}
              visible={showPassword.confirmPassword}
              onToggle={() => togglePassword("confirmPassword")}
            />

            {/* Password note */}
            <div className="rounded-xl bg-[#f8faff] px-4 py-3 text-sm text-[#6b7280]">
              Password should be at least 6 characters and include a mix of
              letters, numbers, and symbols.
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="flex h-[46px] items-center justify-center gap-2 rounded-md px-5 text-sm font-medium text-[#1239e6] transition hover:bg-[#eef2ff] sm:min-w-[120px]"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>

              <button
                type="submit"
                className="flex h-[46px] items-center justify-center gap-2 rounded-md bg-[#1239e6] px-5 text-sm font-medium text-white transition hover:bg-[#0f31c9] sm:min-w-[140px]"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

type PasswordFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  visible: boolean;
  onToggle: () => void;
};

function PasswordField({
  label,
  value,
  onChange,
  visible,
  onToggle,
}: PasswordFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#7b7b7b] sm:text-[15px]">
        {label}
      </label>

      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Enter ${label.toLowerCase()}`}
          className="h-[50px] w-full rounded-[6px] border border-[#dddddd] bg-white px-4 pr-12 text-[15px] text-[#222] outline-none transition placeholder:text-[#9ca3af] focus:border-[#1239e6]"
        />

        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7b7b7b] transition hover:text-[#1239e6]"
        >
          {visible ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}
