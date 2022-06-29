import React from 'react';
import TodoListItem from './TodoListitem';
import './TodoList.scss';

const TodoList = ({ todoLists, onRemove, onToggle }) => { // App.js에서 props를 참고하여 목록 작성
    return (
        <div className="TodoList">
            {todoLists.map(todo => (
                <TodoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TodoList;