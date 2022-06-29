import React, { useState, useCallback } from 'react';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    // 입력을 하기 위해 
    const [value, setValue] = useState('');

    // 바뀐 값을 가져온다.
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue(''); 
        // 값을 넣어준 뒤 값을 다시 초기화 시켜준다.

       // 새로 고침을 방지하기 위해서 preventDefault를 사용해준다.
        e.preventDefault();
    },[onInsert, value]); // value와 setValue를 사용해주었으니 의존성 리스트에 넣어줌.

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="Write a To Do and Press Enter" // 입력칸
                value={value} // 값
                onChange={onChange} // 바뀐 값
            />
            <button type="submit">
                💛
            </button>
        </form>
    );
};

export default TodoInsert;