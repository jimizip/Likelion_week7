import { atom } from "recoil";

export const todos = atom({
  key: "todoList",
  default: [0,],
});