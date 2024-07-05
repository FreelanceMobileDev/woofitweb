'use client';
import React, { useState } from 'react';
import OverallInfo from './OverallInfo';
import Measurements from './Measurements';
import Trainings from './Trainings';
import Payments from './Payments';
import styles from './ClientPage.module.css';
import { ArchivedIcon, CallIcon, LeftArrow, MessageIcon } from '../../../public';
const Clientinformation = ({setSelectedItem}) => {
  const [activeTab, setActiveTab] = useState('Overall Info');

  return (

    <div className={styles.containor}>
      <div className={styles.headerr}>
        <div className={styles.clietdiv}>
        <div onClick={()=>{setSelectedItem('Clients')}} style={{cursor:'pointer'}}>
          <LeftArrow />
          </div>
          <div className={styles.ClientStyle}>Client</div>
        </div>
        <div className={styles.clietdiv}>
          <ArchivedIcon/>
         <div className={styles.archive_div}>Add to Archive</div>
        </div>
      </div>
<div className={styles.main_div__}>
  <div className={styles.left_div_profile}>
<img
style={{height:107,width:107}}
src='/images/profileee.png'
/>
<h1 className={styles.usernamee}>Eloise Robinson</h1>
<div className={styles.clietdiv}>
<div className={styles.gender_age}>36 Years old</div>
<div className={styles.lineee}/>
<div className={styles.gender_age}>Male</div>
</div>
<div className={styles.clietdiv} style={{marginTop:30,marginBottom:30}}>
  <div className={styles.callicon_background}><CallIcon/></div>
  <div className={styles.callicon_background}><MessageIcon/></div>
</div>
<div className={styles.EditProfilee_buttoon} onClick={()=>{setSelectedItem('EditClient')}}>
Edit Profile
</div>
  </div>




  <div className={styles.right_div_data}>

    <div className={styles.tabs}>
        {['Overall Info', 'Measurements', 'Trainings', 'Payments'].map((tab) => (
          <div
            key={tab}
            className={activeTab === tab ? styles.activeTab : styles.tabdiv}
            onClick={() => setActiveTab(tab)}
          >
            <div  className={activeTab === tab ? styles.activeTabtext : styles.tabtxt}>{tab}</div>
          </div>
        ))}
      </div>
    
      <div className={styles.tabContent}>
        {activeTab === 'Overall Info' && <OverallInfo />}
        {activeTab === 'Measurements' && <Measurements />}
        {activeTab === 'Trainings' && <Trainings />}
        {activeTab === 'Payments' && <Payments />}
      </div>
    
    
    </div>
</div>
    </div>
  );
};

export default Clientinformation