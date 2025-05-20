"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../databese/client";

export async function add(formData: FormData) {
    const title = formData.get("title");
    if (typeof title !== "string") {
        throw new Error("Invalid title");
    }
    await prisma.list.create({
        data: {
        title,
        },
    });
    revalidatePath("/");
};