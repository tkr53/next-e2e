import { remove } from "@/app/actions/remove";

export const RemoveButton = ({ id }: { id: string }) => {
  return (
    <form action={remove} className="cursor-pointer">
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="bg-red-500 text-white p-1 rounded ml-2 cursor-pointer">
        削除
      </button>
    </form>
  );
}