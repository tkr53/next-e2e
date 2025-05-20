"use client"

import { add } from "@/app/actions/add";

export const AddButton = () => {

  return (
    <form action={add}>
      <input type="text" name="title" placeholder="タイトルを入力" className="border p-2 rounded" />
      <button className="bg-blue-500 text-white p-2 rounded cursor-pointer" type="submit">
        追加
      </button>
    </form>
  );
}