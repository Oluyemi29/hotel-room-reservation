import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const CheckUserRole = async () => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      role: true,
    },
  });
  if (!user || user.role !== "ADMIN") {
    return redirect("/");
  }
  return true
};
