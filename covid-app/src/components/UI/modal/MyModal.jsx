import React from "react";
import styles from './MyModal.module.css'
import iconConfirmed from '..//..//..//icons/confirmed.svg';
import iconDeaths from '..//..//..//icons/deaths.svg';
import iconRecovered from '..//..//..//icons/recovered.svg';


export const MyModal = ({ open, countryInfo, closeModal }) => {
  
  return (
    <> {open ?
      <div className={styles.Background}>
        <div className={styles.Wrapper}>
          <div className={styles.ContentModal}>
            <div className={styles.Title}>{countryInfo.Country}</div>
            <div className={styles.row}>
              <div>
                <span> 
                  <img className={styles.icon} src={iconConfirmed} alt="#" />
                </span>
                <span>Total Confirmed</span>
              </div>
              <div>{countryInfo.TotalConfirmed}</div>
            </div>
            <div className={styles.row}>
              <div>
                <span>
                <img className={styles.icon} src={iconDeaths} alt="#" />
                </span>
                <span>Total Deaths</span>
              </div>
              <div>{countryInfo.TotalDeaths}</div>
            </div>
          <div className={styles.row}>
            <div>
              <span>
              <img className={styles.icon} src={iconRecovered} alt="#" />
              </span>
              <span>Total Recovered</span>
            </div>
            <div>{countryInfo.TotalRecovered}</div>
          </div>
          </div>
          <button className={styles.btn}onClick={closeModal}>OK</button>
        </div>
      </div>
      : null}
    </>
  )
};
