"use server"

import { revalidatePath } from "next/cache";
import { prisma } from "../databese/client";

export const remove = async (formData: FormData) => {
  const id = formData.get("id");
  if (typeof id !== "string") {
    throw new Error("Invalid id");
  }
  await prisma.list.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};