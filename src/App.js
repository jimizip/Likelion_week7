//import React, { useState, useRef, useCallback } from 'react';
import React, { useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { todos } from "./atoms/todos"; // recoil
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
      // concat을 사용하면 기존 배열의 마지막 부분에 배열을 추가시켜준다.
      setTodoLists(todoLists.concat(todo));
      nextId.current += 1; // nextId의 값을 1 증가 시켜준다.
    },
    [todoLists, setTodoLists] // todoLists 와 setTodoLists 사용으로 의존성 리스트 작성
  );

  const onRemove = useCallback(
    id => {
      // filter는 test를 통과하는 요소들을 새로운 배열로 반환하는데, filter 기능을 이용하여 삭제를 한다.
      setTodoLists(todoLists.filter(todo => todo.id !== id));
    },
    [todoLists, setTodoLists] // todoLists 와 setTodoLists 사용으로 의존성 리스트 작성
  );

  const onToggle = useCallback(
    id => {
      setTodoLists(
        todoLists.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
      );
    },
    [todoLists, setTodoLists] // todoLists 와 setTodoLists 사용으로 의존성 리스트 작성
  );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todoLists={todoLists} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    );
};

export default App;
