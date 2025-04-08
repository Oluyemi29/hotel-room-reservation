import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import UploadRoom from "@/components/UploadRoom";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin - Upload Room",
};

const page = async () => {
  await CheckUserRole();
  return (
    <div>
      <UploadRoom />
    </div>
  );
};

export default page;
