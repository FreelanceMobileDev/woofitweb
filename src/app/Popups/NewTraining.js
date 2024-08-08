'use client';
import React, { useEffect, useState } from 'react';
import { CrossIcon } from '../../../public';
import styles from './Popups.module.css';
import OntheDate from './OntheDate'
import ForthePeriod from './ForthePeriod'
import { getClinent } from '../../api/helper';
const NewTraining = ({ show, handleClose }) => {
  const [activeTab, setActiveTab] = useState('OntheDate');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={show ? styles.popupDisplay : styles.popupHide}>
      <div className={styles.popupContent}>
        <div className={styles.space_div}>
          <div />
          <div className={styles.popheadertxt}>New Training</div>
          <div onClick={handleClose} className={styles.greycrossicon}><CrossIcon /></div>
        </div>
        <div className={styles.NewTrainingTabsDiv}>
          <div onClick={() => handleTabClick('OntheDate')}  className={activeTab === 'OntheDate' ? styles.on_the_date : styles.for_the_period} >On the Date</div>
          <div  onClick={() => handleTabClick('ForthePeriod')} className={activeTab === 'ForthePeriod' ? styles.on_the_date : styles.for_the_period}>For the Period</div>
        </div>
        {activeTab === 'OntheDate' && <OntheDate  handleClose={handleClose} />}
        {activeTab === 'ForthePeriod' && <ForthePeriod   handleClose={handleClose}  />}
      </div>
    </div>
  )
}

export default NewTraining