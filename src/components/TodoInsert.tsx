import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

export default function TodoInsert() {
    const [value, setValue] = useState('');
    const addTodo = useAddTodo();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: 커스텀 Hook 사용해서 새 항목 등록
        addTodo(value);
        setValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    )
}
