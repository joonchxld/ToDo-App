import React from "react"
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoBtn } from '../CreateTodoBtn';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos} />
            <TodoSearch style={{ alignSelf: 'center' }}
                searchValue={searchValue}
                setSearchValue={setSearchValue} />

            <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

                {/* Se renderiza un TodoItem dentro de la sección de ToDo's */}
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <CreateTodoBtn />
        </>
    );
};

export { AppUI };