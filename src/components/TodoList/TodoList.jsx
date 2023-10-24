import React from 'react'
import { useState } from 'react'
import { FilterContext } from '../../context/FilterContext';
import AddTodo from '../AddTodo/AddTodo'
import Filter from '../Todo/Filter'
import styles from './TodoList.module.css'
import Todo from '../Todo/Todo'
import { useContext } from 'react';
import { useEffect } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState(readTodosFromLocalStorage)
    const {darkmode} = useContext(FilterContext);
    const handleAdd = (todo) =>{setTodos([...todos, todo]) }
    const handleUpdate = (updated) => 
    {console.log(updated)
      setTodos(todos.map((item) => (item.id == updated.id ? updated : item)))
    }
    const handleDelete = (deleted) =>
    {setTodos(todos.filter((item)=> item.id !== deleted.id))}
    
    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
    },[todos])

  return (
    <div>
    
    <Filter todo={todos}/>
    <section className={`${styles.container} ${darkmode || styles.darkmode}`}>
      <ul className={`${styles.list} ${darkmode || styles.darkmode}`}>
        {todos.map((item)=>(
            <Todo 
            todo={item} 
            onUpdate={handleUpdate} 
            onDelete={handleDelete}
            />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
    </div>
  )
}

function readTodosFromLocalStorage() {
  console.log('eds')
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [] ;
}