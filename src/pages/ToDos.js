import React, { useEffect, useState } from 'react';
import GetJSON from '../services/GetJSON';
import LoaderWrapper from '../components/LoaderWrapper/LoaderWrapper';

const ToDos = () => {
    const getToDos = async () => {
        const result = await GetJSON();
        setToDos(result);
    };

    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        getToDos();
    }, []);

    toDos.forEach((todo) => console.log(todo));

    return (
        <>
            {toDos.length === 0 ? (
                <LoaderWrapper />
            ) : (
                <ul>
                    {toDos.map((todo) => (
                        <li>{todo.title}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ToDos;
