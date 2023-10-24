import React from 'react'
import styles from './Filter.module.css'
import { useContext } from 'react'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
import { FilterContext } from '../../context/FilterContext'

export default function Filter({todo}) {
  const {filter, setFilter, darkmode, changeDark} = useContext(FilterContext);
    const handleAll= ()=> setFilter('ALL')
    const handleCom= ()=> setFilter('Complete')
    const handleAct= ()=> setFilter('Active')
  const hadnleDark = () => changeDark()
  return (
    <header>
    <ul className={styles.header}>
    <button className={styles.button} onClick={hadnleDark}>{darkmode ? <BsFillMoonFill/> :<BsFillSunFill/>}</button>
        <li><button className={`${styles.filters} ${filter==='ALL' && styles.selected}`} onClick={handleAll}>ALL</button></li>
        <li><button className={`${styles.filters} ${filter==='Complete' && styles.selected}`} onClick={handleCom}>Complete</button></li>
        <li><button className={`${styles.filters} ${filter==='Active' && styles.selected}`} onClick={handleAct}>Active</button></li>
    </ul>
    </header>
  )
}
