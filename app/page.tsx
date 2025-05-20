import { AddButton } from "@/app/components/addButton";
import { RemoveButton } from "@/app/components/removeButton";
import { prisma } from "@/app/databese/client";

export default async function Home() {
  const list = await prisma.list.findMany();

  const add = async (title: string) => {
    await prisma.list.create({
      data: {
        title,
      },
    });
  };

  const remove = async (id: string) => {
    await prisma.list.delete({
      where: {
        id,
      },
    });
  };

  return (
    <div>
      <AddButton />
      <ol>
        {list.map((item) => (
          <div key={item.id} className="flex items-center border-b border-gray-300 py-2">
            <li key={item.id} className="p-2">
              {item.title}
            </li>
            <RemoveButton id={item.id} />
          </div>
        ))}
      </ol>
    </div>
  );
}
