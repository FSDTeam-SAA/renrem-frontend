"use client";

import Image from "next/image";
import { Pencil, Save, X } from "lucide-react";
import { useState } from "react";
import PasswordChangeModal from "./_components/PasswordChangeModal";

type ProfileData = {
  fullName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  avatar: string;
};

const initialProfile: ProfileData = {
  fullName: "Mr. Raja",
  userName: "raja123",
  email: "raja123@gmail.com",
  phoneNumber: "+1 (888) 000-0000",
  dateOfBirth: "15 April 2001",
  gender: "Male",
  address: "00000 Artesia Blvd, Suite A-000",
  avatar: "/profile.jpg",
};

export default function MyProfileSection() {
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [formData, setFormData] = useState<ProfileData>(initialProfile);

  const handleEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const currentData = isEditing ? formData : profile;

  return (
    <section className="w-full  py-10 sm:py-14 lg:py-16">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-[32px] font-semibold leading-tight text-[#253C67] sm:text-[42px] lg:text-[48px]">
            My profile
          </h1>
        </div>

        {/* Top area */}
        <div className="mt-10 flex flex-col gap-6 lg:mt-14 lg:flex-row lg:items-center lg:justify-between">
          {/* Profile brief */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20">
              <Image
                src={profile.avatar}
                alt="Profile avatar"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#222] sm:text-[24px]">
                {profile.fullName}
              </h2>
              <p className="mt-1 text-sm text-[#7d7d7d] sm:text-[15px]">
                @{profile.userName}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setIsPasswordModalOpen(true)}
              className="h-[46px] rounded-md border border-[#9b9b9b] bg-transparent px-5 text-sm font-medium text-[#5f5f5f] transition hover:bg-white sm:min-w-[160px]"
            >
              Change Password
            </button>

            {!isEditing ? (
              <button
                type="button"
                onClick={handleEdit}
                className="flex h-[46px] items-center justify-center gap-2 rounded-md bg-[#1239e6] px-5 text-sm font-medium text-white transition hover:bg-[#0f31c9] sm:min-w-[160px]"
              >
                <Pencil className="h-4 w-4" />
                Edit Profile
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="flex h-[46px] items-center justify-center gap-2 rounded-md bg-[#d9d9d9] px-5 text-sm font-medium text-white sm:min-w-[160px]"
              >
                <Pencil className="h-4 w-4" />
                Update Profile
              </button>
            )}
          </div>
        </div>

        {/* Form / Info */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          <ProfileField
            label="Full Name"
            value={currentData.fullName}
            isEditing={isEditing}
            onChange={(value) => handleChange("fullName", value)}
          />

          <ProfileField
            label="User Name"
            value={currentData.userName}
            isEditing={isEditing}
            onChange={(value) => handleChange("userName", value)}
          />

          <ProfileField
            label="Email"
            type="email"
            value={currentData.email}
            isEditing={isEditing}
            onChange={(value) => handleChange("email", value)}
          />

          <ProfileField
            label="Phone Number"
            value={currentData.phoneNumber}
            isEditing={isEditing}
            onChange={(value) => handleChange("phoneNumber", value)}
          />

          <ProfileField
            label="date of Birth"
            value={currentData.dateOfBirth}
            isEditing={isEditing}
            onChange={(value) => handleChange("dateOfBirth", value)}
          />

          <ProfileField
            label="Gender"
            value={currentData.gender}
            isEditing={isEditing}
            onChange={(value) => handleChange("gender", value)}
          />

          <div className="sm:col-span-2">
            <ProfileField
              label="Address"
              value={currentData.address}
              isEditing={isEditing}
              onChange={(value) => handleChange("address", value)}
            />
          </div>
        </div>

        {/* Bottom action buttons in edit mode */}
        {isEditing && (
          <div className="mt-8 flex flex-col-reverse gap-3 sm:mt-10 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleCancel}
              className="flex h-[46px] items-center justify-center gap-2 rounded-md px-5 text-sm font-medium text-[#1239e6] transition hover:bg-[#eef2ff] sm:min-w-[110px]"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="flex h-[46px] items-center justify-center gap-2 rounded-md bg-[#1239e6] px-5 text-sm font-medium text-white transition hover:bg-[#0f31c9] sm:min-w-[110px]"
            >
              <Save className="h-4 w-4" />
              Save
            </button>
          </div>
        )}
      </div>
      <PasswordChangeModal
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </section>
  );
}

type ProfileFieldProps = {
  label: string;
  value: string;
  isEditing: boolean;
  onChange: (value: string) => void;
  type?: string;
};

function ProfileField({
  label,
  value,
  isEditing,
  onChange,
  type = "text",
}: ProfileFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#7b7b7b] sm:text-[15px]">
        {label}
      </label>

      {isEditing ? (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-[50px] w-full rounded-[4px] border border-[#dddddd] bg-white px-4 text-[15px] text-[#222] outline-none transition focus:border-[#1239e6]"
        />
      ) : (
        <div className="flex min-h-[50px] w-full items-center rounded-[4px] border border-[#dddddd] bg-transparent px-4 text-[15px] text-[#222]">
          {value}
        </div>
      )}
    </div>
  );
}
