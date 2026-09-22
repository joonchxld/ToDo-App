import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        // preventDefault : evento que evita que la página se recargue al darle click a un botón.
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva tarea.</label>
            <textarea placeholder='"Escribe la tarea aquí.'
            value={newTodoValue}
            onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type='submit'
                    className='TodoForm-button--add'>Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };