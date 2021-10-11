import React from 'react';
import styles from './MyInput.module.css'
  
export const MyInput = ({searchValue, onChange}) => {
  
  const onChangeHandler = (e) => {
    onChange(e.target.value)
  }
  return (
    <input 
    value={searchValue}
    onChange={onChangeHandler}
    className={styles.MyInput} 
    placeholder='Search...' 
    type="text" 
    />
  )
}