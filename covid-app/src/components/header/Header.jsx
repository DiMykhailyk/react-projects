import React from 'react';
import styles from './Header.module.css';
import logo from '../../icons/logo.svg';
import { MyInput } from '../UI/input/MyInput';
import vector from '..//../icons/Vector.svg';

export const Header = ({sortedListFn, onChangeSearchValue, searchValue }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftSide}>
        <img className={styles.Img_Logo} src={logo} alt="#" />
        <span className={styles.Title}>statistic</span>
      </div>
      <div className={styles.RightSide}>
        <MyInput 
        onChange={onChangeSearchValue} 
        searchValue={searchValue} />
        <img className={styles.Img_Vector} src={vector} alt="#" />
        <select className={styles.Sorted_select}defaultValue='Sorted by' onChange={(e)  => sortedListFn(e.target.value)}>
          <option>Sorted by</option>
          <option>Deaths</option>
          <option>Total recovery</option>
          <option>Total confirmed</option>
        </select>
      </div>
    </div>
  )
}