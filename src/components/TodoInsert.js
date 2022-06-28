import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    // 입력을 위한 state
    const [value, setValue] = useState('');

    // 최초 렌더링 후 재사용 가능한 callback
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); // 삽입 후 value 초기화

        // submit 이벤트는 기본적으로 새로고침을 발생시키킨다
        // 때문에 preventDefault를 통해 기본 동작을 막는다
        e.preventDefault();
    },[onInsert, value]);

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="Write a To Do and Press Enter"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                💛
            </button>
        </form>
    );
};

export default TodoInsert;