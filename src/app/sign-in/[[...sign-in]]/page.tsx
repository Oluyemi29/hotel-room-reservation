"use client";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
      <div className="w-full flex flex-col h-screen justify-center items-center my-20">
        <SignIn />
      </div>
    );
}
