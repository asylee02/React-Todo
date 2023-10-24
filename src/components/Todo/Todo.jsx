import React from 'react'
import { useContext } from 'react';
import styles from './Todo.module.css'
import {FiTrash} from 'react-icons/fi'
import { FilterContext } from '../../context/FilterContext';



export default function Todo({todo, onUpdate, onDelete}) {
  
  const {darkmode, filter, setFilter} = useContext(FilterContext);
  const {text, status} = todo;
  const handleChecked = (e) =>{
      const status = e.target.checked ? 'completed' : 'active';
      onUpdate({... todo, status:status}) 
  }
  const handleDelete = () =>{
      console.log(todo.id)
      onDelete(todo)
  }

  if(filter ==='ALL'){return (<div><List/></div>)}
  else if(filter === 'Complete'){
          if(status ==='completed'){return (<div><List/></div>)}
          else return(<></>)
  }
  else if(filter === 'Active'){
          if(status === 'active'){return (<div><List/></div>)}
          else return(<></>)
  }


  function List (){
    return(
      <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" id={todo.id} onClick={handleChecked} checked={status =='completed'}/>
      <label className={styles.text} htmlFor={todo.id}>{text}</label>
      <span className={styles.icon}>
      <button className={styles.button} onClick={handleDelete}>
        <FiTrash/>
      </button>
      </span>
    </li>
    )
  }
}
