import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {

  const [todos, setTodos] = useState([]); // 배열 안에 아무것도 없다면 한 줄로

  const nextId = useRef(0);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // concat으로 원본배열은 보존하고 새로운 복사 배열 생성
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 증가
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      // filter를 통해 선택된 값 이외의 배열을 모두 출력
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
          ),
      );
    },
    [todos],
  );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    );
};

export default App;
