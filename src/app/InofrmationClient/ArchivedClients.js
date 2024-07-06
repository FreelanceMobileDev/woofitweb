
// const ArchivedClients = () => {
//   return (
//   <div>
//     helloooo
//   </div>
//   )
// }

// export default ArchivedClients
'use client';

import { ArchivedIcon,  FilterIcon, SearchIcon } from '../../../public';
import ArchivedClientsData from '../_components/ArchivedClientsData';
import GroupArchivedData from '../_components/GroupArchivedData';

import styles from './../_components/Login.module.css';
import React, { useState } from 'react';
const ArchivedClients = () => {
  const [activeTab, setActiveTab] = useState('Clients');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.DashboardContent} style={{  paddingTop: 40, flexDirection: 'column' }}>
      <div style={{padding: 20,}}>
      <div className={styles.clientsHeaderdiv}>
        <div className={styles.clientstxtt}>Archived Clients</div>
      </div>
      <div className={styles.Groups_Clients} >
        <div style={{display:'flex',}}>
        <div 
         className={activeTab === 'Clients' ? styles.clientsButton : styles.groups_Button}
         onClick={() => handleTabClick('Clients')}
        >
          Clients
        </div>
        <div 
          className={activeTab === 'Groups' ? styles.clientsButton : styles.groups_Button}
          onClick={() => handleTabClick('Groups')}
        >
          Groups
        </div>
        </div>
        <div style={{display:'flex'}}>
        <SearchIcon/>
        <div style={{width:40}}/>
        <FilterIcon/>
        </div>
      </div>
      </div>
      {activeTab === 'Clients' && <ArchivedClientsData/>}
      {activeTab === 'Groups' && <GroupArchivedData />}
    </div>
  )
}

export default ArchivedClients