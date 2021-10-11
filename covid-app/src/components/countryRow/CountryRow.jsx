import React, { useState } from 'react';
import styles from './CountryRow.module.css';
import { MyModal } from '../UI/modal/MyModal.jsx';


export const CountryRow = ({countryInfo, index}) => {
  const [modal, setModal] = useState(false);
  const isMock = typeof countryInfo.TotalConfirmed ===  'string';
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
   
  return (
  <>
    <div className={isMock ? styles.WrapperMock : styles.Wrapper} 
    onClick={isMock ? () => {} : openModal}>
      <div className={styles.Index}> {index} </div>
      <div className={styles.Country}> {countryInfo.Country} </div>
      <div className={styles.Amount}> {countryInfo.TotalConfirmed} </div>
    </div>
    <MyModal open={modal} closeModal={closeModal} countryInfo={countryInfo}/>
  </>
  )
}
