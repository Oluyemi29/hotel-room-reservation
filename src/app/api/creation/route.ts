import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET() {
  const user = await currentUser();
  if (!user) {
    return redirect("/");
  }

  const checkUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });
  if (!checkUser) {
    await prisma.user.create({
      data: {
        id: user.id,
        firstname: user.firstName ?? "",
        lastname: user.lastName ?? "",
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }

  return redirect("/");
}
