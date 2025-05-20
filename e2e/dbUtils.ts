import { prisma } from "../app/databese/client";

export async function resetDb() {
  // Listテーブルをtruncate
  await prisma.list.deleteMany({});
  // testデータを1件だけ挿入
  await prisma.list.create({ data: { title: "test" } });
}
