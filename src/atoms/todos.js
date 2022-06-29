import { atom } from "recoil";

export const todos = atom({
  key: "todoList",
  default: [
    {
      id: 0,
      text: "운동",
      checked: false,
    },
    {
      id: 1,
      text: "깃꾸",
      checked: true,
    },
  ],
});