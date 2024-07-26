'use client';
import DeshBorad from '../../dashboard/DashCompoent'
import SettingSidebar from '../settingSidebar'
import { Rightarrow } from '../../../../public'
import styles from '../Setting.module.css'
import React, { useState } from 'react';
import RateEdit from '../../Popups/RateEdit'

function page() {
    const [popupIsOpen, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  const data =[
    {name:'Light',amount:'$25'},
    {name:'Optimum',amount:'$45'},
    {name:'Max',amount:'$65'},
  ]
    return (
        <>
            <DeshBorad>
                <SettingSidebar >
                <div className={styles.right_div_data}>
      <div className={styles.space_div} style={{ marginTop: 30 }}>
        <div className={styles.total_rate}>3 Rates</div>
        <div className={styles.add_rate}>Add Rate</div>
      </div>
      <div style={{ marginTop: 20 }}/>
      {data.map((item, index) => (
     <div key={index} style={{ marginTop: 20 }} className={styles.rates_div} onClick={openPopup}>
        <div className={styles.rate_txtt}>{item.name}</div>
        <div className={styles.row}>
          <div className={styles.rate_amount}>{item.amount}</div>
          <Rightarrow />
        </div>
      </div> 
       ))}
          {RateEdit && <RateEdit show={popupIsOpen} handleClose={closePopup} />}
    </div>
      
                </SettingSidebar>
            </DeshBorad>
        </>
    )
}

export default page