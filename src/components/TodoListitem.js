import React from 'react';
import classNames from 'classnames'; // 조건부 이름 주기
//yarn add react-icons
import { 
    BiCheckbox,
    BiCheckboxChecked,
} from 'react-icons/bi';
import './TodoListitem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return(
        <div className="TodoListItem">
            { /* 체크 박스 수정 */ }
            <div className={classNames('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <BiCheckboxChecked  size="35" color="#32cd32" /> : <BiCheckbox  size="35" color="#32cd32" />}
                <div className="text">{text}</div> 
            </div>
            {/* 버튼을 클릭하면 onRemove 함수에 id를 넣어 호출 */}
            <div className="remove" onClick={() => onRemove(id)}>
                ❌
            </div>
        </div>
    );
};

export default TodoListItem;