import { Footer } from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="bg-[#EFEFEF]">{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
