//import React, { useState, useRef, useCallback } from 'react';
import React, { useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { todos } from "./atoms/todos";
const App = () => {

  //const [todos, setTodos] = useState([]); // 배열 안에 아무것도 없다면 한 줄로
  const [todoLists, setTodoLists] = useRecoilState(todos); // useState와 사용법 동일
  const recoilValue = useRecoilValue(todos); // 해당 atom의 값
  const nextId = useRef(recoilValue);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // concat으로 원본배열은 보존하고 새로운 복사 배열 생성
      setTodoLists(todoLists.concat(todo));
      nextId.current += 1; // nextId 증가
    },
    [todoLists, setTodoLists]
  );

  const onRemove = useCallback(
    id => {
      // filter를 통해 선택된 값 이외의 배열을 모두 출력
      setTodoLists(todoLists.filter(todo => todo.id !== id));
    },
    [todoLists, setTodoLists]
  );

  const onToggle = useCallback(
    id => {
      setTodoLists(
        todoLists.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
      );
    },
    [todoLists, setTodoLists]
  );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todoLists={todoLists} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    );
};

export default App;
