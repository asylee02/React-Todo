import React from 'react'
import { useState } from 'react'
import styles from './AddTodo.module.css'
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState();
    const handleChange = (e) =>{setText(e.target.value)}
    const handleSubmit = (e) =>{
        e.preventDefault();
        (text.trim()==-'') || onAdd({id: uuidv4, text:text, status: 'active'})
        setText('')
        console.log(uuidv4())
    }
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder='Add Todo' type="text" value={text} onChange={handleChange}/>
        <button className={styles.button} >Add</button>
    </form>
    </div>
  )
}
